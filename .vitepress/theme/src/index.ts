import { addHistoryListener, initRum, initTheme } from './components/utils'
import Theme from './theme-default'
import { inBrowser } from 'vitepress'
import { useCodeGroup } from './components/CodeGroup/useCodeGroup'

if (inBrowser) {
  initTheme()
  initRum()
  addHistoryListener()
  useCodeGroup()
}

export { Theme }
