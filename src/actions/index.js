export const isLoading = bool => ({
  type: 'IS_LOADING', 
  isLoading: bool
}); 

export const hasErrored = bool => ({
  type: 'HAS_ERRORED', 
  hasErrored: bool
}); 

export const signInUser = (userName, token) =>  ({
  type: 'SIGN_IN_USER', 
  userName, 
  token
}); 

export const signOutUser = () => ({
  type: 'SIGN_OUT_USER'
}); 

export const createContact = contact => ({
  type: 'CREATE_CONTACT', 
  contact
}); 

export const getAllContacts = contacts => ({
  type: 'GET_ALL_CONTACTS', 
  contacts
});

export const getCurrentContact = contact => ({
  type: 'GET_CURRENT_CONTACT', 
  contact
}); 

export const updateContact = contact => ({
  type: 'UPDATE_CONTACT', 
  contact
}); 

export const updateOccasions = occasion => ({
  type: 'UPDATE_OCCASIONS', 
  occasion
}); 

export const getSuggestions = suggestions => ({
  type: 'GET_SUGGESTIONS', 
  suggestions
}); 