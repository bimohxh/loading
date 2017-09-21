module.exports = {
  html: `
<div class="line-spin-fade-loader">
  <div></div>
  <div></div>
  <div></div>
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
      val: 1,
      ui: 'slider',
      params: {
        range: [0.1, 10],
        step: 0.1
      }
    },
    {
      name: '前景色',
      key: 'color',
      val: '#1487FF',
      ui: 'color'
    },
    {
      name: '动画速度',
      key: 'speed',
      val: 1.2,
      ui: 'slider',
      params: {
        range: [1, 5],
        step: 0.1
      }
    }
  ],
  css: `
.line-spin-fade-loader {
  position: relative;
  top: -10px;
  left: -4px;
  transform: scale($<@scale>);
}

.line-spin-fade-loader > div:nth-child(1) {
  top: 20px;
  left: 0;
  -webkit-animation: line-spin-fade-loader $<@speed>s -$<(@speed * 0.7).toFixed(2)>s infinite ease-in-out;
  animation: line-spin-fade-loader $<@speed>s -$<(@speed * 0.7).toFixed(2)>s infinite ease-in-out;
}

.line-spin-fade-loader > div:nth-child(2) {
  top: 13.63636px;
  left: 13.63636px;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-animation: line-spin-fade-loader $<@speed>s -$<(@speed * 0.6).toFixed(2)>s infinite ease-in-out;
  animation: line-spin-fade-loader $<@speed>s -$<(@speed * 0.6).toFixed(2)>s infinite ease-in-out;
}

.line-spin-fade-loader > div:nth-child(3) {
  top: 0;
  left: 20px;
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
  -webkit-animation: line-spin-fade-loader $<@speed>s -$<(@speed * 0.5).toFixed(2)>s infinite ease-in-out;
  animation: line-spin-fade-loader $<@speed>s -$<(@speed * 0.5).toFixed(2)>s infinite ease-in-out;
}

.line-spin-fade-loader > div:nth-child(4) {
  top: -13.63636px;
  left: 13.63636px;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  -webkit-animation: line-spin-fade-loader $<@speed>s -$<(@speed * 0.4).toFixed(2)>s infinite ease-in-out;
  animation: line-spin-fade-loader $<@speed>s -$<(@speed * 0.4).toFixed(2)>s infinite ease-in-out;
}

.line-spin-fade-loader > div:nth-child(5) {
  top: -20px;
  left: 0;
  -webkit-animation: line-spin-fade-loader $<@speed>s -$<(@speed * 0.3).toFixed(2)>s infinite ease-in-out;
  animation: line-spin-fade-loader $<@speed>s -$<(@speed * 0.3).toFixed(2)>s infinite ease-in-out;
}

.line-spin-fade-loader > div:nth-child(6) {
  top: -13.63636px;
  left: -13.63636px;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-animation: line-spin-fade-loader $<@speed>s -$<(@speed * 0.2).toFixed(2)>s infinite ease-in-out;
  animation: line-spin-fade-loader $<@speed>s -$<(@speed * 0.2).toFixed(2)>s infinite ease-in-out;
}

.line-spin-fade-loader > div:nth-child(7) {
  top: 0;
  left: -20px;
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
  -webkit-animation: line-spin-fade-loader $<@speed>s -$<(@speed * 0.1).toFixed(2)>s infinite ease-in-out;
  animation: line-spin-fade-loader $<@speed>s -$<(@speed * 0.1).toFixed(2)>s infinite ease-in-out;
}

.line-spin-fade-loader > div:nth-child(8) {
  top: 13.63636px;
  left: -13.63636px;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  -webkit-animation: line-spin-fade-loader $<@speed>s 0s infinite ease-in-out;
  animation: line-spin-fade-loader $<@speed>s 0s infinite ease-in-out;
}

.line-spin-fade-loader > div {
  background-color: $<@color>;
  width: 4px;
  height: 35px;
  border-radius: 2px;
  margin: 2px;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  position: absolute;
  width: 5px;
  height: 15px;
}

@-webkit-keyframes line-spin-fade-loader {
  50% {
    opacity: 0.3;
  }

  100% {
    opacity: 1;
  }
}

@keyframes line-spin-fade-loader {
  50% {
    opacity: 0.3;
  }

  100% {
    opacity: 1;
  }
}
  `
}
