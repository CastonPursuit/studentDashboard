import ClassesContainer from "./components/SeasonClass-left-panel/ClassesContainer";
import Navbar from "./components/Navbar/Navbar";
import StudentProfileContainer from "./components/Students-Profiles-Section/StudentProfileContainer";
import '../src/App.scss';

function App() {
  return (
    <div className="app-container">
      <Navbar/>
      <ClassesContainer/>
      <StudentProfileContainer/>

    </div>
  );
}

export default App;
