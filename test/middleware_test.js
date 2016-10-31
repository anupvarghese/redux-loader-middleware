import { expect } from 'chai';
import loaderMiddleware from '../src/middleware';
import createMockStore from './mockstore/create_mock_store';
import { showLoader, hideLoader } from '../src/actions';

describe('Loader middleware test', () => {
  let mockStore;
  const loadEvents = ['TESTING_LOADER'];
  const hideEvents = ['TESTING_HIDE_LOADER'];
  beforeEach(() => {
    mockStore = mockDispatch =>
    createMockStore(
      [loaderMiddleware(loadEvents, hideEvents)],
      mockDispatch
    );
  });

  it('returns a function to handle next', () => {
    const mockDispatch = () => {};
    const nextHandler = loaderMiddleware()(mockDispatch);
    expect(typeof nextHandler).to.equal('function');
  });

  it('should dispatch LOADER action', () => {
    const originalAction = { type: 'TESTING_LOADER', loaderMessage: 'abc', loaderId: '123' };
    const expectedActions = [
      showLoader({
        loaderMessage: 'abc',
        loaderId: '123',
      }),
      originalAction,
    ];
    const mockDispatch = (action) => {
      const expectedAction = expectedActions.shift();
      expect(action).to.deep.equal(expectedAction);
      return action;
    };
    mockStore(mockDispatch).dispatch(originalAction);
    expect(expectedActions.length).to.equal(0);
  });

  it('should dispatch HIDE_LOADER action', () => {
    const originalAction = { type: 'TESTING_HIDE_LOADER', loaderId: '1234' };
    const expectedActions = [
      hideLoader('1234'),
      originalAction,
    ];
    const mockDispatch = (action) => {
      const expectedAction = expectedActions.shift();
      expect(action).to.deep.equal(expectedAction);
      return action;
    };
    mockStore(mockDispatch).dispatch(originalAction);
    expect(expectedActions.length).to.equal(0);
  });

  it('should not dispatch LOADER action', () => {
    const originalAction = { type: 'SOME_OTHER_ACTION', loaderMessage: 'abc' };
    const mockDispatch = (action) => {
      expect(action).to.deep.equal(originalAction);
      return action;
    };
    mockStore(mockDispatch).dispatch(originalAction);
  });
});
