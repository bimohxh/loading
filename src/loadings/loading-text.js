module.exports = {
  html: `
<div class="loading-text">
  <span>L</span>
  <span>O</span>
  <span>A</span>
  <span>D</span>
  <span>I</span>
  <span>N</span>
  <span>G</span>
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
      val: '#B30DDB',
      ui: 'color'
    },
    {
      name: '动画速度',
      key: 'speed',
      val: 1.5,
      ui: 'slider',
      params: {
        range: [0.5, 5],
        step: 0.1
      }
    }
  ],
  css: `
.loading-text {
  text-align: center;
  transform: scale($<@scale>);
}

.loading-text span {
  display: inline-block;
  margin: 0 5px;
  color: $<@color>;
  font-weight: bold
}

.loading-text span:nth-child(1) {
  -webkit-filter: blur(0px);
          filter: blur(0px);
  -webkit-animation: blur-text $<@speed>s 0s infinite linear alternate;
          animation: blur-text $<@speed>s 0s infinite linear alternate;
}
.loading-text span:nth-child(2) {
  -webkit-filter: blur(0px);
          filter: blur(0px);
  -webkit-animation: blur-text $<@speed>s $<(@speed * 0.2 / 1.5).toFixed(2)>s infinite linear alternate;
          animation: blur-text $<@speed>s $<(@speed * 0.2 / 1.5).toFixed(2)>s infinite linear alternate;
}
.loading-text span:nth-child(3) {
  -webkit-filter: blur(0px);
          filter: blur(0px);
  -webkit-animation: blur-text $<@speed>s $<(@speed * 0.4 / 1.5).toFixed(2)>s infinite linear alternate;
          animation: blur-text $<@speed>s $<(@speed * 0.4 / 1.5).toFixed(2)>s infinite linear alternate;
}
.loading-text span:nth-child(4) {
  -webkit-filter: blur(0px);
          filter: blur(0px);
  -webkit-animation: blur-text $<@speed>s $<(@speed * 0.6 / 1.5).toFixed(2)>s infinite linear alternate;
          animation: blur-text $<@speed>s $<(@speed * 0.6 / 1.5).toFixed(2)>s infinite linear alternate;
}
.loading-text span:nth-child(5) {
  -webkit-filter: blur(0px);
          filter: blur(0px);
  -webkit-animation: blur-text $<@speed>s $<(@speed * 0.8 / 1.5).toFixed(2)>s infinite linear alternate;
          animation: blur-text $<@speed>s $<(@speed * 0.8 / 1.5).toFixed(2)>s infinite linear alternate;
}
.loading-text span:nth-child(6) {
  -webkit-filter: blur(0px);
          filter: blur(0px);
  -webkit-animation: blur-text $<@speed>s $<(@speed * 1 / 1.5).toFixed(2)>s infinite linear alternate;
          animation: blur-text $<@speed>s $<(@speed * 1 / 1.5).toFixed(2)>s infinite linear alternate;
}
.loading-text span:nth-child(7) {
  -webkit-filter: blur(0px);
          filter: blur(0px);
  -webkit-animation: blur-text $<@speed>s $<(@speed * 1.2 / 1.5).toFixed(2)>s infinite linear alternate;
          animation: blur-text $<@speed>s $<(@speed * 1.2 / 1.5).toFixed(2)>s infinite linear alternate;
}

@-webkit-keyframes blur-text {
  0% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
  }
  100% {
    -webkit-filter: blur(4px);
            filter: blur(4px);
  }
}

@keyframes blur-text {
  0% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
  }
  100% {
    -webkit-filter: blur(4px);
            filter: blur(4px);
  }
}
  `
}
