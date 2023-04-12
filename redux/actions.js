export const SET_DOC_ID = "SET_DOC_ID";
export const SET_CODE = "SET_CODE";

export const setDocId = (docId) => ({
  type: SET_DOC_ID,
  docId,
});

export const setCode = (code) => ({
  type: SET_CODE,
  code,
});
