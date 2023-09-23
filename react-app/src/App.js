import {Header} from "./Components/Header";
import {useState} from "react";
import {Functional} from "./Components/Functional";
import {Boxes} from "./Components/Boxes";
import {Hasarak} from "./Components/Hasarak";
import {Routes,Route} from "react-router-dom";

function App() {
    const [flag,setFlag] = useState(false)


  return (
    <div className="App">
        {/*<button onClick={()=>setFlag(!flag)}>Click</button>*/}
        {/*{flag? <Functional sexan="Text1"/> : null}*/}
        {/*{flag? <div><p>text</p></div> : null}*/}
        {/*<Hasarak title="Text1"/>*/}
        {/*<Hasarak title="Text2"/>*/}
        {/*<Hasarak title="Text3"/>*/}
        <Header/>
        {/*<Functional sexan="hbhbgh"/>*/}
        {/*<Boxes />*/}
        <Routes>
            <Route path="/" element={<Hasarak title="Text1"/>} />
            <Route path="/about" element={<Hasarak title="Text2"/>} />
            <Route path="/contact" element={<Hasarak title="Text3"/>} />
        </Routes>
    </div>
  );
}

export default App;
