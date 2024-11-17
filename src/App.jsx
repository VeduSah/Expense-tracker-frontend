import React, { useEffect, useState } from 'react'
import AddExpense from './components/AddExpense';
import ExpenseList from './components/ExpenseList';
import './App.css'
const App= ()=> {
  const [expenses,setExpenses]=useState([]);
  useEffect(()=>{
 getExpense();
  },[])
 const getExpense=()=>{
  fetch(`${import.meta.env.VITE_BAKEND_BASE_URL}/api/expenses`)
  .then((response)=>{ 
    if(!response.ok){
    throw new Error('Network response is not Ok')
  }
  return response.json();
})
  .then((data)=>{
    console.log('Fetched data:', data); 
    setExpenses(data);
  })
 
  .catch((error) => console.error('Error fetching expenses:', error));
 }
  
  return (<>
    
     <AddExpense getExpense={getExpense}/>
   
      <div className="Outputshow">
    <ExpenseList  expenses={expenses} getExpense={getExpense}/>
    
    </div>
    </>
  )
}

export default App;