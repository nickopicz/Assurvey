import { combineReducers } from "redux";

import { SET_CODE, SET_DOC_ID } from "./actions";

/**
 * reducer for the docId to access a survey to edit
 */

const docIdRed = (docIdRed = { docId: "" }, action) => {
  switch (action.type) {
    case SET_DOC_ID:
      return { docId: action.docId };
    default:
      return docIdRed;
  }
};

const codeRed = (codeRed = { code: "" }, action) => {
  switch (action.type) {
    case SET_CODE:
      return { code: action.code };
    default:
      return codeRed;
  }
};

const reducers = combineReducers({
  docIdRed,
  codeRed,
});

export default reducers;
