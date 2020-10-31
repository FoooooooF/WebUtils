import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import styles from './Qrcode.css';
import routes from '../../constants/routes.json';
// import {
//     increment,
//     decrement,
//     incrementIfOdd,
//     incrementAsync,
//     selectCount,
// } from './counterSlice';

export default function Qrcode() {
    return (
        <div>
             <Link to={routes.HOME}>
                    <i className="fa fa-arrow-left fa-3x" />
            </Link>
           qrcode
        </div>
    );
}
