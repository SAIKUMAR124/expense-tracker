import React from 'react'
import AddForm from '../../components/add-form';
import Topfold from '../../components/topfold';
import './AddExpense.css'

const AddExpense = () => {
    return (
        <div className='add-expense'>
            <Topfold/>
            <AddForm/>
        </div>
    )
}

export default AddExpense
