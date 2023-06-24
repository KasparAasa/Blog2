import {makeAutoObservable} from 'mobx'
import {BlogStore} from '@/stores/BlogStore'

export class RootStore {
  blogStore: BlogStore

  constructor() {
    makeAutoObservable(this)

    this.blogStore = new BlogStore()
  }
}