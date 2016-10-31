import { showLoader, hideLoader } from './actions';

const loader = (showEvents, hideEvents) => ({ dispatch }) => next => (action) => {
  if (showEvents.indexOf(action.type) !== -1) {
    const { message, id } = action;
    dispatch(showLoader({
      message,
      id,
    }));
  }
  if (hideEvents.indexOf(action.type) !== -1) {
    const { id } = action;
    dispatch(hideLoader(id));
  }
  return next(action);
};

export default loader;
