export const SET_DOC_ID = "SET_DOC_ID";
export const SET_CODE = "SET_CODE";
export const SET_EDITING = "SET_EDITING";
export const SET_USER_ANSWERS = "SET_USER_ANSWERS";

export const setDocId = (docId) => ({
  type: SET_DOC_ID,
  docId,
});

export const setCode = (code) => ({
  type: SET_CODE,
  code,
});

export const setEditing = (editing) => ({
  type: SET_EDITING,
  editing,
});

export const setUserAnswers = (userAnswers) => ({
  type: SET_USER_ANSWERS,
  userAnswers,
});
