import { employeesConst } from '../constants';

export const setCurrentEmployeeView  = (id) => {
	return {
		type: employeesConst.SET_CURRENT_EMPLOYEE_VIEW,
		payload: id,
	};
};

export const openEmployeeForm = (formType) => {
	return {
		type: employeesConst.OPEN_EMPLOYEE_FORM,
		payload: formType,
	};
};

export const closeEmployeeForm = () => {
	return {
		type: employeesConst.CLOSE_EMPLOYEE_FORM,
		payload: null,
	};
};