import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Food from "./Food.jsx"
import Card from "./Card.jsx";
import Button from "./Button/Button.jsx";
import Student from "./Student.jsx";
import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx";


function App() {
  return(
    <>
      <List/>
      <UserGreeting isLoggedIn={true} userName="Ravi" />
    {/* // <Student name ="Doremon" age={100} isStudent={true}/>
    // <Student name ="Patrick" age={200} isStudent={false}/>
    // <Student /> */}
    // {/* <Card/>
    // <Button/> */}
    // {/* <Header/>
    //  <Food/>
    //  <Food/>
    //  <Food/>
    //  <Footer/> */}
     </>
  );
}

export default App
