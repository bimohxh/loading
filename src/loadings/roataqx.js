module.exports = {
  html: `
<div class="roataqx-loader">
  <div class="one"></div>
  <div class="two"></div>
  <div class="three"></div>
</div>

  `,
  options: [
    {
      name: '缩放',
      key: 'scale',
      val: 64,
      ui: 'slider',
      params: {
        range: [20, 500],
        step: 1
      }
    },
    {
      name: '颜色',
      key: 'color',
      val: '#000',
      ui: 'color'
    },
    {
      name: '线条粗细',
      key: 'lineLength',
      val: '3',
      ui: 'slider',
      params: {
        range: [1, 15],
        step: 1
      }
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
.roataqx-loader {
  width: $<@scale>px;
  height: $<@scale>px;
  border-radius: 50%;
  perspective: 800px;
  position: relative
}

.roataqx-loader > div {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;  
}

.roataqx-loader .one {
  left: 0%;
  top: 0%;
  animation: rotate-one $<@speed>s linear infinite;
  border-bottom: $<@lineLength>px solid $<@color>;
}

.roataqx-loader .two {
  right: 0%;
  top: 0%;
  animation: rotate-two $<@speed>s linear infinite;
  border-right: $<@lineLength>px solid $<@color>;
}

.roataqx-loader .three {
  right: 0%;
  bottom: 0%;
  animation: rotate-three $<@speed>s linear infinite;
  border-top: $<@lineLength>px solid $<@color>;
}

@keyframes rotate-one {
  0% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
  }
}

@keyframes rotate-two {
  0% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
  }
}

@keyframes rotate-three {
  0% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
  }
}
  `
}
