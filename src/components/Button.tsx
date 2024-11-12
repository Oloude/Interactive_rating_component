 type ButtonProps = {
    number : number,
    handleRating : (rating : number)=> void, 
 }

function Button({number, handleRating} :  ButtonProps) {
  return (
    <button onClick={()=>handleRating(number)} className="w-12 h-12 rounded-full flex justify-center items-center bg-dBlue text-lGray font-medium text-base active:bg-white active:text-vDBlue hover:bg-orange hover:text-vDBlue">{number}</button>
  )
}

export default Button