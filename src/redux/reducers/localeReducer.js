const initialState = {
  locale: 'en-US',
};

const localeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOCALE':
      console.log(action.payload);
      return {
        ...state,
        locale: action.payload,
      };
    default:
      return state;
  }
};

export default localeReducer;
