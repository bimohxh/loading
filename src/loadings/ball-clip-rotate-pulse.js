module.exports = {
  html: `
<div class="ball-clip-rotate-pulse">
  <div></div>
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
      name: '中心圆颜色',
      key: 'middleColor',
      val: '#0BC18F',
      ui: 'color'
    },
    {
      name: '边框颜色',
      key: 'borderColor',
      val: '#0CD89F',
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
.ball-clip-rotate-pulse {
  position: relative;
  transform: scale($<@scale>) translateY(-15px);
}

.ball-clip-rotate-pulse > div {
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 100%;
}

.ball-clip-rotate-pulse > div:first-child {
  background: $<@middleColor>;
  height: 16px;
  width: 16px;
  top: 7px;
  left: -7px;
  -webkit-animation: scale $<@speed>s 0s cubic-bezier(0.09, 0.57, 0.49, 0.9) infinite;
  animation: scale $<@speed>s 0s cubic-bezier(0.09, 0.57, 0.49, 0.9) infinite;
}

.ball-clip-rotate-pulse > div:last-child {
  position: absolute;
  border: 2px solid #FFF;
  width: 30px;
  height: 30px;
  left: -16px;
  top: -2px;
  background: transparent;
  border: 2px solid;
  border-color: $<@borderColor> transparent $<@borderColor> transparent;
  -webkit-animation: rotate $<@speed>s 0s cubic-bezier(0.09, 0.57, 0.49, 0.9) infinite;
  animation: rotate $<@speed>s 0s cubic-bezier(0.09, 0.57, 0.49, 0.9) infinite;
  -webkit-animation-duration: $<@speed>s;
  animation-duration: $<@speed>s;
}

@keyframes rotate {
  0% {
    -webkit-transform: rotate(0deg) scale(1);
    transform: rotate(0deg) scale(1);
  }

  50% {
    -webkit-transform: rotate(180deg) scale(0.6);
    transform: rotate(180deg) scale(0.6);
  }

  100% {
    -webkit-transform: rotate(360deg) scale(1);
    transform: rotate(360deg) scale(1);
  }
}

@keyframes scale {
  30% {
    -webkit-transform: scale(0.3);
    transform: scale(0.3);
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
  `
}
