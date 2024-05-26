
import './App.css'
import {React} from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/home/Home"
import About from "./components/about/About"
import Blog from "./components/blog/Blog"
import Services from "./components/services/Services"
import Contact from "./components/contact/Contact"
import Login from "./components/login/login2"
import Register from "./components/Register/register"
import CreateListing from "./components/pages/createAnnonce/createListing";
import ListingDetails from "./components/pages/listingdetails/listingDetails"
import {UserContextProvider} from "./components/userContext/userContext";
import Header from "./components/common/header/Header";
import ListAnnonce from "./components/pages/ListAnnonces/listAnnonce";
import ListingsTable from "./components/annonceTable/annonceTable" ;
import Reservation from "./components/pages/Reservations/reservation";
import EditListing from "./components/pages/editAnnonce/editAnnonce";
function App() {

  return (
    <>
      <UserContextProvider>
      <Router>
      <Header/>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register />} />
        <Route path='/host/publierannonce' element={<CreateListing />} />
        <Route path='/edit/:listingId' element={<EditListing />} />
        <Route path='/annonce/:listingId' element={<ListingDetails />} />
        <Route path='/annonce' element={<ListAnnonce />} />
        <Route path='/host/annonces' element={<ListingsTable />} />
        <Route path='/host/reservations' element={<Reservation />} />
        </Routes>
      </Router>
      </UserContextProvider>

    </>
  )
}

export default App
