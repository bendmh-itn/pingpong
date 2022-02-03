import React from 'react';
import Select from 'react-select'


const SelectModifyPerson = ({data, functionSelect, isClearable = true, value=""}) => {
    const choosePlayer = (event) => {
        if(event !== null){
            functionSelect(event);
        }else{
            functionSelect(null);
        }
    }

    return ( 
        <>
            <Select value={value} options={data} isClearable={isClearable} isSearchable={true} onChange={choosePlayer} />
        </>
     );
}
 
export default SelectModifyPerson;