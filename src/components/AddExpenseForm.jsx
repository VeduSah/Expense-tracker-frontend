import { useState } from "react"


 function AddExpenseForm ({formvisible,getExpense})  {
  const [formData,setFormData]=useState({
    ProductName:"",
    GadgetName:"",
    Price:"",
    Date:""
  })
  console.log(formData)
  const handleInput=(e)=>{
setFormData({
  ...formData,
  [e.target.name]:e.target.value
})
  }
  const addForm=e=>{
e.preventDefault();
fetch(`${import.meta.env.VITE_BAKEND_BASE_URL}/api/expenses/create`,{
  method:'POST',
  headers:{
    'Content-type':'application/json'
  },
  body:JSON.stringify(formData)
  })
.then(response=>{
  formvisible();
  getExpense();
})
  }
  return (<>
    <div className='formContainer'>
       <form onSubmit={addForm}>
         <input type='text' placeholder='ProductName' className='inputBox' onChange={handleInput} name="ProductName" value={formData.ProductName}></input>
        <input type='text' placeholder='GadgetName' className='inputBox'  onChange={handleInput}  name="GadgetName" value={formData.GadgetName}></input>
        <input type='number' placeholder='Price'className='inputBox'  onChange={handleInput}  name="Price" value={formData.Price}></input>
        <input type="date" placeholder='Date of purchase'  className='inputBox' onChange={handleInput} name="Date" value={formData.Date}></input>
        <button >Add</button>
        </form>
      
        </div>
        
        </>
  )
}
export default AddExpenseForm;