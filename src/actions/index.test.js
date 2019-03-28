import * as actions from './index.js'; 

describe('actions', () => {
  it('should return a type of IS_LOADING', () => {
    const isLoading = true; 

    const expectedAction = {
      type: 'IS_LOADING', 
      isLoading
    }; 

    const result = actions.isLoading(isLoading); 

    expect(result).toEqual(expectedAction); 

  }); 
}); 