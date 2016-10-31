import C from './constants';

const showLoader = ({ loaderMessage, loaderId }) => ({
  type: C.SHOW_LOADER,
  loaderMessage,
  loaderId,
});

const hideLoader = loaderId => ({
  type: C.HIDE_LOADER,
  loaderId,
});

export {
  showLoader,
  hideLoader,
};
