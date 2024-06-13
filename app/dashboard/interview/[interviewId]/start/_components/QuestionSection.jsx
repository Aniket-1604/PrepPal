import { Lightbulb, Volume2 } from 'lucide-react'
import React from 'react'

function QuestionSection({mockInterviewQuestion,activeQuestionIndex}) {

    const textToSpeech=(text)=>{
        if('speechSynthesis' in window){
            const speech = new SpeechSynthesisUtterance(text)
            window.speechSynthesis.speak(speech)
        }
        else{
            alert('Your browser does not support text to speech.')
        }
    }
  return mockInterviewQuestion&&(
    <div className='p-5 rounded-lg border my-10'>
        <div className='grid grid-cols-2  gap-5 md:grid-cols-3 lg:grid-cols-4'>
            {mockInterviewQuestion&&mockInterviewQuestion.map((question,index)=>(
               <h2 className={`p-2 bg-secondary rounded-full text-xs md:text-sm text-center cursor-pointer
                ${activeQuestionIndex==index && 'text-white bg-blue-800 '}`}>Question #{index+1}</h2> 
            ))}
        </div>
        <h2 className='my-5 text-md md:text-lg'>{mockInterviewQuestion[activeQuestionIndex]?.Question}</h2>
        <Volume2 className='cursor-pointer' onClick={()=>textToSpeech(mockInterviewQuestion[activeQuestionIndex]?.Question)}/>

        <div className='border rounded-lg p-5 bg-blue-100 mt-20'>
            <h2 className='flex gap-2 items-center text-primary'>
                <Lightbulb/>
                <strong>Note:</strong>
            </h2>
            <h2 className='text-sm text-primary my-2'>{process.env.NEXT_PUBLIC_QUESTION_NOTE}</h2>
        </div>
    </div>
  )
}

export default QuestionSection
