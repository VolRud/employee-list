import React from 'react';
import classNames from 'classnames';

export const EmployeeCard = (props) => {
	const { id, currentEmployeeId, name, phone, status, } = props;
	const setCurrentEmployee = () => {
		props.setCurrentEmployeeView(id);
	};
	return(
		<div
			onClick={setCurrentEmployee} 
			className={classNames('employee-card', {
				'employee-card-active': currentEmployeeId === id,
			})}
		>
			<span>{name}, {status}</span>
			<span>{phone}</span>
		</div>
	);
};