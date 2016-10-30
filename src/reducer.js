import C from './constants';

export default(state = [], action) => {
  switch (action.type) {
    case C.SHOW_LOADER: {
      const { message, id } = action;
      return [...state, { message, id }];
    }
    case C.HIDE_LOADER: {
      return [...state].filter(n => n.id !== action.id);
    }
    default:
      return state;
  }
};
