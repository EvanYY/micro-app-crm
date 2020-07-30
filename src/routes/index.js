// 组件内路由守卫
// beforeRouteEnter
// beforeRouteUpdate
// beforeRouteLeave
import { beforeEach } from './beforeEach'
import { afterEach } from './afterEach'
import { beforeResolve } from './beforeResolve'
import { onError } from './onError'
import { onReady } from './onReady'
export { beforeEach, beforeResolve, afterEach, onError, onReady }

export const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('@/views/Main.vue'),
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/Home.vue')
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('@/views/About.vue')
      }
    ]
  }

]
