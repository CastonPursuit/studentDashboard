import ClassesContainer from "./components/ClassesContainer";
import Navbar from "./components/Navbar";
import StudentProfileContainer from "./components/StudentProfileContainer";
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
