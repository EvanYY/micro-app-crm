import store from '@/store'
import SharedModule from './index'
// import { cloneDeep } from 'lodash'
export const toStore = () => {
  debugger
  const { common, MicroAppCrm } = SharedModule.getShared().getState()
  store.commit('MainCommon/updateMainCommon', (common))
  if (MicroAppCrm) {
    store.commit('MicroAppCrm/updateMainCommon', (MicroAppCrm))
  }
}
