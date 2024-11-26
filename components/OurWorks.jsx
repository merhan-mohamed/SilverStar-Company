import { ImportantCompany } from '../constants/Data';

const OurWorks = () => {
  return (
    <div className='container px-4 mt-16 h-32 flex justify-between items-center bg-black'> 
    {ImportantCompany.map((item) => (
    <div key={item.id} className='mr-5'>
        <img src={item.image} alt="Company" className='works w-60 h-11'/>
    </div>  
))}
    </div>
  )
}

export default OurWorks
