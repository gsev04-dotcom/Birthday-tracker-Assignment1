import {useState} from 'react';


export default function AddBirthday({
    onAddBirthday}: any) {
        //Saves the name
        const [name, setName] = useState('');

        //Saves the Birthday
        const [birthday, setBirthday] = useState('');

        //Saves the message
        const [message, setMessage] = useState('');

        //Runs when the form is submitted
        const handleSubmit = (event: any ) => {event.preventDefault();

            
            //Checks for empty fields
            if (name === '' || birthday === '') {
                setMessage('Please enter a name and date of birth.');
                return;
            }

            //Adds a birthday
            onAddBirthday(name, birthday);

            //Shows a successful message
            setMessage('Birthday added successfully!');


            //Hides the message after two seconds
            setTimeout(() => { setMessage('');

            },2000);
            
            //Clears the form
            setName('');
            setBirthday('');

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

                <h2 className="text-2xl font-bold text-slate-800 mb-3 text-center"> Who are you celebrating?</h2>

                
                 //Birthday form
                <form onSubmit={handleSubmit}>
                    
                    <br/>

                    <input type="text" value={name} onChange={(event) => setName(event.target.value)}

                    placeholder="Enter name here " className="border border-gray-300 rounded p-3 mt-2 w-full sm:w-4/5"/>

                    <br/>

                   <br/>

                    <input type="date" value={birthday} onChange={(event) => setBirthday(event.target.value)}
                    className="border border-gray-300 rounded p-3 mt-2 w-full sm:w-4/5"/>

                    <br/>
                    <br/>
                    
                    //Add birthday button
                    <button type="submit" className="bg-slate-800 text-white px-5 py-2 rounded hover:bg-slate-700">Click Here To Add A Birthday </button>
                
                </form>


                 //Shows an error message when page is not properly validated
                {message && (
                    <p className="text-red-700 font-bold mt-4">{message}</p>
                )}
            </div>
        );

        


      }
      
    