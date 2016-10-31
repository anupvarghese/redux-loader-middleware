import C from './constants';

export default(state = [], action) => {
  switch (action.type) {
    case C.SHOW_LOADER: {
      const { loaderMessage, loaderId } = action;
      return [...state, { loaderMessage, loaderId }];
    }
    case C.HIDE_LOADER: {
      return [...state].filter(n => n.loaderId !== action.loaderId);
    }
    default:
      return state;
  }
};
