module.exports = {
  html: `
<div class="ball-pulse-sync">
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
      val: '#B1AFAE',
      ui: 'color'
    },
    {
      name: '动画速度',
      key: 'speed',
      val: 0.6,
      ui: 'slider',
      params: {
        range: [0.2, 5],
        step: 0.1
      }
    }
  ],
  css: `
.ball-pulse-sync {
  transform: scale($<@scale>);
}

.ball-pulse-sync > div:nth-child(1) {
  -webkit-animation: ball-pulse-sync $<@speed>s -$<(@speed * 14 / 60).toFixed(2)>s infinite ease-in-out;
  animation: ball-pulse-sync $<@speed>s -$<(@speed * 14 / 60).toFixed(2)>s infinite ease-in-out;
}
.ball-pulse-sync > div:nth-child(2) {
  -webkit-animation: ball-pulse-sync $<@speed>s -$<(@speed * 7 / 60).toFixed(2)>s infinite ease-in-out;
  animation: ball-pulse-sync $<@speed>s -$<(@speed * 7 / 60).toFixed(2)>s infinite ease-in-out;
}
.ball-pulse-sync > div:nth-child(3) {
  -webkit-animation: ball-pulse-sync $<@speed>s 0s infinite ease-in-out;
  animation: ball-pulse-sync $<@speed>s 0s infinite ease-in-out;
}
.ball-pulse-sync > div {
  background-color: $<@color>;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  margin: 2px;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  display: inline-block;
}

@keyframes ball-pulse-sync {
  33% {
  -webkit-transform: translateY(10px);
  transform: translateY(10px);
  }
  66% {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
  `
}

