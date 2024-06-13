"use client"
import { db } from '@/utils/db'
import { UserAnswer } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible"
import { ChevronsUpDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'


  

function Feedback({params}) {

    useEffect(()=>{
        GetFeedback()
    },[])

    const [feedbackList, setFeedbackList] = useState([])
    const router = useRouter()
    const GetFeedback = async() => {
        const result = await db.select()
        .from(UserAnswer)
        .where(eq(UserAnswer.mockIdRef,params.interviewId))
        .orderBy(UserAnswer.id)

        console.log(result)
        setFeedbackList(result)
    }
  return (
    <div className='p-10'>
      

      {feedbackList?.length==0?
      <h2 className='font-bold text-xl text-gray-500'>No Interview Feedback Record Found</h2>
      :
      <>
      <h2 className='text-3xl font-bold text-green-500'>Congratulations!</h2>
      <h2 className='text-2xl font-bold'>Here is your interview feedback:- </h2>
      

      

      <h2 className='text-sm text-gray-500'>Find below interview questions with their correct answers, your answers and feedback for improvement:- </h2>
      {feedbackList&&feedbackList.map((item,index)=>(
        <Collapsible key={index} className='mt-7'>
            <CollapsibleTrigger className='p-2 bg-secondary flex justify-between rounded-lg my-2 gap-7 text-left w-full'>
            {item.question}<ChevronsUpDown className='h-5 w-5'/>
            </CollapsibleTrigger>
                <CollapsibleContent>
                <div className='flex flex-col gap-5'>
                    <h2 className='text-red-500 border rounded-lg p-2'><strong>Rating: </strong>{item.rating}</h2>
                    <h2 className='p-2 border rounded-lg bg-red-50 text-sm text-red-900'><strong>Your Answer: </strong>{item.userAns}</h2>
                    <h2 className='p-2 border rounded-lg bg-green-50 text-sm text-green-900'><strong>Correct Answer: </strong>{item.correctAns}</h2>
                    <h2 className='p-2 border rounded-lg bg-blue-50 text-sm text-blue-900'><strong>Feedback: </strong>{item.feedback}</h2>
                </div>
                </CollapsibleContent>
        </Collapsible>
      
      ))} 
     </>}
      <Button className=' justify-end items-end' onClick={()=>router.replace('/dashboard')}>Go Home</Button>
     
      
    </div>
  )
}

export default Feedback
