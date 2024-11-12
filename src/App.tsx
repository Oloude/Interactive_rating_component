import Thanks from "./components/Thanks";
import Main from "./components/Main";
import { useState } from "react";

export default function App() {

  const [rating, setRating] = useState<number | null>(null)
  const [isSubmit, setIsSubmit] = useState(false)

  function handleRating(rating: number){
     setRating(rating)
  }

  function handleSubmit(){

    if(rating){
      setIsSubmit(prev => !prev)
    }
    
  }
 
  return (
    <main className="font-Overpass bg-black min-h-screen flex justify-center items-center p-7">
      <section className="max-w-md mx-auto">
      {isSubmit ? <Thanks rate={rating}/> : <Main handleSubmit={handleSubmit} handleRating={handleRating}/>
       }
      </section>
      
    </main>
  )
}