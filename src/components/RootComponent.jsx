import React from 'react';
import EmployeeDetails from './EmployeeDetails/EmployeeDetails';
import EmployeesList from './EmployeesList/EmployeesList';

export const RootComponent = () => {
	return (
		<>
			<EmployeesList />
			<EmployeeDetails />
		
			{/* - GET /employees/
  - POST /employees/
  - PATCH /employees/employee_i */}

		</>
	);
};
