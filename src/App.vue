<template>
  <div id="app" class="container">
    <div class="banner">
      <h1>Awesome Loading</h1>
      <p>可定制的 CSS 加载动画</p>
    </div>
    <div class="load-outer">
      <loaditem v-for="item in codes" :dataitem="item" :showCode="showPanel"></loaditem>
    </div>

    <transition name="slide">
      <div class="code-panel" v-show="codepanel.show">
        <a href="javascript:void(0)" class="close-code-btn" @click="codepanel.show= false" >
          <icon name="close"></icon>
        </a>
        <div class="inner">
          <h4>HTML</h4>
          <div class="area-html">
            <textarea >{{codepanel.code.html}}</textarea>
          </div>
          <h4>CSS</h4>
          <div class="area-css">
            <textarea>{{codepanel.code.css}}</textarea>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import Loaditem from './components/loaditem'
  let loadings = require('./loadings/loading')
  
  loadings.forEach(load => {
    load.options.forEach(item => {
      item.oldval = item.val
    })
    load.result = {
      css: load.css
    }
  })

  export default {
    name: 'app',
    data () {
      return {
        codes: loadings,
        codepanel: {
          show: false,
          code: {
            html: '',
            css: ''
          }
        }
      }
    },
    components: {
      Loaditem
    },
    methods: {
      showPanel: function (code, isUpdate) {
        console.log('====', isUpdate)
        // 查看
        if (!isUpdate) {
          this.codepanel.show = true
          this.codepanel.code.html = code.html
          this.codepanel.code.css = code.result.css
        } else { // 更新当前的视图
          if (this.codepanel.code.html === code.html) {
            this.codepanel.code.css = code.result.css
          }
        }
      }
    },
    mounted () {
      window.hidels = []
      document.body.onclick = () => {
        window.hidels.forEach(item => {
          item.ishow = false
        })
      }
    }
  }
</script>

<style>
  html,body {
    margin: 0;
    padding: 0; 
    color: #555;
    font-size: 14px;
    background-color: #f7f8fa
  }

  .hidescroll {
    height: 0;
    overflow: hidden
  }

  * {
    font-family: Menlo, Monaco, Consolas, "Helvetica Neue", Helvetica, "Courier New", 微软雅黑, monospace, Arial, sans-serif, 黑体;
  }

  .slide-enter-active,  .slide-leave-active {
    transition: all .3s ease;
  }

  .slide-enter, .slide-leave-to {
    transform: translateX(400px)
  }

  .container {
    max-width: 1000px;
    margin: 50px auto
  }

  [v-show], ['v-cloak'] {
    display: none
  }

  a, svg {
    transition: all,.5s,ease,0s;
    -webkit-transition: all,.5s,ease,0s;
    text-decoration: none
  }

  a:link, a:visited {
    color: #999;
  }

  a:link svg, a:visited svg {
    fill: #999; 
  }

  a:active, a:hover {
    color: #f34e5c;
  }

  a:active svg, a:hover svg{
    fill: #f34e5c;
  }

  .icon {
    width: 20px;
    height: 20px;
    display: inline-block;
    fill: #000;
  }

  .loading-box {
    display: flex;
    width: 100%;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
  }

  .load-outer {
    width: 100%;
    display: flex;
    flex-wrap:  wrap;
    padding: 50px 0;
    justify-content: space-between;
  }

  .form-item {
    display: flex;
    width: 100%;
    align-items: center;
    position: relative;
    margin-bottom: 15px;
  }

  .form-item .input-name {
    width: 100px;
  }

  .form-item .form-txt {
    border: #DDD 1px solid;
    padding: 8px 10px;
    outline: none;
    display: block;
    flex-grow: 1;
    border-color: #d2d6de;
    width: 100%;
    height: 34px;
    padding: 6px 12px;
  }

  .svg-icon {
    width: 20px;
    height: 20px;
  }

  .code-panel {
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    width: 400px;
    background-color: #FFF;
    box-shadow: 1px 1px 15px #EEE;
    border-left: #ebebeb 1px solid;
    opacity: 0.9;
    z-index: 50;
  }

  .code-panel .inner {
    padding: 20px 40px;
    display: flex;
    flex-direction: column;
    height: 100%;
    box-sizing: border-box;
  }

  .code-panel textarea {
    resize: none;
    width: 100%;
    height: 100%;
    position: absolute;
    line-height: 22px;
    letter-spacing: 1px;
    padding: 0 10px;
  }

  .code-panel .area-html {
    height: 150px;
    position: relative
  }

  .code-panel .area-css {
    flex-grow: 1;
    position: relative
  }

  .code-panel .close-code-btn {
    position: fixed;
    top: 20px;
    right: 20px; 
  }

  .banner {
    text-align: center
  }
</style>
