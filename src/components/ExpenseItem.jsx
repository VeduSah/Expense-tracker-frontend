import React from 'react'
import AddExpense from './AddExpense'

 const ExpenseItem = ({expense,getExpense}) => {
  const DeleteExpense=(expenseId)=>{
    fetch(`${import.meta.env.VITE_BAKEND_BASE_URL}/api/expenses/${expenseId}`,
      {
        method:'DELETE'
      })
      .then(response=>getExpense())
  }
  return (
    <div className='itemContainer'>

    <p>{expense.ProductName}</p>

    <p>{expense.Price}</p>
    <button onClick={()=>DeleteExpense(expense._id)}>X</button>
   
    </div>
    
  )
 
}
export default ExpenseItem;