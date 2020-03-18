import { HTTP_ACTION } from '../constants/constants';
import axios from 'axios';

export const httpMiddleware = client => next => action => {
  if (action[HTTP_ACTION]) {
    const actionInfo = action[HTTP_ACTION];
    const fetchOptions = {
      method: actionInfo.verb,
      headers: actionInfo.headers,
      body: actionInfo.payload || null
    };
    next({
      type: actionInfo.type + "_REQUESTED"
    });
    
    axios.get(actionInfo.endpoint, fetchOptions)
    .then(data => next({
      type: actionInfo.type + "_RECEIVED",
      payload: data
    }))
    .catch(error => 
      next({
        type: actionInfo.type + "_FAILED",
        payload: error
      })
    );
  } else {
    return next(action);
  }
}