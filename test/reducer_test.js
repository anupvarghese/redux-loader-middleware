import { expect } from 'chai';
import loaderReducer from '../src/reducer';
import C from '../src/constants';

describe('loader reducer', () => {
  it('should return initial state', () => {
    expect(loaderReducer(undefined, {})).to.deep.equal([]);
  });

  it(`should handle ${C.SHOW_LOADER}`, () => {
    const expectedData = [{
      loaderMessage: 'Hi',
      loaderId: '1234',
    }];
    const action = Object.assign({}, expectedData[0], { type: C.SHOW_LOADER });
    expect(loaderReducer([], action)).to.deep.equal(expectedData);
  });

  it(`should handle ${C.HIDE_LOADER}`, () => {
    const initialData = [{
      loaderId: '1234',
    }];
    expect(loaderReducer(initialData, { type: C.HIDE_LOADER, loaderId: '1234' })).to.deep.equal([]);
  });
});
