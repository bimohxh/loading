module.exports = {
  html: `
<div class="run-loader"></div>
  `,
  options: [
    {
      name: '尺寸',
      key: 'size',
      val: 50,
      ui: 'slider',
      params: {
        range: [10, 100],
        step: 1
      }
    },
    {
      name: '圆环宽度',
      key: 'huank',
      val: 5,
      ui: 'slider',
      params: {
        range: [1, 20],
        step: 1
      }
    },
    {
      name: '颜色',
      key: 'color',
      val: '#4A9EB1',
      ui: 'color'
    },
    {
      name: '动画速度',
      key: 'speed',
      val: 1,
      ui: 'slider',
      params: {
        range: [0.5, 5],
        step: 0.1
      }
    }
  ],
  css: `
.run-loader {
  width: $<@size>px;
  height: $<@size>px;
  box-sizing: border-box;
  border: $<@huank>px solid $<@color>;
  border-right-color: transparent;
  border-radius: 50%;
  animation: loader-rotate $<@speed>s linear infinite;
}

@keyframes loader-rotate {
  0% {
    transform: rotate(0); }
  100% {
    transform: rotate(360deg); } }
  `
}
