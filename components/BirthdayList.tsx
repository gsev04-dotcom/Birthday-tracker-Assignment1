import { useState } from "react";

export default function BirthdayList (
    { birthdays, onRemove}: any ) {

        //Shows or hides the list
        const [showBirthdays, setShowBirthdays]  = useState(true);

        //SAves the message
        const [message, setMessage] = useState('');

        //Removes a birthday 
        const handleRemove = (index: number) => { onRemove(index);

            setMessage('Birthday removed ');

            //Hides the message after two seconds

            setTimeout(() => { setMessage('');

            },2000);

        };
    


    return (
        <div>

            <div className="mb-3 flex justify-center items-center gap-2">
                {Array.from({ length: 8}).map((_, index) => (
                <span key={index} className={`inline-block rounded-full ${
                index % 2 === 0 
                ? "bg-[#CAD5E2] w-12 h-12"
                : "bg-[#FFCCD2] w-5 h-5"}`}
            ></span>
            ))}

            </div>

            //Page title
            <h2 className="text-2xl font bold-slate-800 mb-4 text-center">My Little Special Dates</h2>

            //Show or hide button

            <button onClick={ () => setShowBirthdays(!showBirthdays)}
                className="bg-slate-700 text-white px-4 py-2 rounded mb-4 hover:bg-slate-600">
                    {showBirthdays ? 'Hide Birthdays' : 'Show Birthdays'}

    </button>
    
    //Shows the remove message
    {message && ( <p className="text-slate-700 font-bold mb-4">{message}</p>)}

    //Shows when the list is hidden
    {!showBirthdays && (<p className="text-gray-600 italic">Birthday list is hidden</p>)}

    //Shows when the list is empty 
    { showBirthdays && birthdays.length === 0 && (
        <p className="text-grey-600 italic"> There are no birthdays to view</p>
    )}

    
    //Displays birthday list
    {showBirthdays && birthdays.map((person: any, index: number) => (
        <article key={index} className="bg-gray-50 border border-rose-200 p-3 my-3 rounded-lg flex items-center justify-between">

            < p className="font-bold text-base text-slate-800">{person.name}</p>

            <p className="text-sm text-gray-700"> Date of Birth: {person.birthday}</p>

            //Remove button
            <button onClick={() => handleRemove(index)}
                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 ">Remove</button>


        </article>

    ))}
    


        </div>
    );
}