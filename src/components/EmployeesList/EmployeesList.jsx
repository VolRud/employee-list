import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { employeesThunks } from '../../store/thunks/inndex';
import { Loader } from '../ui';
import { EmployeeCard } from './EmployeeCard';
import { employeesAC } from '../../store/AC';
import { employeeFormTypes } from '../../utils/constants';

const EmployeesList = (props) => {
	const { employees, employeesIsLoaded, currentEmployeeId, } = props;
	useEffect(() => {
		if(!employeesIsLoaded){
			props.getEmployees();
		}
	});

	return employeesIsLoaded 
		? (
			<div className="employee-list">
				<button
					onClick={()=>props.openEmployeeForm({
						formType: employeeFormTypes.CREATE,
					})}
				>Create new Employee</button>
				{employees.map((item) => {
					return(
						<EmployeeCard
							key={item.id}
							currentEmployeeId={currentEmployeeId}
							setCurrentEmployeeView={props.setCurrentEmployeeView}
							{...item}
						/>
					);
				})} 

			</div>
		)
		: (<Loader />);
};

const mapStateToProps = (state) => {
	const { employees, employeesIsLoaded, currentEmployeeId, } = state.employees;
	return {
		employees,
		employeesIsLoaded,
		currentEmployeeId,
	};
};

const mapDispatchToProps = dispatch => (
	{
		openEmployeeForm: (formType) => dispatch(employeesAC.openEmployeeForm(formType)),
		setCurrentEmployeeView: (id) => dispatch(employeesAC.setCurrentEmployeeView(id)),
		getEmployees: () => dispatch(employeesThunks.getEmployees()),
	}
);

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesList);