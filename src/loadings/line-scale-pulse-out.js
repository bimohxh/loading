module.exports = {
  html: `
<div class="line-scale-pulse-out">
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
      val: '#11D4C5',
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
.line-scale-pulse-out {
  transform: scale($<@scale>);
}
.line-scale-pulse-out > div {
  background-color: $<@color>;
  width: 4px;
  height: 35px;
  border-radius: 2px;
  margin: 2px;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  display: inline-block;
  -webkit-animation: line-scale-pulse-out $<@speed>s -$<(@speed * 2 / 3).toFixed(2)>s infinite cubic-bezier(0.85, 0.25, 0.37, 0.85);
  animation: line-scale-pulse-out $<@speed>s -$<(@speed * 2 / 3).toFixed(2)>s infinite cubic-bezier(0.85, 0.25, 0.37, 0.85);
}
.line-scale-pulse-out > div:nth-child(2), .line-scale-pulse-out > div:nth-child(4) {
  -webkit-animation-delay: -0.4s !important;
  animation-delay: -0.4s !important;
}
.line-scale-pulse-out > div:nth-child(1), .line-scale-pulse-out > div:nth-child(5) {
  -webkit-animation-delay: -0.2s !important;
  animation-delay: -0.2s !important;
}

@-webkit-keyframes line-scale-pulse-out {
  0% {
    -webkit-transform: scaley(1);
    transform: scaley(1);
  }
  50% {
    -webkit-transform: scaley(0.4);
    transform: scaley(0.4);
  }
  100% {
    -webkit-transform: scaley(1);
    transform: scaley(1);
  }
  }
  @keyframes line-scale-pulse-out {
    0% {
    -webkit-transform: scaley(1);
    transform: scaley(1);
  }
  50% {
    -webkit-transform: scaley(0.4);
    transform: scaley(0.4);
  }
  100% {
    -webkit-transform: scaley(1);
    transform: scaley(1);
  }
}
  `
}
