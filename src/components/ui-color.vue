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
    props: ['value', 'name', 'changeVal'],
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
    watch: {
      value: function (val) {
        this.color.hex = val
      }
    },
    methods: {
      updateValue (value) {
        this.color = value
        this.$emit('input', this.color.hex)
        this.changeVal()
      }
    },
    mounted () {
      window.hidels.push(this)
    }
  }
</script>

<style scoped>
  .color-btn {
    width: 20px;
    height: 20px;
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
