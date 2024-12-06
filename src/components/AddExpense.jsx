import React, {  useState } from 'react'
import AddExpenseForm from './AddExpenseForm';

function AddExpense ({getExpense}) {
    const [formVisibility,setformVisibility]=useState(false);
    const formvisible=()=>{
            setformVisibility(!formVisibility)
    }
  return (
    <div>
        {formVisibility && <AddExpenseForm formvisible={formvisible} getExpense={getExpense}/>}
        <button onClick={formvisible}  className='visible-btn'>+</button>
    </div>
  )
}
export default AddExpense;
