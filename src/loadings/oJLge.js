module.exports = {
  html: `
<div class="ojlge-box">
  <div class="loading outer">
    <div class="loading inner"></div>
  </div>
</div>
  `,
  options: [
    {
      name: '缩放',
      key: 'scale',
      val: 0.5,
      ui: 'slider',
      params: {
        range: [0.1, 10],
        step: 0.1
      }
    },
    {
      name: '颜色',
      key: 'color',
      val: '#f60',
      ui: 'color'
    },
    {
      name: '投影深度',
      key: 'shadowDepth',
      val: '0.25',
      ui: 'slider',
      params: {
        range: [0.1, 10],
        step: 0.01
      }
    },
    {
      name: '外环速度',
      key: 'outerSpeed',
      val: 1.25,
      ui: 'slider',
      params: {
        range: [0.5, 5],
        step: 0.1
      }
    },
    {
      name: '内环速度',
      key: 'innerSpeed',
      val: 1.35,
      ui: 'slider',
      params: {
        range: [0.5, 5],
        step: 0.1
      }
    }
  ],
  css: `
.ojlge-box .loading {
  box-sizing: border-box;
  position: relative;
  display: inline-block;
  padding: $<@scale>em;
  vertical-align: middle;
  text-align: center;
  background-color: transparent;
  border: $<@scale * 10>px solid transparent;
  border-top-color: $<@color>;
  border-bottom-color: $<@color>;
  border-radius: 50% 0;
  box-shadow: 0 0 $<@shadowDepth>em $<@color> inset;
}

.ojlge-box .outer {
  animation: ojlge-spin $<@outerSpeed>s infinite linear;
}

.ojlge-box .inner {
  animation: ojlge-spin $<@innerSpeed>s infinite linear;
}

@keyframes ojlge-spin {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
  `
}
