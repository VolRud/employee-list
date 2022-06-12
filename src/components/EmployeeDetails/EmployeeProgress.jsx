import React from "react";
import classNames from "classnames";
import { employeeProgressSteps } from "../../utils/constants";

export const EmployeeProgress = (props) => {
    const { currentEmployee, currentEmployee: { status }, } = props;
    const progressSteps = employeeProgressSteps.map(item => {
        return {
            stepName: item,
            isCurrentStep: item === status,
        }
    });
    const changeEmployeeStatus = (stepName) => {
        props.editEMployee({
            ...currentEmployee,
            status: stepName,
        })
    }
    return(
        <div className="employee-progress-bar">
            {progressSteps.map(item => {
                const { isCurrentStep, stepName, } = item;
                return(
                    <div
                        key={stepName}
                        onClick={()=>changeEmployeeStatus(stepName)}
                        className={classNames('employee-progress-step', {
                        'employee-progress-step-active': isCurrentStep,
                    })}
                    >
                        {stepName}
                    </div>
                )
            })}
        </div>
    );
}