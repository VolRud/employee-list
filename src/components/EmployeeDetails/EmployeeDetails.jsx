import React from 'react';
import { connect } from 'react-redux';
import { employeesAC } from '../../store/AC';
import { employeesThunks } from '../../store/thunks/inndex';
import { employeeFormTypes } from '../../utils/constants';
import { EmployeeForm } from './EmployeeForm';
import { EmployeeProgress } from './EmployeeProgress';

const EmployeeDetails = (props) => {
	const {
		currentEmployeeId,
		currentEmployee,
		createFormIsOpen,
		editFormIsOpen,
		currentEmployee: { id, name, phone, }
	} = props;

	return currentEmployeeId === null
		? null
		: (
			<div className="employee-details">
				{(editFormIsOpen || createFormIsOpen)
					? (editFormIsOpen
						? (<EmployeeForm
							isCreateForm={false}
							currentEmployee={currentEmployee}
							saveFunction={props.editEMployee}
							canselFunction={props.closeEmployeeForm}
						/>)
						: (<EmployeeForm
							isCreateForm
							saveFunction={props.addEmployee}
							canselFunction={props.closeEmployeeForm}
						/>)
					)
                    
					: (
						<>
							<EmployeeProgress
								editEMployee={props.editEMployee}
								currentEmployee={currentEmployee}
							/>
							<div className="employee-data">
								<span>
                                    Name: {name}
								</span>
								<span>
                                    Phone: {phone}
								</span>
								<button
									onClick={()=>props.openEmployeeForm({
										formType: employeeFormTypes.EDIT,
									})}
								>Edit</button>
								<button
									onClick={()=>props.deleteEmployee(id)}
								>Delete Employee</button>
							</div>
						</>
					)
				}
			</div>
		);
};

const mapStateToProps = (state) => {
	const { currentEmployeeId, currentEmployee, employeesIsLoaded, createFormIsOpen, editFormIsOpen, } = state.employees;
	return {
		currentEmployee,
		currentEmployeeId,
		employeesIsLoaded,
		createFormIsOpen,
		editFormIsOpen,
	};
};

const mapDispatchToProps = dispatch => (
	{
		addEmployee: (employee) => dispatch(employeesThunks.addEmployee(employee)),
		deleteEmployee: (id) => dispatch(employeesThunks.deleteEmployee(id)),
		editEMployee: (employee) => dispatch(employeesThunks.editEmployees(employee)),
		openEmployeeForm: (formType) => dispatch(employeesAC.openEmployeeForm(formType)),
		closeEmployeeForm: () => dispatch(employeesAC.closeEmployeeForm()),
	}
);

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeDetails);



