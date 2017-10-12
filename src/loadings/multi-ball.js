module.exports = {
  html: `
<div class="multi-ball">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
  `,
  options: [
    {
      name: '缩放',
      key: 'scale',
      val: 40,
      ui: 'slider',
      params: {
        range: [10, 100],
        step: 0.1
      }
    },
    {
      name: '颜色',
      key: 'color',
      val: '#333',
      ui: 'color'
    },
    {
      name: '动画速度',
      key: 'speed',
      val: 3,
      ui: 'slider',
      params: {
        range: [1, 20],
        step: 1
      }
    }
  ],
  css: `
.multi-ball {
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-name: multi-ball-fullrotate;
  animation-timing-function: linear;
}
.multi-ball > div {
  position: absolute;
  background-color: $<@color>;
  transform: translateX(-50%) translateY(-50%);
  border-radius: 50%;
  animation-duration: $<@speed>s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-name: multi-ball-loader;
  animation-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.multi-ball > div:nth-child(1) {
  width: $<@scale>px;
  height: $<@scale>px;
  animation-delay: 0s;
}

.l.multi-ball > div:nth-child(2) {
  width: $<parseInt(@scale * 6 / 4)>px;
  height: $<parseInt(@scale * 6 / 4)>px;
  animation-delay: -$<(@speed * 0.5 / 3).toFixed(2)>s;
}

.multi-ball > div:nth-child(3) {
  width: $<parseInt(@scale * 2)>px;
  height: $<parseInt(@scale * 2)>px;
  animation-delay: -$<(@speed * 1 / 3).toFixed(2)>s;
}

.multi-ball > div:nth-child(4) {
  width: $<parseInt(@scale * 10 / 4)>px;
  height: $<parseInt(@scale * 10 / 4)>px;
  animation-delay: -$<(@speed * 1.5 / 3).toFixed(2)>s;
}

.multi-ball > div:nth-child(5) {
  width: $<parseInt(@scale * 3)>px;
  height: $<parseInt(@scale * 3)>px;
  animation-delay: -$<(@speed * 2 / 3).toFixed(2)>s;
}

.multi-ball > div:nth-child(6) {
  width: $<parseInt(@scale * 14 / 4)>px;
  height: $<parseInt(@scale * 14 / 4)>px;
  animation-delay: -$<(@speed * 2.5 / 3).toFixed(2)>s;
}

.multi-ball > div:nth-child(7) {
  width: $<parseInt(@scale * 4)>px;
  height: $<parseInt(@scale * 4)>px;
  animation-delay: -$<(@speed * 3 / 3).toFixed(2)>s;
}

@keyframes multi-ball-loader {
  0% {
    opacity: 0;
    transform: translateX(-50%) translateY(-50%) rotate(0);
  }
  50% {
    opacity: 0.7;
  }
  100% {
    opacity: 0;
    background-color: $<@color>;
    transform: translateX(-50%) translateY(-50%) rotateX(180deg) rotate(360deg);
  }
}

@keyframes multi-ball-fullrotate {
  0% {
    -moz-transform: rotate(0);
    transform: rotate(0);
  }
  100% {
    -moz-transform: rotate(-360deg);
    transform: rotate(-360deg);
  }
}
  `
}
