module.exports = {
  html: `
<div class="line-scale-pulse-out-rapid">
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
      name: '颜色',
      key: 'color',
      val: '#A8B50F',
      ui: 'color'
    },
    {
      name: '动画速度',
      key: 'speed',
      val: 0.9,
      ui: 'slider',
      params: {
        range: [0.5, 5],
        step: 0.1
      }
    }
  ],
  css: `
.line-scale-pulse-out-rapid {
  transform: scale($<@scale>);
}

.line-scale-pulse-out-rapid > div {
  background-color: $<@color>;
  width: 4px;
  height: 35px;
  border-radius: 2px;
  margin: 2px;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  display: inline-block;
  vertical-align: middle;
  -webkit-animation: line-scale-pulse-out-rapid $<@speed>s -$<(@speed * 5 / 9).toFixed(2)>s infinite cubic-bezier(0.11, 0.49, 0.38, 0.78);
  animation: line-scale-pulse-out-rapid $<@speed>s -$<(@speed * 5 / 9).toFixed(2)>s infinite cubic-bezier(0.11, 0.49, 0.38, 0.78);
}

.line-scale-pulse-out-rapid > div:nth-child(2), .line-scale-pulse-out-rapid > div:nth-child(4) {
  -webkit-animation-delay: -0.25s !important;
  animation-delay: -0.25s !important;
}
.line-scale-pulse-out-rapid > div:nth-child(1), .line-scale-pulse-out-rapid > div:nth-child(5) {
  -webkit-animation-delay: 0s !important;
  animation-delay: 0s !important;
}

@keyframes line-scale-pulse-out-rapid {
  0% {
  -webkit-transform: scaley(1);
  transform: scaley(1);
  }
  80% {
    -webkit-transform: scaley(0.3);
    transform: scaley(0.3);
  }
  90% {
    -webkit-transform: scaley(1);
    transform: scaley(1);
  }
}
  `
}

