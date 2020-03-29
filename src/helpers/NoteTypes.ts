import { ID } from '@/helpers/strings'

export type Notes = {
  uid: string,
  name: string,
  tasks: []
}

export type Tasks = [{
  uid: string
  name: string
}]

export default (): Notes => {
  return {
    uid: ID(),
    name: '',
    tasks: []
  }
}

