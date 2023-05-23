import { useState } from 'react'

// import components
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import UserInfo from "./components/UserInfo/UserInfo";
import Footer from './components/Footer/Footer';

import "./index.css";

// json data file
import data from './assets/assignmentData.json';  



function App() {
  const [userData, setUserData ] = useState(data);

  return (
    <div className="App">
      <Header />
      <Banner />
      <UserInfo data={userData} />
      <Footer />
    </div>
  );

}

export default App
