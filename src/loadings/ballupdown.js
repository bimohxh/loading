module.exports = {
  html: `
  <div class="boxLoading"></div>
  `,
  options: [
    {
      name: '尺寸',
      key: 'size',
      val: 50,
      ui: 'slider',
      params: {
        range: [10, 100]
      }
    },
    {
      name: '颜色',
      key: 'color',
      val: '#1A6844',
      ui: 'color'
    },
    {
      name: '旋转速度',
      key: 'speed',
      val: 0.5,
      ui: 'slider',
      params: {
        range: [0.1, 5],
        step: 0.1
      }
    }
  ],
  css: `
  .boxLoading {  
    width: $<@size>px;
    height: $<@size>px;
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }

.boxLoading:before {
  content: '';
  width: $<@size>px;
  height: 5px;
  background: #000;
  opacity: 0.1;
  position: absolute;
  top: $<parseInt(@size * 59 / 50)>px;
  left: 0;
  border-radius: 50%;
  animation: box-loading-shadow $<@speed>s linear infinite;
}
.boxLoading:after {
  content: '';
  width: $<@size>px;
  height: $<@size>px;
  background: $<@color>;
  animation: box-loading-animate $<@speed>s linear infinite;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 3px;
}
  
@keyframes box-loading-animate {
  17% {
    border-bottom-right-radius: 3px;
  }
  25% {
    transform: translateY(9px) rotate(22.5deg);
  }
  50% {
    transform: translateY(18px) scale(1, .9) rotate(45deg);
    border-bottom-right-radius: 40px;
  }
  75% {
    transform: translateY(9px) rotate(67.5deg);
  }
  100% {
    transform: translateY(0) rotate(90deg);
  }
}
  
@keyframes box-loading-shadow {
  0%, 100% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1.2, 1);
  }
}
  `
}
