 import starIcon from '../assets/icon-star.svg'
import Button from './Button'

type MainProps = {
    handleRating : (rating : number)=> void, 
    handleSubmit : ()=> void
}

function Main({handleRating, handleSubmit} : MainProps) {
  return (
    <section className='flex flex-col rounded-2xl p-8 bg-vDBlue'>
        <div className='w-10 h-10 rounded-full bg-dBlue flex justify-center items-center mb-8'>
            <img src={starIcon} alt="star icon" />
        </div>
        <h1 className='text-white font-bold text-3xl mb-7'>How did we do? </h1>
        <p className='text-base font-medium text-lGray mb-10'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        <div className='flex justify-between items-center mb-10'>
            {Array.from({length:5}, ((_, index)=> index) ).map(item => <Button key={item} number={item + 1 } handleRating={handleRating}/>)}</div>
        <button onClick={handleSubmit} className='text-vDBlue bg-orange py-4 rounded-full text-base uppercase font-medium hover:bg-white'>Submit</button>
    </section>
  )
}

export default Main