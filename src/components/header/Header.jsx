import React,{useRef,useEffect} from "react";
import logo from "../../assets/tmovie.png"
import {Link,useLocation} from "react-router-dom"
import "./header.scss"
const headerNav = [
    {
        display:'Home',
        path:'/'
    },
    {
        display:'Movies',
        path:'/movie'
    }
    ,
    {
        display:'TV Series',
        path:'/tv'
    }
]
const Header = () => {
    const {pathname} = useLocation()
    const active = headerNav.findIndex(e => e.path === pathname)
    const header = useRef(null);
    useEffect(()=> {
        const scrollTop = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop >100){
                header.current.classList.add('shrink')
            }
            else {
                header.current.classList.remove('shrink')
            }
        }
        window.addEventListener('scroll',scrollTop)
        return () => {
            window.removeEventListener('scroll',scrollTop)
        }
    },[])
    return (
        <div className="header" ref={header}>
            <div className="header__wrap container">
                <div className="logo">
                    <img src={logo} alt="" />
                    <Link to='/'>tMovies</Link>
                </div>
                <ul className="header__nav">
                    {
                        headerNav.map((item,index) => 
                        <li key={index} className= {index ===active ? 'active': ''}>
                            <Link to={item.path}>{item.display}</Link>
                        </li>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default Header;