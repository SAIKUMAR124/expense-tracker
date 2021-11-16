import React from 'react';
import Card from './Card';
import './ExpenseList.css';

const ExpenseList = () => {
    const list = [{
        title: "Made a purchase",
        logo: 'smfbvjet',
        createdAt: Date.now(),
        amount: 1324,
    }]

    return (
        <div>
            {list.length ? list.map((item)=> <Card item={item} />) :  null}
        </div>
    )
}

export default ExpenseList
