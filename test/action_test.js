import { expect } from 'chai';
import {
  showLoader,
  hideLoader,
} from '../src/actions';
import C from '../src/constants';

describe('loader action', () => {
  it('should call showLoader', () => {
    const expectedData = {
      loaderMessage: 'fetching data',
      loaderId: '1234',
      type: C.SHOW_LOADER,
    };
    expect(showLoader({
      loaderMessage: 'fetching data',
      loaderId: '1234',
    })).to.deep.equal(expectedData);
  });

  it('should call hideLoader', () => {
    const expectedData = {
      type: C.HIDE_LOADER,
      loaderId: '123',
    };
    expect(hideLoader('123')).to.deep.equal(expectedData);
  });
});
