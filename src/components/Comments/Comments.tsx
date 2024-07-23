import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {clearCommented} from "../../redux/reducers/commentedReducer";
import "./comments.css"
import {CLEAR_LIST_COMMENTS} from "../../utils/constants";


const Comments = () => {
    const dispatch = useDispatch();
    const commented = useSelector((state) => state.commented.commented);

    const handleClearComments = () => {
        dispatch(clearCommented());
    };
    return (
        <div>
            {commented?.map((book, index) => {
                return (
                    <div key={index} className="comments">
                        <p>Title: {book.title} </p>
                        <p>Commentary: {book.comment} </p>
                    </div>
                )
            })}
            <button onClick={handleClearComments}>{CLEAR_LIST_COMMENTS}</button>
        </div>
    )
}

export default Comments
