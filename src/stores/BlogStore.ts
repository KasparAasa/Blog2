import {makeAutoObservable} from 'mobx'
import {makePersistable} from 'mobx-persist-store'
import {BlogPostInterface} from '@/interfaces/BlogPost'

export class BlogStore {
  blogPosts?: BlogPostInterface[] = []

  constructor() {
    makeAutoObservable(this)
    makePersistable(this, {
      name: 'BlogStore',
      properties: [
        'blogPosts',
      ],
    })
  }

  addBlogPost(blogPost: BlogPostInterface) {
    this.blogPosts?.push(blogPost)
  }


}