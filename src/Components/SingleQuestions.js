import React, {useState} from 'react'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'

export const SingleQuestions = ({title, info}) => {
    const [showInfo, setShowInfo] = useState(false);
  return (
    <article className='question'>
        <div className='question-header'>
            <h4 onClick={() => setShowInfo(!showInfo)}>{title}</h4>
            <button className='btn' onClick={() => setShowInfo(!showInfo)}>
                {showInfo ? <AiOutlineMinus/> : <AiOutlinePlus />}
            </button>
        </div>
        {showInfo && <p>{info}</p>}
    </article>
  )
}
export default SingleQuestions;