import { useState } from 'react'
import './App.css'

const FAQ = [
  {
    question: "How many bones does a cat have?",
    answer: "A cat has 230 bones - 6 more than a human",
  },
  {
    question: "How much do cats sleep?",
    answer: "The average cat sleeps 12-16 hours per day",
  },
  {
    question: "How long do cats live",
    answer: "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
  },
]

function App() {
  const [openIndex, setOpenIndex] = useState(null);
  
  const handleToogle = (index)=>{
      setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
     <div className="quiz">
      <h1>Frequency Ask Questions</h1>
          
          {
            FAQ.map((quiz,index)=>(
              <div key={index}>
                  <button onClick={()=> handleToogle(index)}>{openIndex === index ? "▼" : "►"}</button> 
                  <span>{quiz.question}</span><br /><br />
                  {
                    openIndex === index && <span>Ans-: {quiz.answer} <br /><br /></span>
                  }
              </div>
            ))
          }
     </div>
    </>
  )
}

export default App
