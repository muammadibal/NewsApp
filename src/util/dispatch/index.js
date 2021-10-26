export const dispatchLoading = (dispatch, type) => {
  return dispatch({
    type,
    payload: {
      loading: true,
      data: [],
      error: false,
    },
  });
};
export const dispatchSuccess = (dispatch, type, result) => {
  return dispatch({
    type,
    payload: {
      loading: false,
      data: result,
      error: false,
    },
  });
};
export const dispatchError = (dispatch, type, error) => {
  return dispatch({
    type,
    payload: {
      loading: false,
      data: [],
      error,
    },
  });
};
