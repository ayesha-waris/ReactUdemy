import './NewExpense.css';
import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) => {
 const onSaveExpenseData = (enteredExpenseData) =>{
  const expenseData = {
    ...enteredExpenseData,
    id: Math.random().toString()
  };
 
  props.addExpenseHandler(expenseData);
 };

 const [buttonClicked, setButtonClicked] = useState(false);
 const buttonHandler = () =>{
   setButtonClicked(true);
 }
 const stopEditing = () =>{
  setButtonClicked(false);
}
  return ( 
<div className='new-expense'>
{!buttonClicked && <button onClick = {buttonHandler}> Add Expenses </button>}
{buttonClicked &&<ExpenseForm onSaveExpenseData={onSaveExpenseData} stopEditing={stopEditing}/>}
</div>

   );
}
 
export default NewExpense;