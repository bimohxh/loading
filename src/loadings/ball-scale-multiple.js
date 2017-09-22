module.exports = {
  html: `
<div class="ball-scale-multiple">
  <div></div>
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
      name: '颜色',
      key: 'color',
      val: '#FF3CB2',
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
.ball-scale-multiple {
  position: relative;
  transform: scale($<@scale>) translateY(-30px);
}

.ball-scale-multiple > div:nth-child(2) {
  -webkit-animation-delay: -0.4s;
  animation-delay: -0.4s;
}

.ball-scale-multiple > div:nth-child(3) {
  -webkit-animation-delay: -0.2s;
  animation-delay: -0.2s;
}

.ball-scale-multiple > div {
  background-color: $<@color>;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  margin: 2px;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  position: absolute;
  left: -30px;
  top: 0px;
  opacity: 0;
  margin: 0;
  width: 60px;
  height: 60px;
  -webkit-animation: ball-scale-multiple $<@speed>s 0s linear infinite;
  animation: ball-scale-multiple $<@speed>s 0s linear infinite;
}

@-webkit-keyframes ball-scale-multiple {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 0;
  }

  5% {
    opacity: 1;
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 0;
  }
}

@keyframes ball-scale-multiple {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 0;
  }

  5% {
    opacity: 1;
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 0;
  }
}
  
  `
}
