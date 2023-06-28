import {UserInterface} from '@/interfaces/User'
import {makeAutoObservable} from 'mobx'
import {makePersistable} from 'mobx-persist-store'

export class UserStore {
  user?: UserInterface

  constructor() {
    makeAutoObservable(this)
    makePersistable(this, {
      name: 'UserStore',
      properties: [
        'user',
      ],
    })
  }

  addUser(user: UserInterface) {
    this.user = user
  }

  editUser(id: string, user: Partial<UserInterface>) {
    // TODO
  }
}