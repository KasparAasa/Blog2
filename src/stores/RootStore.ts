import {makeAutoObservable} from 'mobx'
import {BlogStore} from '@/stores/BlogStore'
import {UserStore} from '@/stores/UserStore'

export class RootStore {
  blogStore: BlogStore
  userStore: UserStore

  constructor() {
    makeAutoObservable(this)

    this.blogStore = new BlogStore()
    this.userStore = new UserStore()
  }
}