import React,{useState,useEffect} from 'react'
import "./Nav.css"
import Netflix from '../../images/Netflix.png';
import Netflixavatar from '../../images/Netflixavatar.png';
import {Link} from "react-router-dom"

const Nav = () => {
    const [show, setShow] = useState(false);

    const NavBarVisibility = ()=>{
        if(window.scrollY > 100){
            setShow(true)
        }else{
            setShow(false)
        }
    }

    useEffect(()=>{
    window.addEventListener("scroll", NavBarVisibility);

     return()=>{
        window.removeEventListener("scroll", NavBarVisibility); 
     }
    },[])
  return (
    <div className={`nav ${show && "nav-black"}`}>
      <Link to="/">
      <img src={Netflix} className="nav-logo" alt='logo' />
      </Link>
      <img src={Netflixavatar} className="nav-avatar" alt="logo " />
    </div>
  )
}

export default Nav
