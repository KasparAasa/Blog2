import {Layout} from '@/components/Layout'
import {useStore} from '@/stores/store'

// If user is not made, show a welcome page
// If user is made, show user info
export default function Project() {

  const {userStore} = useStore()

  return (
    <Layout>
      {userStore.user ?
        <div>{userStore.user.name}</div> :
        <div>
          <div>Seems like this is your first time here.</div>
          <div>
            <button className={'border-2 border-slate-300 rounded mt-3 w-28 h-8'}>Get started!</button>
          </div>
        </div>
      }
    </Layout>
  )
}