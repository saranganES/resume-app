import * as api from "../common/API_Links";

export const signIns = (formData) => async (dispatch) => {

  try {

    const { data } = await api.signIn(formData);
    dispatch({ type: "SIGN_IN", payload: data });

  } catch (err) {
    console.log("signIn action error", err);
  }

};
