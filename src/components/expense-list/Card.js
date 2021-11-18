import moment from 'moment';
import React from 'react';
import {BsTrash} from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { deleteExpense } from '../../redux/actions/expenses';
import './Card.css';

const Card = ({item, notifySuccess}) => {
    const time = moment(item.createdAt).fromNow();
    const dispatch = useDispatch();

    const handleDelete =()=>{
        dispatch(deleteExpense(item));
        notifySuccess();
    }

    console.log(item.category.icon)

    return (
        <div className='card' style={{borderRight: `6px solid ${item.category.color}` }}>
            <div className='card-image-container'>
                {/* <i><{item.category.icon}/></i> */}
            </div>
            <div className='card-info'>
                <label className='card-title'>{item.title}</label>
                <label className='card-time'>{time}</label>
            </div>
            <div className='card-right'>
                <div>
                    <label className='card-amount'>₹ {item.amount}</label>
                </div>
                <div className='delete-icon' onClick={handleDelete}>
                    <i><BsTrash/></i>
                </div>
            </div>
        </div>
    )
}

export default Card
