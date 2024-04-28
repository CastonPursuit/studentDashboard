import ClassesContainer from "./components/SeasonClass-left-panel/ClassesContainer";
import Navbar from "./components/Navbar/Navbar";
import StudentProfileContainer from "./components/Students-Profiles-Section/StudentProfileContainer";
import '../src/App.scss';
import studentData from './data/data.json';
import { useState } from "react";


function App() {
  const [currentData, setCurrentData] = useState(studentData);
  const [year, setYear] = useState('')


  return (
    <div className="app-container">
      <Navbar/>
      <ClassesContainer
        studentData={studentData}
        setYear={setYear}
        setCurrentData={setCurrentData}
      />
      <StudentProfileContainer
        studentData={currentData}
        year={year}
      />

    </div>
  );
}

export default App;
