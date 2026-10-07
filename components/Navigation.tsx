import {useState } from "react";

export default function Navigation({
    currentSection, onNavigate}: any)  {

        //Saves the selected pages
        const [selected ,setSelected] = useState(currentSection);

        //Changes the button color
        const buttonStyle = (section: string) =>
            selected === section 
        ? 'bg-rose-300 text-slate-900 px-3 py-1 text-sm rounded hover:bg-rose-400'
        : 'bg-slate-700 text-white px-3 py-1 text-sm rounded hover:bg-slate-600';

        //Changes the page
        const handleNavigation = (section: string) => {
            setSelected(section);
            onNavigate(section);

        }; 





        return (
            <div>

                //Navigation buttons
                <nav className='bg-slate-800 p-3 rounded-lg flex flex-row justify-center gap-3 max-w-2xl mx-auto mb-5 mt-0'>

                <button onClick={ () => handleNavigation('home')} className={buttonStyle('home')}>Home</button>
                <button onClick={ () => handleNavigation('add')} className={buttonStyle('add')}>Add Birthday</button>
                <button onClick={ () => handleNavigation('list')} className={buttonStyle('list')}>Birthday List</button>
                </nav>

                
            


            </div>

        );
    }


    
