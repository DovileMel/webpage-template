import * as actionTypes from './actionTypes';

export const submitForm = (info) => {
  const formData = Object.assign({}, info, { form_status: "completed" });
  return ({
    type: actionTypes.FORM_SUBMITTED,
    messageForm: formData,
  });

}



