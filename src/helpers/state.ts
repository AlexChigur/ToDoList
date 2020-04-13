export const currentNote = (state, noteUid) => {
   return state.find(({ uid }) => uid === noteUid)
}
