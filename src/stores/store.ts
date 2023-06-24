import {enableStaticRendering} from 'mobx-react'
import {RootStore} from '@/stores/RootStore'
import {configurePersistable} from 'mobx-persist-store'

if (typeof (window) === 'undefined') {
  enableStaticRendering(true)
} else {
  configurePersistable(
    {
      storage: window.localStorage,
    },
  )
}

let rootStore: RootStore

export function useStore() {
  if (!rootStore) {
    rootStore = new RootStore()
  }

  return rootStore
}