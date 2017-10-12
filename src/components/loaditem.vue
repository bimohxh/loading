<template>
  <div v-bind:class="'load-item ' + (isfullscreen ? 'fullscreen' : '') ">
    <a href="javascript:void(0)" title="退出全屏" class="close-full-btn" @click="switchFullscreen(false)" v-show="isfullscreen">
      <icon name="close"></icon>
    </a>
    <div class="load-inner" v-html="formatHtml(dataitem)" :style="{backgroundColor: dataitem.bgcolor}"></div>
    <div class="load-bar">

      <a href="javascript:void(0)" @click="exportCode"  title="下载">
        <svg class="icon">
          <use xlink:href="static/icon.svg#code-download"></use>
        </svg>
      </a>
      <a href="javascript:void(0)" @click="viewcode"  title="查看代码">
        <svg class="icon">
          <use xlink:href="static/icon.svg#code-working"></use>
        </svg>
      </a>

      <a href="javascript:void(0)"  title="全屏" @click="switchFullscreen(true)">
        <svg class="icon">
          <use xlink:href="static/icon.svg#fullscreen"></use>
        </svg>
      </a>

      <a href="javascript:void(0)"  title="调整参数" @click="showconf = !showconf">
        <svg class="icon">
          <use xlink:href="static/icon.svg#cog"></use>
        </svg>
      </a>

      <div class="load-config-panel" v-if="dataitem.options && showconf">

        <div style="margin-bottom: 10px;">
          <a href="javascript:void(0)"  title="重置" @click="resetParam">
            <svg class="icon">
              <use xlink:href="static/icon.svg#reset"></use>
            </svg>
          </a>
          <a href="javascript:void(0)"  title="收起" @click="showconf = false"  style="float: right">
            <svg class="icon">
              <use xlink:href="static/icon.svg#arrow-up"></use>
            </svg>
          </a>
        </div>
        <component is="ui-color" v-model="dataitem.bgcolor"  name="背景色"></component>
        <template v-for="option in dataitem.options">
          <component v-bind:is="'ui-' + option.ui" v-model="option.val" :params="option.params" :name="option.name" :changeVal="changeVal"></component>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  import UiColor from './ui-color'
  import UiSlider from './ui-slider'
  import $ from 'jquery'
  var FileSaver = require('file-saver')
  let originalParams = []

  export default {
    props: ['dataitem', 'showCode'],
    data () {
      return {
        showconf: false,
        isfullscreen: false
      }
    },
    components: {
      UiColor,
      UiSlider
    },
    methods: {
      formatHtml: function (code) {
        let css = code.css
        let optionval = (code.options || []).reduce((result, item) => {
          result[item.key] = item.val
          return result
        }, {})
        css = css.replace(/\$<[^<>]+>/g, item => {
          let con = item.substring(2, item.length - 1).replace(/@([a-zA-Z]+)/g, `optionval['$1']`)
          return eval(con)
        })
        code.result.css = css
        return `<div class="loading-box"><style style="text/css">${css}</style>${code.html}</div>`
      },

      updateColor (item, value) {
        item.options[1].val = value
      },

      // 重置参数
      resetParam () {
        this.dataitem.options.forEach(item => {
          item.val = item.oldval
        })
      },

      // 切换全屏
      switchFullscreen (isfull) {
        this.isfullscreen = isfull
        if (isfull) {
          $('body').addClass('hidescroll')
        } else {
          $('body').removeClass('hidescroll')
        }
      },

      // 查看代码
      viewcode () {
        this.showCode(this.dataitem)
      },

      changeVal () {
        this.showCode(this.dataitem, true)
      },

      // 导出下载
      exportCode () {
        let html = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Awesomes Loadings</title>

    
    <style type="text/css">
      .container {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      /* Loading CSS 样式 */ 
      ${this.dataitem.result.css.replace(/\n/g, '\n      ')}
    </style>
  </head>
  <body>
    <div class="container">
      <!-- Loading HTML-->
      ${this.dataitem.html.replace(/\n/g, '\n      ')}
    </div>
  </body>
</html>
        `
        var blob = new Blob([html], {type: "text/plain;charset=utf-8"})
        FileSaver.saveAs(blob, "loading.html")
      }
    }
  }
</script>

<style scoped>
  .load-item {
    width: 250px;
    height: 300px;
    background-color: #FFF;
    margin: 20px;
    box-shadow: 1px 1px 15px #EEE;
    border: #EEE 1px solid;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .load-item.fullscreen {
    position: fixed;
    width: 100%;
    height: 100%;
    top: -20px;
    left: -20px;
    z-index: 500;
  }

  .close-full-btn {
    display: inline-block;
    position: absolute;
    right: 20px;
    top: 10px;
  }

  .load-config-panel {
    width: 100%;
    position: absolute;
    background-color: #FFF;
    box-shadow: 1px 8px 15px #EEE;
    padding: 20px;
    padding-top: 10px;
    left: 0;
    top: 50px;
    border-top: #AAA 1px solid;
    box-sizing: border-box;
    z-index: 10
  }

  .load-inner {
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  .load-bar {
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 10px;
    position: relative;
    box-sizing: border-box;
    justify-content: space-around;
  }

  .load-bar > a {
    display: inline-block;
    margin-right: 10px;
  }

  .load-bar > a.pull-right {
    float: right;
    margin-left: 10px;
  }
</style>
