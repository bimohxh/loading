module.exports = {
  html: `
<div class="mikepad-loading">
  <div class="binding"></div>
  <div class="pad">
    <div class="line line1"></div>
    <div class="line line2"></div>
    <div class="line line3"></div>
  </div>
</div>
  `,
  options: [
    {
      name: '尺寸',
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
      val: '#E15958',
      ui: 'color'
    },
    {
      name: '旋转速度',
      key: 'speed',
      val: 0.5,
      ui: 'slider',
      params: {
        range: [0.1, 5],
        step: 0.1
      }
    }
  ],
  css: `
.mikepad-loading {
  transform: scale($<@scale>);
}

.mikepad-loading .binding {
  content : '';
  width : 27px;
  height : 4px;
  border : 2px solid $<@color>;
  margin : 0 auto;
}

.mikepad-loading .pad {
  width : 15px;
  height : 18px;
  border : 2px solid $<@color>;
  border-top : 0;
  padding : 6px;
  margin : 0 auto;
}

.mikepad-loading .line {
  width : 15px;
  margin-top : 4px;
  border-top : 2px solid $<@color>;
  opacity : 0;
  -webkit-animation : writeline 3s infinite ease-in;
  animation : writeline 3s infinite ease-in;
}

.mikepad-loading .line:first-child {
  margin-top : 0;
}

.mikepad-loading .line.line1 {
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
}

.mikepad-loading .line.line2 {
  -webkit-animation-delay: 0.5s;
  animation-delay: 0.5s;
}

.mikepad-loading .line.line3 {
  -webkit-animation-delay: 1s;
  animation-delay : 1s;
}


@-webkit-keyframes writeline {
  0% { width : 0px; opacity: 0; }
  33% { width : 15px; opacity : 1; }
  70% { opacity : 1; }
  100% {opacity : 0; }
}

@keyframes writeline {
  0% { width : 0px; opacity: 0; }
  33% { width : 15px; opacity : 1; }
  70% { opacity : 1; }
  100% {opacity : 0; }
}
  `
}
