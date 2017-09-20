<template>
  <div class="form-item">
    <span class="input-name">{{name}}</span>
    <div class="slider-box">
      <vue-slider ref="slider" v-model="slidval" :min="params.range[0]" :max="params.range[1]" tooltip="hover" :interval="params.step || 1"></vue-slider>
    </div>
  </div>
</template>

<script>
  import vueSlider from 'vue-slider-component'
  export default {
    props: ['value', 'params', 'name'],
    data () {
      return {
        ishow: false,
        slidval: this.value
      }
    },
    components: {
      vueSlider
    },
    watch: {
      'slidval': function (value) {
        this.$emit('input', value)
      }
    }
  }
</script>

<style scoped>
  .slider-box {
    width: 100%;
    flex-grow: 1
  }
</style>
