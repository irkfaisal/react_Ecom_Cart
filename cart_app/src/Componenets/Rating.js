import React from 'react'
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = ({ rating, style, onClick, text }) => {
    return (
        <>
            {[...Array(5)].map((_, i) => {
                return (
                    <span key={i} style={style} onClick={() => onClick(i)} >
                        {
                            rating > i ? (<AiFillStar fontSize="15px" />) : (<AiOutlineStar fontSize="15px" />)
                        }
                    </span>
                )
            })}
        </>
    )
}

export default Rating;