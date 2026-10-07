import { useState } from 'react';
import Navigation  from '../components/Navigation';
import AddBirthday from '../components/AddList';
import BirthdayList from '../components/BirthdayList';


export default function Home() {


  //Saves the current page
  const [currentSection, setCurrentSection] = useState('home');

  //Hover effect
  const [hover, setHover] = useState(false);

  //Saves the birtday List
  const [birthdays, setBirthdays] = useState([
    
    {name: 'Gretle Severin',
    birthday: '1995-03-12'
    },

    {
      name:'John Paul',
      birthday: '2006-07-25'
    },
  ]);

  //Adds a birthday 
  const handleAddBirthday = (
    name: string,
    birthday: string
  ) => {
    
  setBirthdays([
    ...birthdays, {name, birthday}

  ]);

};


//Removes a birthday
const handleRemoveBirthday = (index: number) => {
  setBirthdays(
    birthdays.filter(
     (birthday, birthdayIndex ) => birthdayIndex !== index
    )
  );
};


//Shows selected page
const renderContent = () => {

  //Display add birthday page
  if (currentSection === 'add') {
    return(
      <AddBirthday onAddBirthday={handleAddBirthday}/>
    );
  }


  //Display birthday list
  if (currentSection === 'list') {
    return (
      <BirthdayList 
      birthdays={birthdays}
      onRemove={handleRemoveBirthday}/>
    )
  }


//Home page
  return(
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

      <h2 className="text-2xl font-bold text-slate-800 mb-3 text-center"> Welcome!</h2>
      <p className="text-gray-600 text-center">Keep track of special birthdays so you never miss an important day.</p>
    </div>
  );

};

return (

  <div>

    

    <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 text-center mb-2">
      Gretle's Birthday Tracker
    </h1>
    

    //Navigation page
    <Navigation currentSection={currentSection} onNavigate={setCurrentSection}/>

    <main className="bg-white max-w-2xl mx-auto p-6 sm:p-8 rounded-lg shadow text-center">
      {renderContent()}
    </main>


  </div>
);

}
