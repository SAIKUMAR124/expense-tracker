import React, { useState } from 'react';
import {AiOutlinePlusCircle, AiOutlineSearch} from 'react-icons/ai';
import {BsChevronLeft} from 'react-icons/bs';
import {MdOutlineCancel} from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchExpense } from '../../redux/actions/expenses';
import './Topfold.css';

const Topfold = () => {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();

    const handleQuery=(e)=>{
        setQuery(e.target.value);
        dispatch(searchExpense(e.target.value))
    }

    return (
        <div className='topfold'>
            {
                window.location.pathname ==='/'? <div className="home-topfold">
                <div className="searchbar">
                    <AiOutlineSearch className='search-icon' />
                    <input placeholder='Search for expenses' value={query} onChange={(e)=>handleQuery(e)} />
                </div>
                <Link to='/add-expense'>
                <div className='add-button'>
                    <AiOutlinePlusCircle className='add-icon' />
                    <label>Add</label>
                </div>
                </Link>
            </div> : <div className='add-topfold' >
                <Link to='/'>
                <div className='add-topfold-button'>
                    <i><BsChevronLeft className='left-chevron' /></i>
                    <label>Back</label>
                </div>
                </Link>
                <Link to='/'>
                <div className='add-topfold-button'>
                    <i><MdOutlineCancel className='left-chevron' /></i>
                    <label>Cancel</label>
                </div>
                </Link>
            </div>
            }
        </div>
    )
}

export default Topfold
