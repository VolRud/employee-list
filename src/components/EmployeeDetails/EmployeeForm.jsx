import React, { useState} from "react";
import { useEffect } from "react";
import { employeeProgressSteps } from "../../utils/constants";

export const EmployeeForm = (props) => {
    const [employeeData, setEmployeeData] = useState({
        name: '',
        phone: '',
        status: employeeProgressSteps[0],
    });

    useEffect(()=>{
        if(!isCreateForm){
            const { currentEmployee, } = props;
            setEmployeeData({
                name: currentEmployee.name,
                phone: currentEmployee.phone,
                id: currentEmployee.id,
            });
        }
    }, [props.currentEmployee]);
 
    const { isCreateForm, } = props;

    const saveEmployee = () => {
        props.saveFunction({
            ...employeeData,
        })
    }
    const handleChangeEmployee = (e) => {
        setEmployeeData({
            ...employeeData,
            [e.target.name]: e.target.value,
        });
    }
    return(
        <div className="employee-data">
            <span>
                Name:
                <input
                    name='name'
                    type='text'
                    value={employeeData.name}
                    onChange={(e)=>handleChangeEmployee(e)}
                />
            </span>
            <span>
                Phone:
                <input
                    name='phone'
                    type='text'
                    value={employeeData.phone}
                    onChange={(e)=>handleChangeEmployee(e)}
                />
            </span>
            <button
                onClick={saveEmployee}
                >Save</button>
            <button
                onClick={props.canselFunction}
            >Cansel</button>
        </div>
    )
}