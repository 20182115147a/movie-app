import React from "react"
import bg from '../../assets/footer-bg.jpg'
import logo from '../../assets/tmovie.png'
import {Link} from 'react-router-dom'
import './footer.scss'
const Footer = () => {

    return (
        <div className="footer" style={{backgroundImage:` url(${bg})`}} >
            <div className="footer__container">
                <div className="logo">
                    <img src={logo} alt="" />
                    <Link to ='/'>tMovies</Link>
                </div>
                <div className="footer__menus">
                    <ul className="footer__menu">
                        <Link to='/'>
                            <li className="footer__menu__item">Home</li>
                        </Link>
                        <Link to='/'>
                            <li className="footer__menu__item">Contact us</li>
                        </Link>
                        <Link to='/'>
                            <li className="footer__menu__item">Term of service</li>
                        </Link>
                        <Link to='/'>
                            <li className="footer__menu__item">About us</li>
                        </Link>
                    </ul>
                    <ul className="footer__menu">
                        <Link to='/'>
                            <li className="footer__menu__item">Live</li>
                        </Link>
                        <Link to='/'>
                            <li className="footer__menu__item">FAQ</li>
                        </Link>
                        <Link to='/'>
                            <li className="footer__menu__item">Premium</li>
                        </Link>
                        <Link to='/'>
                            <li className="footer__menu__item">Pravacy policy</li>
                        </Link>
                    </ul>
                    <ul className="footer__menu">
                        <Link to='/'>
                            <li className="footer__menu__item">You must watch</li>
                        </Link>
                        <Link to='/'>
                            <li className="footer__menu__item">Recent release</li>
                        </Link>
                        <Link to='/'>
                            <li className="footer__menu__item">Top IMDB</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer