export const isLoading = (bool) => ({
  type: 'IS_LOADING', 
  isLoading: bool
})

export const hasErrored = (bool) => ({
  type: 'HAS_ERRORED', 
  hasErrored: bool
})

export const signInUser = (userName, token) =>  ({
  type: 'SIGN_IN_USER', 
  userName, 
  token
})