import {Route, Routes} from "react-router-dom";
import Home from "../routes/users/home";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
    );
}

export default App;