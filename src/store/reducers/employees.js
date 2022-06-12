import { findById } from '../../utils/helpers';
import { employeesConst, _SUCCESS } from '../constants';

const initialState = {
	employees: [],
	employeesIsLoaded: false,
	currentEmployeeId: null,
	currentEmployee: {},
	addFormIsOpen: false,
};

export const employees = (state = initialState, action) => {
	const { payload, type, } = action;
	console.log('====',type, payload);
	switch (type) {
	case employeesConst.REQUEST_GET_RECEIVE_EMPLOYEES + _SUCCESS:
		return {
			...state,
			employees: payload,
			employeesIsLoaded: true,
			currentEmployee: payload[0],
			currentEmployeeId: payload[0]['id'],
		};
	case employeesConst.REQUEST_PATCH_EDIT_EMPLOYEE + _SUCCESS:
		return {
			...state,
			currentEmployee: payload,
			editFormIsOpen: false,
			employees: state.employees.map(item => {
				return item.id === state.currentEmployeeId
					? payload
					: item;
			})
		};
	case employeesConst.REQUEST_DELETE_DELETE_EMPLOYEE:
		return {
			...state,
			employees: state.employees.filter(item => item.id !== payload),
			currentEmployeeId: null,
			currentEmployee: {},
		};
	case employeesConst.REQUEST_POST_ADD_EMPLOYEE + _SUCCESS:
		return {
			...state,
			employees: [...state.employees, payload],
			createFormIsOpen: false,
			currentEmployee: payload,
			currentEmployeeId: payload.id,
			
		};
	case employeesConst.OPEN_EMPLOYEE_FORM:
		return {
			...state,
			createFormIsOpen: payload.formType === 'CREATE',
			editFormIsOpen: payload.formType === 'EDIT',
		};
	case employeesConst.CLOSE_EMPLOYEE_FORM:
		return {
			...state,
			createFormIsOpen: false,
			editFormIsOpen: false,
		};
	case employeesConst.SET_CURRENT_EMPLOYEE_VIEW:
		return{
			...state,
			currentEmployeeId: payload,
			currentEmployee: findById(state.employees, payload, 'id'),
			createFormIsOpen: false,
			editFormIsOpen: false,
		};
	default:
		return {
			...state,
		};
	}
};
