import { ID } from '@/helpers/strings'

export const getDefaultState = () => {
  return {
    name: '',
    uid: ID(),
    tasks: []
  }
}

export const state = getDefaultState()
