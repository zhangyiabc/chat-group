import { RouterStore, syncHistoryWithStore } from 'mobx-react-router'
import { createBrowserHistory } from 'history'
import { getBaseName } from '@/utils/utility'

const routing = new RouterStore()

// let curBaseName = baseName

// if (window.location.pathname.indexOf(`/${PURE_LAYOUT}/`) === 5) {
//   curBaseName = `${baseName}/${PURE_LAYOUT}`
// }

const browserHistory = createBrowserHistory({
  basename: `/${getBaseName()}`,
})

const history = syncHistoryWithStore(browserHistory, routing)

export { RouterStore, history }
export default routing
