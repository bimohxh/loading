module.exports = {
  html: `
<div class="flip-txt-loading">
  <span>L</span><span>o</span><span>a</span><span>d</span><span>i</span><span>n</span><span>g</span>
</div>
  `,
  options: [
    {
      name: '缩放',
      key: 'scale',
      val: 26,
      ui: 'slider',
      params: {
        range: [12, 200],
        step: 1
      }
    },
    {
      name: '颜色',
      key: 'color',
      val: '#AF3F3F',
      ui: 'color'
    },
    {
      name: '振幅',
      key: 'zf',
      val: '10',
      ui: 'slider',
      params: {
        range: [0, 100],
        step: 1
      }
    },
    {
      name: '字符间距',
      key: 'letterspace',
      val: 5,
      ui: 'slider',
      params: {
        range: [0, 100],
        step: 1
      }
    },
    {
      name: '动画速度',
      key: 'speed',
      val: 2,
      ui: 'slider',
      params: {
        range: [0.5, 5],
        step: 0.1
      }
    }
  ],
  css: `
.flip-txt-loading {
  font: $<@scale>px Monospace;
  letter-spacing: $<@letterspace>px;
  color: $<@color>;
}

.flip-txt-loading > span {
  animation: flip-txt  $<@speed>s infinite;
  display: inline-block;
  transform-origin: 50% 50% -$<@zf>px;
  transform-style: preserve-3d;
}

.flip-txt-loading > span:nth-child(1) {
  -webkit-animation-delay: $<(@speed * 0.1 / 2).toFixed(2)>s;
          animation-delay: $<(@speed * 0.1 / 2).toFixed(2)>s;
}

.flip-txt-loading > span:nth-child(2) {
  -webkit-animation-delay: $<(@speed * 0.2 / 2).toFixed(2)>s;
          animation-delay: $<(@speed * 0.2 / 2).toFixed(2)>s;
}

.flip-txt-loading > span:nth-child(3) {
  -webkit-animation-delay: $<(@speed * 0.3 / 2).toFixed(2)>s;
          animation-delay: $<(@speed * 0.3 / 2).toFixed(2)>s;
}

.flip-txt-loading > span:nth-child(4) {
  -webkit-animation-delay: $<(@speed * 0.4 / 2).toFixed(2)>s;
          animation-delay: $<(@speed * 0.4 / 2).toFixed(2)>s;
}

.flip-txt-loading > span:nth-child(5) {
  -webkit-animation-delay: $<(@speed * 0.5 / 2).toFixed(2)>s;
          animation-delay: $<(@speed * 0.5 / 2).toFixed(2)>s;
}

.flip-txt-loading > span:nth-child(6) {
  -webkit-animation-delay: $<(@speed * 0.6 / 2).toFixed(2)>s;
          animation-delay: $<(@speed * 0.6 / 2).toFixed(2)>s;
}

.flip-txt-loading > span:nth-child(7) {
  -webkit-animation-delay: $<(@speed * 0.7 / 2).toFixed(2)>s;
          animation-delay: $<(@speed * 0.7 / 2).toFixed(2)>s;
}

@keyframes flip-txt  {
  to {
    -webkit-transform: rotateX(1turn);
            transform: rotateX(1turn);
  }
}
  `
}
