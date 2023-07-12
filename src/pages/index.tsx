import {Layout} from '@/components/Layout'
import {useStore} from '@/stores/store'
import Link from 'next/link'
import {LargeBlogCard} from '@/components/LargeBlogCard'
import {BlogBox} from '@/components/BlogBox'

// If user is not made, show a welcome page
// If user is made, show user info
export default function Project() {
  const {blogStore} = useStore()
  const {userStore} = useStore()

  return (
    <Layout>
      {userStore.user ?
        <div>
          {blogStore.blogPosts?.reverse().slice(0, 1)
            .map(blogPost =>
              <LargeBlogCard blogPost={blogPost} key={blogPost.id}/>,
            )}

        </div> :
        <div className={'flex justify-center'}>
          <div className={'border-2 rounded-xl flex flex-col flex-wrap max-w-[400px] mt-4'}>
            <div className={'m-4'}>Seems like this is your first time here. Would you like to set up your profile?</div>
            <div className={'flex justify-center mt-8'}>
              <button className={'border-2 border-slate-300 rounded mt-3 w-32 h-12 bg-slate-300 m-2'}>No thanks!
              </button>
              <Link href={'createUser'}
                    className={'border-2 border-slate-300 rounded mt-3 w-32 h-12 bg-slate-300 m-2 flex justify-center items-center hover:border-slate-500'}
              >Get started!</Link>
            </div>
          </div>
        </div>
      }
    </Layout>
  )
}