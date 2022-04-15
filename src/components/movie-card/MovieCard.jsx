import React from 'react'
import { category } from '../../api/tmdbApi'
import {Link} from 'react-router-dom'
import apiConfig from '../../api/apiConfig'
import Button from '../button/Button'
import './movie-card.scss'
const MovieCard = props => {
    const {item} = props;
    const link = `/${category[props.category]}/${item.id}`
    const bgUrl = item.poster_path ? apiConfig.w500Image(item.poster_path) : apiConfig.w500Image(item.backdrop_path)
    return (
        <Link to={link}>
            <div className="movie-card" style={{backgroundImage:`url(${bgUrl})`}}>
                <Button>
                    <i className="bx bx-play"></i>
                </Button>
            </div>
            <h3>{item.title || item.name }</h3>
        </Link>
    )
    
}
export default MovieCard