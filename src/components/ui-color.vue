<template>
  <div class="form-item">
    <span class="input-name">{{name}}</span>
    <div class="color-btn" :style="{backgroundColor: color.hex}" @click.stop="ishow = true">
      <div class="color-pop" v-if="ishow">
        <chrome-picker v-bind:value="color" @input="updateValue"></chrome-picker>
      </div>
    </div>
  </div>
</template>

<script>
  import { Chrome } from 'vue-color'
  export default {
    props: ['value', 'name'],
    data () {
      return {
        ishow: false,
        color: {
          hex: this.value
        }
      }
    },
    components: {
      'chrome-picker': Chrome
    },
    methods: {
      updateValue (value) {
        console.log('更新')
        this.color = value
        this.$emit('input', this.color.hex)
      },
      changeColor () {
        this.$emit('input', this.color.hex)
      }
    }
  }
</script>

<style scoped>
  .color-btn {
    width: 25px;
    height: 25px;
    cursor: pointer;
    border: #727272 4px solid;
    position: relative
  }

  .color-pop {
    position: absolute;
    left: 40px;
    top: -5px;
    z-index: 11
  }
</style>
