import * as employeesConst from './employees';
import { employeeEndpoints } from './employees';

const _ERROR = '_ERROR';
const _SUCCESS = '_SUCCESS';

const endpoints = {
	...employeeEndpoints,
};

export {
	endpoints,
	employeesConst,
	_ERROR,
	_SUCCESS,
};