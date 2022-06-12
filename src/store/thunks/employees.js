import { employeesConst } from '../constants';
import { mainRequest } from '../../services/mainRequest';


export const getEmployees = () => {
	return dispatch => {
		dispatch({
			type: employeesConst.REQUEST_GET_RECEIVE_EMPLOYEES,
			payload: {},
		});
		mainRequest(
			{},
			employeesConst.REQUEST_GET_RECEIVE_EMPLOYEES,
			dispatch,
		);
	};
};

export const editEmployees = (employee) => {
	return dispatch => {
		dispatch({
			type: employeesConst.REQUEST_PATCH_EDIT_EMPLOYEE,
			payload: employee,
		});
		mainRequest(
			employee,
			employeesConst.REQUEST_PATCH_EDIT_EMPLOYEE,
			dispatch,
		);
	};
};

export const deleteEmployee = (id) => {
	return dispatch => {
		dispatch({
			type: employeesConst.REQUEST_DELETE_DELETE_EMPLOYEE,
			payload: id,
		});
		mainRequest(
			{ id, },
			employeesConst.REQUEST_DELETE_DELETE_EMPLOYEE,
			dispatch,
		);
	};
};

export const addEmployee = (employeeData) => {
	return dispatch => {
		dispatch({
			type: employeesConst.REQUEST_POST_ADD_EMPLOYEE,
			payload: employeeData,
		});
		mainRequest(
			employeeData,
			employeesConst.REQUEST_POST_ADD_EMPLOYEE,
			dispatch,
		);
	};
};