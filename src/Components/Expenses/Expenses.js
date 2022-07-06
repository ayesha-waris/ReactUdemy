import React from 'react';
import { useState } from 'react';

import Card from '../../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
const Expenses = (props) => {
  const [filter, setFilter] = useState('');
  const onChangeExpenseFilterHandler = (expenseFilter) => {
    setFilter(expenseFilter);
  };
  const filteredItem = (item) => {
    return item.date.getFullYear().toString() === filter;
  };

  const filteredItems = props.items.filter(filteredItem);
  
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          filter={filter}
          onChangeExpenseFilterHandler={onChangeExpenseFilterHandler}
        />
        <ExpensesChart expenses={filteredItems}/>
        <ExpensesList items = {filteredItems}/>
        
      </Card>
    </div>
  );
};

export default Expenses;
