import api from "../../../common/api";
import { replace } from "connected-react-router";
import { apiErrorToast } from "../../../common/api/apiErrorToast";
import { setLoading, ActionTypes } from "../list";
import { toast } from "react-toastify";

/* Actions */
function success(productTypes) {
  return {
    type: ActionTypes.CREATE,
    productTypes
  };
}

function handleError(dispatch, error) {
  apiErrorToast(error);
  
  return dispatch(setLoading(false));
}

export function create(productTypes) {
  return function(dispatch) {
    dispatch(setLoading(true));
    return api
      .post(`/producttype/`, productTypes)
      .then(response => {
        if (!response.data.success) {
          var error = {response: {data: {Message: response.data.message}}};

          return handleError(dispatch, error);
        }

        dispatch(success(response.data.data));
        dispatch(setLoading(false));
        toast.success("El tipo de product se guardo con éxito");
        
        return dispatch(replace("/producttype"));
      })
      .catch(error => {
        return handleError(dispatch, error);
      });
  };
}
