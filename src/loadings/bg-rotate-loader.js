module.exports = {
  html: `
<div class="bg-rotate-loader"></div>
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
      val: '#0052EC',
      ui: 'color'
    },
    {
      name: '圆环背景',
      key: 'bgcolor',
      val: '#B8D0FA',
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
.bg-rotate-loader {
  width: $<@size>px;
  height: $<@size>px;
  box-sizing: border-box;
  border: $<@huank>px solid $<@bgcolor>;
  border-top-color: $<@color>;
  border-radius: 50%;
  animation: loader-rotate $<@speed>s linear infinite;
}

@keyframes bg-loader-rotate {
  0% {
    transform: rotate(0); }
  100% {
    transform: rotate(360deg); } }
  `
}
