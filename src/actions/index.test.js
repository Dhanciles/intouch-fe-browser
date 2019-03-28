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

  it('should return a type of HAS_ERRORED', () => {
    const hasErrored = true;

    const expectedAction = {
      type: 'HAS_ERRORED', 
      hasErrored
    };

    const result = actions.hasErrored = actions.hasErrored(hasErrored);

    expect(result).toEqual(expectedAction);
  });
}); 