import  iconstar  from '../assets/images/icon-star.svg'
const Rating = () => {
  return (
    <>
      <div className="flex flex-col  rounded-3xl text-left w-[424px] p-8  bg-gradient-to-t  from-[#14181c] to-[#20262d]">
        <div className='flex flex-col justify-start items-start'>
        <span className='bg-[#959eac1d] rounded-full p-4 mb-4'><img src={iconstar}  alt="star" /></span>
       <h1 className="text-2xl text-white text-left  mb-4">How did we do?</h1>
       <p className="text-[#959eac]">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering.</p>
       
        </div>
       <div className='flex'>
          <button className='flex bg-[#959eac1d] rounded-full w-4 py-2.5 px-6 m-3 text-lg text-[#959eac] justify-center items-center hover:bg-[#fb7413] hover:text-[#121417]'>1</button>
          <button className='flex bg-[#959eac1d] rounded-full w-4 py-2.5 px-6 m-3 text-lg text-[#959eac] justify-center items-center hover:bg-[#fb7413] hover:text-[#121417]'>2</button>
          <button className='flex bg-[#959eac1d] rounded-full w-4 py-2.5 px-6 m-3 text-lg text-[#959eac] justify-center items-center hover:bg-[#fb7413] hover:text-[#121417]'>3</button>
          <button className='flex bg-[#959eac1d] rounded-full w-4 py-2.5 px-6 m-3 text-lg text-[#959eac] justify-center items-center hover:bg-[#fb7413] hover:text-[#121417]'>4</button>
          <button className='flex bg-[#959eac1d] rounded-full w-4 py-2.5 px-6 m-3 text-lg text-[#959eac] justify-center items-center hover:bg-[#fb7413] hover:text-[#121417]'>5</button>
       </div>
        
       <button className='bg-[#fb7413] p-3 my-2 rounded-full'>SUBMIT</button>

     </div>
    </>
    // so on click it should be white 
  )
}

export default Rating