import { expect } from 'chai';
import {
  showLoader,
  hideLoader,
} from '../src/actions';
import C from '../src/constants';

describe('loader action', () => {
  it('should call showLoader', () => {
    const expectedData = {
      message: 'fetching data',
      id: '1234',
      type: C.SHOW_LOADER,
    };
    expect(showLoader({
      message: 'fetching data',
      id: '1234',
    })).to.deep.equal(expectedData);
  });

  it('should call hideLoader', () => {
    const expectedData = {
      type: C.HIDE_LOADER,
      id: '123',
    };
    expect(hideLoader('123')).to.deep.equal(expectedData);
  });
});
