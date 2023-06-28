import {useStore} from '@/stores/store'
import {Layout} from '@/components/Layout'
import {BlogBox} from '@/components/BlogBox'


export default function BlogPosts() {

  const {blogStore} = useStore()

  return (
    <Layout>
      {blogStore.blogPosts?.map(blogPost =>
        <BlogBox blogPost={blogPost} key={blogPost.id}/>,
      )}
    </Layout>
  )
}