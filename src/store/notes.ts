import { Notes } from '@/helpers/NoteTypes'
import { ID } from '@/helpers/strings'

export const state = (): Notes => ({
  uid: ID(),
  titleNote: '',
  tasks: []
})
