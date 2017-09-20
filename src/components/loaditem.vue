<template>
  <div class="load-item">
    <div class="load-inner" v-html="formatHtml(dataitem)"></div>
    <div class="load-bar">
      <a href="javascript:void(0)" @click="showconf = !showconf">
        <icon name="config"></icon>
      </a>

      <a href="javascript:void(0)" @click="showconf = !showconf">
        <icon name="fullscreen"></icon>
      </a>

      <a href="javascript:void(0)" class="pull-right">
        <icon name="download"></icon>
      </a>
      <a href="javascript:void(0)" class="pull-right">
        <icon name="code"></icon>
      </a>
      <div class="load-config-panel" v-if="dataitem.options && showconf">
        <template v-for="option in dataitem.options">
          <component v-bind:is="'ui-' + option.ui" v-model="option.val" :params="option.params" :name="option.name"></component>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  import UiColor from './ui-color'
  import UiSlider from './ui-slider'
  export default {
    props: ['dataitem'],
    data () {
      return {
        showconf: false
      }
    },
    components: {
      UiColor,
      UiSlider
    },
    methods: {
      formatHtml: function (code) {
        let css = code.css
        // (code.options || []).forEach(item => {
        //   css = css.replace(new RegExp(`\\$<${item.key}>`, 'g'), item.val)
        // })
        let optionval = (code.options || []).reduce((result, item) => {
          result[item.key] = item.val
          return result
        }, {})
        css = css.replace(/\$<[^<>]+>/g, item => {
          let con = item.substring(2, item.length - 1).replace(/@([a-zA-Z]+)/g, `optionval['$1']`)
          return eval(con)
        })
        console.log(css)
        return `<div class="loading-box"><style style="text/css">${css}</style>${code.html}</div>`
      },
      updateColor (item, value) {
        console.log(item, value)
        item.options[1].val = value
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

  .load-config-panel {
    width: 100%;
    position: absolute;
    background-color: #FFF;
    box-shadow: 1px 8px 15px #EEE;
    padding: 20px;
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
