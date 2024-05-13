import React, {useState} from 'react'
import SingleQuestions from './SingleQuestions'
import data from './data'

export const Faq = () => {
    const [questions, setQuestions] = useState(data);
  return (
    <div className='faq-main-container'>
        <div className='faq-sub-container'>
            <h3>FREQUENTLY ASKED QUESTIONS</h3>
            <p className='faq-sub-para'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. 
                Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            <div className='accordianfaq'>
                {questions.map((question) => {
                    return <SingleQuestions key={question.id} {...question}/>;
                        })}
            </div>
        </div>

    </div>
  )
}
export default Faq;