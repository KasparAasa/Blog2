import {BlogPostInterface} from '@/interfaces/BlogPost'
import {observer} from 'mobx-react'

interface BlogBoxProps {
  blogPost: BlogPostInterface
}

export const BlogBox: React.FC<BlogBoxProps> = observer((props) => {
  const {blogPost} = props

  return (
    <div>
      <h1>{blogPost.title}</h1>
    </div>
  )
})