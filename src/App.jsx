import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import ShowUserComponent from "./components/ShowUserComponent";
import ContactUsComponent from "./components/ContactUsComponent";

function App() {  
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex justify-center gap-[40px] text-2xl font-bold">
        <NavbarComponent />
      </div>

      <Routes>
        <Route path="/" element={<ShowUserComponent />}/>
        <Route path="/contact-us" element={<ContactUsComponent />}/>
      </Routes>
    </>
  )
}

export default App
