import {Link} from "react-router-dom";
import { useState } from 'react'
import { toast,Toaster } from "sonner";
function AdminPage(){
    const [approved,setapprove] = useState(false)
    const dummyData = [
        {
            firstName: "John",
            lastName: "Doe",
            middleName: "A.",
            sex: "Male",
            email: "john.doe@example.com",
            matricNumber: "123456",
            department: "Computer Science",
            courseOfStudy: "Software Engineering",
            yearOfGraduation: "2022",
            classOfDegree: "First Class",
            degreeAwarded: "B.Sc",
            recipientAddress: "123 Main St, City, Country",
            remitaReferenceNumber: "REM123456",
            certificateUpload: "certificate.pdf",
            remitaReceipt: "receipt.pdf",
            approved: false,
            action: "Pending"
        },
        {
            firstName: "Jane",
            lastName: "Smith",
            middleName: "B.",
            sex: "Female",
            email: "jane.smith@example.com",
            matricNumber: "654321",
            department: "Electrical Engineering",
            courseOfStudy: "Power Systems",
            yearOfGraduation: "2021",
            classOfDegree: "Second Class Upper",
            degreeAwarded: "B.Eng",
            recipientAddress: "456 Elm St, City, Country",
            remitaReferenceNumber: "REM654321",
            certificateUpload: "certificate2.pdf",
            remitaReceipt: "receipt2.pdf",
            approved: true,
            action: "Approved"
        }
    ];
    function approve(){
        toast.success("Approved")
    }

    return <div className="overflow-hidden">
        <Toaster position="top-center" richColors closeButton />
        <nav className="flex justify-between items-center bg-gray-800 p-4">
            <div className="text-white text-lg font-bold">Admin Dashboard</div>
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                    <Link to="/">Form</Link>
            </button>
        </nav>
        <p className="text-left ml-12 text-3xl font-bold my-7">Applications</p>

                <div className="flex flex-row items-center w-[100vw] m-6 justify-center cursor-pointer">
                    <div className={approved?"bg-red-600 px-9 text-white font-bold hover:bg-red-400 py-4 rounded-l-2xl":"bg-gray-600 px-9 text-white font-bold hover:bg-gray-400 py-4 rounded-l-2xl"}  onClick={() => setapprove(true)}>Approved</div>
                    <div className={approved?"bg-gray-600 px-9 text-white font-bold hover:bg-gray-400 py-4 rounded-r-2xl":"bg-red-600 px-9 text-white font-bold hover:bg-red-400 py-4 rounded-r-2xl"}  onClick={() => setapprove(false)}>Not Approved</div>
                </div>

        <div className="overflow-x-scroll scroll-hidden">
        <table className="">
            <thead>
                <tr>
                    {[
                        "First name",
                        "Last name",
                        "Middle name",
                        "Sex",
                        "Email",
                        "Matric number",
                        "Department",
                        "Course of study",
                        "Year of graduation",
                        "Class of degree",
                        "Degree awarded",
                        "Recipient address",
                        "Remita reference number",
                        "Certificate Upload",
                        "Remita Receipt",
                        "Approved",
                        "Action"
                    ].map((header, index) => (
                        <th key={index} className="border px-4 py-2">{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
               
                {dummyData.map((data, index) => (
                    approved == data.approved ? 
                    <tr key={index}>
                        <td className="border px-4 py-2">{data.firstName}</td>
                        <td className="border px-4 py-2">{data.lastName}</td>
                        <td className="border px-4 py-2">{data.middleName}</td>
                        <td className="border px-4 py-2">{data.sex}</td>
                        <td className="border px-4 py-2">{data.email}</td>
                        <td className="border px-4 py-2">{data.matricNumber}</td>
                        <td className="border px-4 py-2">{data.department}</td>
                        <td className="border px-4 py-2">{data.courseOfStudy}</td>
                        <td className="border px-4 py-2">{data.yearOfGraduation}</td>
                        <td className="border px-4 py-2">{data.classOfDegree}</td>
                        <td className="border px-4 py-2">{data.degreeAwarded}</td>
                        <td className="border px-4 py-2">{data.recipientAddress}</td>
                        <td className="border px-4 py-2">{data.remitaReferenceNumber}</td>
                        <td className="border px-4 py-2">{data.certificateUpload}</td>
                        <td className="border px-4 py-2">{data.remitaReceipt}</td>
                        <td className="border px-4 py-2">{data.approved ? "Yes" : "No"}</td>
                        <td className="border px-4 py-2"><button className="bg-gray-400 hover:bg-gray-800 text-white font-semibold rounded-xl p-3" onClick={() => approve()}>Approve</button></td>
                    </tr>:null
                ))
                }
            </tbody>
        </table>
        </div>
    </div>
}

export default AdminPage