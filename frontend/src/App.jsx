import backgroundImage from './assets/pexels-souvenirpixels-417074.jpg'
import './assets/index.css'
import { useState } from 'react'
function App() {

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    middle_name: '',
    sex: '',
    email: '',
    matric_number: '',
    department: '',
    course_of_study: '',
    year_of_graduation: '',
    class_of_degree: '',
    degree_awarded: '',
    recipient_address: '',
    remita_reference_number: '',
    certificate_upload: null,
    remita_receipt: null
  })

  const formElements = [
    { label: "First name", name: "first_name", type:"text" },
        { label: "Last name", name: "last_name", type:"text" },
        { label: "Middle name", name: "middle_name", type:"text" },
        { label: "Sex", name: "sex", option:["male","female"] },
        { label: "Email", name: "email", type: "email" },
        { label: "Matric number", name: "matric_number", type:"text" },
        { label: "Department", name: "department", type:"text" },
        { label: "Course of study", name: "course_of_study", type:"text" },
        { label: "Year of graduation", name: "year_of_graduation", type: "number" },
        { label: "Class of degree", name: "class_of_degree", type:"text" },
        { label: "Degree awarded", name: "degree_awarded", option:["First Class Honours", "Second Class Upper","Second Class Lower", "Third Class Lower" ] },
        { label: "Recipient address", name: "recipient_address", type:"text" },
        { label: "Remita reference number", name: "remita_reference_number", type:"text" },
        { label: "certificate Upload", name: "certificate_upload", type:"file" },
        { label: "Remita Receipt", name: "remita_receipt", type:"file" }
  ]

  return (
    <div className='bg-cover bg-no-repeat bg-center h-screen overflow-hidden group relative' style={{ backgroundImage: `url(${backgroundImage})` }}> 
     <div className='bg-white h-full w-2/3 absolute left-1/3 opacity-90 overflow-y-scroll p-11'>
        <h1 className='font-heading text-center font-bold '>FORM</h1>
      <form onSubmit={(e) => {submitData(e)}} >
      {formElements.map((element,index) => (
          element.option? <div>
          <label htmlFor={element.name} className='text-[16px] font-semibold m-2'>{element.label}</label><br/>
          <select name={element.name} id={element.name} className='w-[60%] my-2 rounded-2xl p-2 h-10 border-2 border-gray-400'>
            {element.option.map((option) => (
              <option value={option} key={option}>{option}</option>
            ))}</select>
          </div>:<div key={index} className='flex flex-col  justify-center'>
          <label htmlFor={element.name} className='text-[16px] font-semibold m-2'>{element.label}</label>
          <input type={element.type} name={element.name} id={element.name} className={element.type == 'file'?"text-sm text-stone-500 hover:bg-black hover:text-white p-4 w-[30%] rounded-2xl text-center":'w-[60%] my-2 rounded-2xl p-2 h-10 border-2 border-gray-400'}/>
      </div>
          
        ))}
        <button type="submit" className='text-xl text-white my-5 ml-7 bg-red-700 hover:bg-black hover:text-white p-4 w-[30%] rounded-2xl m-auto '>Submit</button>
      </form>
     </div>
    </div>
  )
}

export default App
