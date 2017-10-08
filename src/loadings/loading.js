
module.exports = [
  'bg-rotate-loader',
  'huan-loading',
  'run-loading',
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
  'linerotate'
].map(item => {
  return require(`./${item}`)
})
