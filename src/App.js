
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Header from './Components/Header/Header';
import Courses from './Components/Courses/Courses';
import Colleges from './Components/Colleges/Colleges';
import Payments from './Components/Payments/Payments';
import Service from './Components/Services/Service/Service';
import Reviews from './Components/Reviews/Reviews';
import AboutUs from './Components/AboutUs/AboutUs';
import ContactUs from './Components/ContactUs/ContactUs';
import Admission from './Components/Admission/Admission';
import AllCourses from './Components/AllCourses/AllCourses';
import Services from './Components/Services/Services';
import Details from './Components/DetailsCourse/Details';
import NotFound from '../src/Components/NotFound/NotFound'
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Courses></Courses>
            <Colleges></Colleges>
            <Payments></Payments>
            <Service></Service>
            <Reviews></Reviews>
          </Route>
          <Route exact path="/home">
            <Courses></Courses>
            <Colleges></Colleges>
            <Payments></Payments>
            <Service></Service>
            <Reviews></Reviews>

          </Route>
          <Route path="/course/:id">
            <Details></Details>
          </Route>
          <Route path="/about">
            <AboutUs></AboutUs>
          </Route>
          <Route path="/contact">
            <ContactUs></ContactUs>
          </Route>
          <Route path="/admission">
            <Admission></Admission>
          </Route>
          <Route path="/allcourses">
            <AllCourses></AllCourses>
          </Route>
          <Route path="/services">
            <Services></Services>
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
