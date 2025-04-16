import backgroundImage from './assets/pexels-souvenirpixels-417074.jpg'
import './assets/index.css'
import { useState } from 'react'
import { Toaster, toast } from 'sonner';
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

  function submitData(e){
    e.preventDefault();
    const formDatao = new FormData(e.target);
    const first_name = formDatao.get("first_name")
    const last_name = formDatao.get("last_name")
    const middle_name = formDatao.get("middle_name")
    const sex = formDatao.get("sex")
    const email = formDatao.get("email")
    const matric_number = formDatao.get("matric_number")
    const department = formDatao.get("department")
    const course_of_study = formDatao.get("course_of_study")
    const year_of_graduation = formDatao.get("year_of_graduation")
    const class_of_degree = formDatao.get("class_of_degree")
    const degree_awarded = formDatao.get("degree_awarded")
    const recipient_address = formDatao.get("recipient_address")
    const remita_reference_number = formDatao.get("remita_reference_number")
    const certificate_upload = formDatao.get("certificate_upload")
    const remita_receipt = formDatao.get("remita_receipt")
    console.log(first_name)

    first_name == '' || first_name == null ?toast.error("First name is required") : null
    last_name == '' || last_name == null ?toast.error("Last name is required") : null
    middle_name == '' || middle_name == null ?toast.error("middle name is required") : null
    sex == '' || sex == null ?toast.error("sex is required") : null
    email == '' || email == null ?toast.error("email is required") : null
    matric_number == '' || matric_number == null ?toast.error("matric number is required") : null
    department == '' || department == null ?toast.error("department is required") : null
    course_of_study == '' || course_of_study == null ?toast.error("course of study is required") : null
    year_of_graduation == '' || year_of_graduation == null ?toast.error("year of graduation is required") : null
    class_of_degree == '' || class_of_degree == null ?toast.error("class of degree is required") : null
    degree_awarded == '' || degree_awarded == null ?toast.error("degree awarded is required") : null
    recipient_address == '' || recipient_address == null ?toast.error("recipient address is required") : null
    remita_reference_number == '' || remita_reference_number == null ?toast.error("remita reference number is required") : null
    certificate_upload == '' || certificate_upload == null ?toast.error("certificate upload is required") : null
    remita_receipt == '' || remita_receipt == null ?toast.error("remita receipt is required") : null
  }

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
     <div className='bg-white h-full w-[100vw] absolute left-0 md:w-2/3 md:left-1/3 opacity-90 overflow-y-scroll p-11'>
        <h1 className='font-heading text-center font-bold '>FORM</h1>
        <Toaster richColors position='top-right'/>
      <form onSubmit={(e) => {submitData(e)}} >
      {formElements.map((element,index) => (
          element.option? <div>
          <label htmlFor={element.name} className='text-[16px] font-semibold m-2'>{element.label}</label><br/>
          <select name={element.name} id={element.name} className='md:w-[60%] w-[100%] my-2 rounded-2xl p-2 h-10 border-2 border-gray-400'>
            {element.option.map((option) => (
              <option value={option} key={option}>{option}</option>
            ))}</select>
          </div>:<div key={index} className='flex flex-col  justify-center'>
          <label htmlFor={element.name} className='text-[16px] font-semibold m-2'>{element.label}</label>
          <input type={element.type} name={element.name} id={element.name} className={element.type == 'file'?"text-sm text-stone-500 hover:bg-black hover:text-white p-4 w-[30%] rounded-2xl text-center":'md:w-[60%] w-[100%] my-2 rounded-2xl p-2 h-10 border-2 border-gray-400'}/>
      </div>
          
        ))}
        <button type="submit" className='text-xl text-white my-5 ml-5 bg-gray-900 hover:bg-black hover:text-white p-4 w-[30%] rounded-2xl m-auto '>Submit</button>
      </form>
     </div>
    </div>
  )
}

export default App
