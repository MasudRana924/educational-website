
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Reviews from './Components/Reviews/Reviews';
import NotFound from '../src/Components/NotFound/NotFound'
import Colleges from './Components/Colleges/Colleges';
import Courses from './Components/Courses/Courses';
import AllCourses from './Components/AllCourses/AllCourses';
import ContactUs from './Components/ContactUs/ContactUs';
import Admission from './Components/Admission/Admission';
import AboutUs from './Components/AboutUs/AboutUs';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Courses></Courses>
            <Colleges></Colleges>
            <Reviews></Reviews>
          </Route>
          <Route path="/home">
          <Courses></Courses>
            <Colleges></Colleges>
            <Reviews></Reviews>
           
          </Route>
          
          <Route path="/contact">
            <ContactUs></ContactUs>
          </Route>
          <Route path="/admission">
            <Admission></Admission>
          </Route>
          <Route path="/about">
            <AboutUs></AboutUs>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>

        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
