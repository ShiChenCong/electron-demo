const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  // 把触发ping事件的方法传给页面
  ping: () => ipcRenderer.invoke('ping'),
  // we can also expose variables, not just functions
})
