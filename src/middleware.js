import { showLoader, hideLoader } from './actions';

const loader = (showEvents, hideEvents) => ({ dispatch }) => next => (action) => {
  if (showEvents.indexOf(action.type) !== -1) {
    const { loaderMessage, loaderId } = action;
    dispatch(showLoader({
      loaderMessage,
      loaderId,
    }));
  }
  if (hideEvents.indexOf(action.type) !== -1) {
    const { loaderId } = action;
    dispatch(hideLoader(loaderId));
  }
  return next(action);
};

export default loader;
