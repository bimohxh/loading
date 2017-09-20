<template>
  <div id="app" class="container">
    <div class="load-outer">
      <loaditem v-for="item in codes" :dataitem="item"></loaditem>
    </div>
  </div>
</template>

<script>
  import Loaditem from './components/loaditem'
  export default {
    name: 'app',
    data () {
      return {
        codes: require('./loadings/loading')
      }
    },
    components: {
      Loaditem
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
  * {
    font-family: Menlo, Monaco, Consolas, "Helvetica Neue", Helvetica, "Courier New", 微软雅黑, monospace, Arial, sans-serif, 黑体;
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
</style>
