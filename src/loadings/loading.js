
module.exports = [
  'bg-rotate-loader',
  'huan-loading',
  'run-loading',
  'flip-txt',
  'oJLge',
  'line-spin-fade',
  'square',
  'ball-pulse-sync',
  'ball-pulse',
  'line-scale-pulse-out-rapid',
  'line-scale-pulse-out',
  'pacman',
  'ball-clip-rotate-pulse',
  'ball-scale-multiple',
  'ball-scale',
  'ballupdown',
  'notebook',
  'loading-text',
  'linerotate',
  'roataqx',
  'multi-ball'
].map(item => {
  return require(`./${item}`)
})
