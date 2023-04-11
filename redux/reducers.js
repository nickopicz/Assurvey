import { combineReducers } from "redux";

import { SET_DOC_ID } from "./actions";

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

const reducers = combineReducers({
  docIdRed,
});

export default reducers;
