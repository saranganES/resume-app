const init = {
  signin: null,
  fb_id: null,
};
export const signInReducer = (state = init, action) => {
  switch (action.type) {
    case "FIND_B_ID":
      return { ...state, fb_id: action.payload };

    case "SIGN_IN":
      return { ...state, signin: action.payload };
    default:
      return state;
  }
};
