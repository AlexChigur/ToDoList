import { ID } from '@/helpers/strings'
import { NewTask } from '@/helpers/types'

export const getDefaultState = ():NewTask => {
  return {
    name: '',
    uid: ID(),
    tasks: []
  }
}

export const state = ():NewTask => ({
  name: '',
  uid: ID(),
  tasks: []
})
