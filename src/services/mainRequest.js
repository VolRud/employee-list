import axios from 'axios';
import { endpoints } from '../store/constants';

const API_URL = 'http://localhost:8000';

export const mainRequest = (
	requestData,
	actionType,
	dispatch
) => {
	if(isRequest(actionType)) {
		const requestMethod = getRequestType(actionType);
		const url = getUrl(requestMethod, actionType, requestData);

		axios({
			url,
			method: requestMethod,
			data: requestData,
		})
			.then(res => {
				dispatch({
					type: actionType+'_SUCCESS', 
					payload: res.data,
				});
			}).catch((error) => {
				console.log('2 err - ',error);
				dispatch({
					type: actionType+'_ERROR', 
					payload: error,
				});
			}); 
    
	}
};

const getUrl = (method, actionType, requestData) => {
	let url = API_URL + endpoints[actionType];
	if (
		method === 'delete'
        || method === 'patch'
	){
		return url + requestData.id;
	} else {
		return url;
	}
};

const isRequest = (actionType) => {
	return actionType.includes('REQUEST');
};

const getRequestType = (actionType) => {
	return actionType.split('_')[1].toLowerCase();
};