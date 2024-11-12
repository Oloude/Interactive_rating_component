 import illustration from '../assets/illustration-thank-you.svg'

 type ThanksProps = {
    rate : number | null,  
 }

function Thanks({rate}:ThanksProps) {
  return (
    <div className='flex flex-col rounded-2xl p-8 bg-vDBlue items-center'>
        <img src={illustration} alt="" className='mb-6 block'/>
        <div className='bg-dBlue rounded-full py-2 px-7 text-orange text-sm mb-10'>You selected {rate ? rate : ''} out of 5 </div>
        <h2 className='text-white text-3xl font-bold text-center mb-6'>Thank you! </h2>
        <p className='text-lGray font-medium text-base text-center'>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
    </div>
  )
}

export default Thanks