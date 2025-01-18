import  iconstar  from '../assets/images/icon-star.svg'
const Rating = () => {
  return (
    <>
      <div className="flex flex-col  rounded-[30px] text-left w-[430px] p-5 m-2  bg-gradient-to-t  from-[#14181c] to-[#20262d]">
        <div className='flex flex-col justify-start items-start p-3'>
        <span className='bg-[#959eac1d] flex justify-center items-center rounded-full w-[53px] h-[53px] mb-10'><img className='mb-0.5' src={iconstar}  alt="star" /></span>
       <h1 className="text-2xl text-white text-left  mb-4">How did we do?</h1>
       <p className="text-[#959eac]">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
       
        </div>
       <div className='flex justify-evenly items-start'>
          <button className='flex bg-[#959eac1d] rounded-full w-[56px] h-[53px] m-3 text-lg text-[#959eac] justify-center items-center hover:bg-[#fb7413] hover:text-[#121417]'><span className='mt-1'>1</span></button>
          <button className='flex bg-[#959eac1d] rounded-full w-[56px] h-[53px] m-3 text-lg text-[#959eac] justify-center items-center hover:bg-[#fb7413] hover:text-[#121417]'><span className='mt-1'>2</span></button>
          <button className='flex bg-[#959eac1d] rounded-full w-[56px] h-[53px] m-3 text-lg text-[#959eac] justify-center items-center hover:bg-[#fb7413] hover:text-[#121417]'><span className='mt-1'>3</span></button>
          <button className='flex bg-[#959eac1d] rounded-full w-[56px] h-[53px] m-3 text-lg text-[#959eac] justify-center items-center hover:bg-[#fb7413] hover:text-[#121417]'><span className='mt-1'>4</span></button>
          <button className='flex bg-[#959eac1d] rounded-full w-[56px] h-[53px] m-3 text-lg text-[#959eac] justify-center items-center hover:bg-[#fb7413] hover:text-[#121417]'><span className='mt-1'>5</span></button>
       </div>
        <div className='flex justify-center p-3'>
       <button className='bg-[#fb7413] p-3 my-1 w-full font-bold rounded-full tracking-[0.1em]'>SUBMIT</button>
        </div>

     </div>
    </>
    // so on click it should be white 
  )
}

export default Rating