import router from '@/router'
import middlewarePipeline from './middleware-pipeline'

import auth from './auth'
import userInfo from './user-info'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })
NProgress.configure({ ease: 'ease', speed: 600 })

// 每个路由都会执行的中间件
const middlewares = [userInfo, auth]

router.beforeEach(async (to, from, next) => {
  NProgress.start()

  const context = {
    to,
    from,
    next
  }

  const firstMiddlewares = middlewares[0]

  return firstMiddlewares({
    ...context,
    next: middlewarePipeline(context, middlewares, 1)
  })
})

router.afterEach(() => {
  NProgress.done()
})
