module.exports = {
  html: `
<div class="ball-pulse">
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
      val: '#0FB560',
      ui: 'color'
    },
    {
      name: '动画速度',
      key: 'speed',
      val: 0.75,
      ui: 'slider',
      params: {
        range: [0.2, 5],
        step: 0.1
      }
    }
  ],
  css: `
.ball-pulse {
  transform: scale($<@scale>);
}

.ball-pulse > div:nth-child(1) {
  -webkit-animation: ball-pulse-scale $<@speed>s -$<(@speed * 24 / 75).toFixed(2)>s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
  animation: ball-pulse-scale $<@speed>s -$<(@speed * 24 / 75).toFixed(2)>s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
}

.ball-pulse > div:nth-child(2) {
  -webkit-animation: ball-pulse-scale $<@speed>s -$<(@speed * 12 / 75).toFixed(2)>s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
  animation: ball-pulse-scale $<@speed>s -$<(@speed * 12 / 75).toFixed(2)>s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
}

.ball-pulse > div:nth-child(3) {
  -webkit-animation: ball-pulse-scale $<@speed>s 0s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
  animation: ball-pulse-scale $<@speed>s 0s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
}

.ball-pulse > div {
  background-color: $<@color>;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  margin: 2px;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  display: inline-block;
}

@keyframes ball-pulse-scale {
  0% {
  -webkit-transform: scale(1);
  transform: scale(1);
  opacity: 1;
  }
  45% {
    -webkit-transform: scale(0.1);
    transform: scale(0.1);
    opacity: 0.7;
  }
  80% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}
  `
}

