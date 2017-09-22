module.exports = {
  html: `
<div class="wave-slide-box">
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
      val: '#4CAF50',
      ui: 'color'
    },
    {
      name: '动画速度',
      key: 'speed',
      val: 0.6,
      ui: 'slider',
      params: {
        range: [0.1, 5],
        step: 0.1
      }
    }
  ],
  css: `
  .wave-slide-box {
    display: flex;
    transform: scale($<@scale>);
  }
  .wave-slide-box > div {
    margin-top: 15px;
    width: 18px;
    height: 40px;
    box-sizing: border-box;
    border: 2px solid $<@color>;
    margin-left: -2px;
    -webkit-animation: slide $<@speed>s infinite linear;
            animation: slide $<@speed>s infinite linear;
  }
  .wave-slide-box > div:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  .wave-slide-box > div:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  .wave-slide-box > div:nth-child(2n+1) {
    -webkit-animation-delay: $<(@speed / 2).toFixed(1)>s;
            animation-delay: $<(@speed / 2).toFixed(1)s;
  }
  @-webkit-keyframes slide {
    50% {
      margin-top: 25px;
    }
  }
  @keyframes slide {
    50% {
      margin-top: 25px;
    }
  }
  `
}
