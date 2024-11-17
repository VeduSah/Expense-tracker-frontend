import React from 'react'

import  ExpenseItem  from './ExpenseItem'
 const ExpenseList = ({expenses,getExpense}) => {

  return (
    <>
    <h1>Expense List</h1>
    {expenses.length > 0 ? (
        expenses.map((expense) => <ExpenseItem  expense={expense} getExpense={getExpense} />) 
      ) : (
        <p>No expenses to show.</p>)}

    </>
  )
}
export default ExpenseList;