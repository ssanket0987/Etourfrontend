import { Route, Routes } from "react-router-dom"; // ✅ Remove extra Router import
import "./App.css";
import LoginForm from "./Component/LoginForm";
import RegisterForm from "./Component/RegisterForm"; // ✅ Import RegisterForm
import Dashboard from "./Component/Dashboard";
import International from "./International";
import Domestic from "./Domestic";
import NavBarComponet from "./Component/NavBar";
import PopularPackage from "./Component/PopularPackage";
import Footer from "./Component/Footer";

function App() {
  return (
    <>
      <NavBarComponet />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/international" element={<International />} />
        <Route path="/domestic" element={<Domestic />} />
        <Route path="/popularPackage" element={<PopularPackage />} />
        <Route path="/login" element={<LoginForm />}/>
        <Route path="/register" element={<RegisterForm />} /> 
        
      </Routes>
      <Footer />
    </>
  );
}

export default App;

