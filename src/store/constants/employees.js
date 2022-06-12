// thunks
export const REQUEST_GET_RECEIVE_EMPLOYEES = 'REQUEST_GET_RECEIVE_EMPLOYEES';
export const REQUEST_POST_ADD_EMPLOYEE = 'REQUEST_POST_ADD_EMPLOYEE';
export const REQUEST_PATCH_EDIT_EMPLOYEE = 'REQUEST_PATCH_EDIT_EMPLOYEE';
export const REQUEST_DELETE_DELETE_EMPLOYEE = 'REQUEST_DELETE_DELETE_EMPLOYEE';
// AC
export const SET_CURRENT_EMPLOYEE_VIEW = 'SET_CURRENT_EMPLOYEE_VIEW';
export const OPEN_EMPLOYEE_FORM = 'OPEN_EMPLOYEE_FORM';
export const CLOSE_EMPLOYEE_FORM = 'CLOSE_EMPLOYEE_FORM';

export const employeeEndpoints = {
	[REQUEST_GET_RECEIVE_EMPLOYEES]: '/employees/',
	[REQUEST_POST_ADD_EMPLOYEE]: '/employees/',
	[REQUEST_PATCH_EDIT_EMPLOYEE]: '/employees/',
	[REQUEST_DELETE_DELETE_EMPLOYEE]: '/employees/',
};