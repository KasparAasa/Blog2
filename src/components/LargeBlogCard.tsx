import {BlogPostInterface} from '@/interfaces/BlogPost'
import {observer} from 'mobx-react'

interface LargeCardProps {
  blogPost: BlogPostInterface
}

export const LargeBlogCard: React.FC<LargeCardProps> = observer((props) => {
  const {blogPost} = props

  return (
    <div
      className={'max-w-screen-xl hover:bg-slate-100 mt-10 hover:outline outline-slate-300 outline-1 rounded-xl transition-colors duration-200'}>
      <div className={'flex p-8 max-lg:flex-col gap-10'}>
        <div className={'max-w-2xl max-lg:max-w-full'}>
          <img src={'Story-placeholder.jpg'} className={'rounded-2xl'}/>
        </div>
        <div className={' flex flex-col justify-between'}>
          <div>
            <div className={'text-4xl font-bold'}>Headline that should look good on multiple lines</div>
            <div className={'text-slate-500 font-light text-sm pt-2'}>Posted date</div>
          </div>
          <div className={'text-lg max-lg:pt-5'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            consequatur
            dolorem
            est incidunt necessitatibus omnis recusandae suscipit veniam? Architecto dolores eum hic laudantium velit?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequatur
            dolorem
            est incidunt necessitatibus omnis recusandae suscipit veniam? Architecto dolores eum hic laudantium
          </div>
          <div className={'flex justify-between pt-8 flex-wrap gap-4'}>
            <div className={'flex'}>
              <img src={'profilePlaceholder.jpg'} className={'w-12 rounded-xl'}/>
              <div className={'flex flex-col pl-3'}>
                <div>Author name</div>
                <div className={'whitespace-nowrap'}>Author social media</div>
              </div>
            </div>
            <div
              className={'bg-slate-300 flex justify-center items-center py-3 px-6 rounded-3xl hover:outline outline-1 outline-slate-500 hover:bg-slate-500 hover:text-white'}>ReadMore
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})