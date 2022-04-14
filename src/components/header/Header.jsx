import React from "react";
import logo from "../../assets/tmovie.png"
import {Link,useLocation} from "react-router-dom"
import "./header.scss"
const headerNav = [
    {
        display:'Home',
        path:'/'
    },
    {
        display:'Movie',
        path:'/movie'
    }
    ,
    {
        display:'TV Series',
        path:'/tv'
    }
]
const Header = props => {
    const {pathname} = useLocation()
    const active = headerNav.findIndex(e => e.path === pathname)
    return (
        <div className="header">
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