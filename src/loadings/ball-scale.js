module.exports = {
  html: `
<div class="ball-scale">
  <div></div>
</div>
  `,
  options: [
    {
      name: '缩放',
      key: 'scale',
      val: 1,
      ui: 'slider',
      params: {
        range: [0.1, 10],
        step: 0.1
      }
    },
    {
      name: '颜色',
      key: 'color',
      val: '#1487FF',
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
.ball-scale {
  transform: scale($<@scale>);
}
.ball-scale > div {
  background-color: $<@color>;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  margin: 2px;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  display: inline-block;
  height: 60px;
  width: 60px;
  -webkit-animation: ball-scale $<@speed>s 0s ease-in-out infinite;
  animation: ball-scale $<@speed>s 0s ease-in-out infinite;
}

@keyframes ball-scale {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 0;
  }
}
  `
}
