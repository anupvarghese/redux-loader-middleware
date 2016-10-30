import C from './constants';

const showLoader = ({ message, id }) => ({
  type: C.SHOW_LOADER,
  message,
  id,
});

const hideLoader = id => ({
  type: C.HIDE_LOADER,
  id,
});

export {
  showLoader,
  hideLoader,
};
