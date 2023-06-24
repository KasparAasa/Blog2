import {Layout} from '@/components/Layout'
import React, {useState} from 'react'
import {BlogBox} from '@/components/BlogBox'
import {useStore} from '@/stores/store'


export default function Project() {

  const {blogStore} = useStore()

  return (
    <Layout>
      {blogStore.blogPosts?.map(blogPost =>
        <BlogBox blogPost={blogPost} key={blogPost.id}/>,
      )}
    </Layout>
  )
}