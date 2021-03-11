const { width, height, top, right } = wx.getMenuButtonBoundingClientRect()
const {
  brand,
  model,
  windowWidth,
  statusBarHeight,
  platform,
  system,
  safeArea
} = wx.getSystemInfoSync()

const PX = windowWidth - right
const PY = top - statusBarHeight

export default {
  width,
  statusBarHeight,
  navBarHeight: height || 32,
  navBarWidth: right - width - PX * 2,
  navBarPadding: [PY, PX],
  safeAreaBottom: safeArea.bottom - safeArea.height,
  brand,
  model,
  platform,
  system
}
