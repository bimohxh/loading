module.exports = {
  html: `<div class="spinner"></div>`,
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
      name: '前景色',
      key: 'color',
      val: '#561BB9',
      ui: 'color'
    },
    {
      name: '旋转速度',
      key: 'speed',
      val: 1.5,
      ui: 'slider',
      params: {
        range: [1, 5],
        step: 0.1
      }
    }
  ],
  css: `
.spinner {
  width: $<@size>px;
  height: $<@size>px;
  background-color: $<@color>;
  -webkit-animation: rotateplane $<@speed>s infinite ease-in-out;
  animation: rotateplane $<@speed>s infinite ease-in-out;
}

@-webkit-keyframes rotateplane {
  0% { -webkit-transform: perspective(120px) }
  50% { -webkit-transform: perspective(120px) rotateY(180deg) }
  100% { -webkit-transform: perspective(120px) rotateY(180deg)  rotateX(180deg) }
}

@keyframes rotateplane {
  0% {
    transform: perspective(120px) rotateX(0deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg)
  } 50% {
    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg)
  } 100% {
    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
  }
}
  `
}
