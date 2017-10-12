module.exports = {
  html: `
<div class="pacman">
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
      val: '#c2d411',
      ui: 'color'
    },
    {
      name: '动画速度',
      key: 'speed',
      val: 1,
      ui: 'slider',
      params: {
        range: [0.5, 5],
        step: 0.1
      }
    }
  ],
  css: `
.pacman {
  position: relative;
  transform: scale($<@scale>);
}
.pacman > div:nth-child(2) {
  -webkit-animation: pacman-balls $<@speed>s -$<(@speed * 0.99).toFixed(2)>s infinite linear;
  animation: pacman-balls $<@speed>s -$<(@speed * 0.99).toFixed(2)>s infinite linear;
}
.pacman > div:nth-child(3) {
  -webkit-animation: pacman-balls $<@speed>s -$<(@speed * 0.66).toFixed(2)>s infinite linear;
  animation: pacman-balls $<@speed>s -$<(@speed * 0.66).toFixed(2)>s infinite linear;
}
.pacman > div:nth-child(4) {
  -webkit-animation: pacman-balls $<@speed>s -$<(@speed * 0.33).toFixed(2)>s infinite linear;
  animation: pacman-balls $<@speed>s -$<(@speed * 0.33).toFixed(2)>s infinite linear;
}
.pacman > div:nth-child(5) {
  -webkit-animation: pacman-balls $<@speed>s 0s infinite linear;
  animation: pacman-balls $<@speed>s 0s infinite linear;
}
.pacman > div:first-of-type {
  width: 0px;
  height: 0px;
  border-right: 25px solid transparent;
  border-top: 25px solid $<@color>;
  border-left: 25px solid $<@color>;
  border-bottom: 25px solid $<@color>;
  border-radius: 25px;
  -webkit-animation: rotate_pacman_half_up $<(@speed -0.5)>s 0s infinite;
  animation: rotate_pacman_half_up $<(@speed -0.5)>s 0s infinite;
  position: relative;
  left: -30px;
}
.pacman > div:nth-child(2) {
  width: 0px;
  height: 0px;
  border-right: 25px solid transparent;
  border-top: 25px solid $<@color>;
  border-left: 25px solid $<@color>;
  border-bottom: 25px solid $<@color>;
  border-radius: 25px;
  -webkit-animation: rotate_pacman_half_down $<(@speed -0.5)>s 0s infinite;
  animation: rotate_pacman_half_down $<(@speed -0.5)>s 0s infinite;
  margin-top: -50px;
  position: relative;
  left: -30px;
}
.pacman > div:nth-child(3), .pacman > div:nth-child(4), .pacman > div:nth-child(5), .pacman > div:nth-child(6) {
  background-color: $<@color>;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  margin: 2px;
  width: 10px;
  height: 10px;
  position: absolute;
  -webkit-transform: translate(0, -6.25px);
  transform: translate(0, -6.25px);
  top: 25px;
  left: 70px;
}

@-webkit-keyframes rotate_pacman_half_up {
  0% {
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg);
  }

  50% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }

  100% {
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg);
  }
}

@keyframes rotate_pacman_half_up {
  0% {
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg);
  }

  50% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }

  100% {
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg);
  }
}

@-webkit-keyframes rotate_pacman_half_down {
  0% {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }

  50% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
}

@keyframes rotate_pacman_half_down {
  0% {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }

  50% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
}

@-webkit-keyframes pacman-balls {
  75% {
    opacity: 0.7;
  }

  100% {
    -webkit-transform: translate(-100px, -6.25px);
    transform: translate(-100px, -6.25px);
  }
}

@keyframes pacman-balls {
  75% {
    opacity: 0.7;
  }

  100% {
    -webkit-transform: translate(-100px, -6.25px);
    transform: translate(-100px, -6.25px);
  }
}
  `
}
