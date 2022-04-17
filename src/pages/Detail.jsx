import React,{useEffect,useState} from "react";
import {useParams} from 'react-router'
import tmdbApi from '../api/tmdbApi'
import apiConfig from '../api/apiConfig'
import './detail.scss'
import {OutlineButton} from '../components/button/Button'
const Detail = () => {
    const {id,category} = useParams();
    const [item,setItem] = useState(null)
    useEffect(() => {
      const getCardDetail = async () => {
        const response = await tmdbApi.getDetail(category,id,{params:{}})
        setItem(response)
    }
    //   window.scrollTo(0,0)
    
    getCardDetail()
}, [category,id])
  
    return (
       <div className="card__detail">
                {item && (
                    <>
                    <div className="card__detail__wrapper">
                        <div className="card__detail__bg" style={{backgroundImage: `url(${apiConfig.originalImage(item.backdrop_path ? item.backdrop_path : item.poster_path)})`}}>
                                    </div>
                                    <div className="card__detail__container">
                                    <div className="card__detail__info">
                                        <div className="card__detail__info__poster">
                                        <div  style={{backgroundImage: `url(${apiConfig.originalImage(item.poster ? item.poster : item.backdrop_path)})`}}  className="card__detail__info__poster__img" ></div>
                                        </div>
                                        <div className="card__detail__info__desc">
                                            <h1 className="card__detail__info__name">{item.title || item.name}</h1>
                                            <div className="card__detail__genres">
                                                {item.genres && item.genres.slice(0,5).map((genre,index) =>  (<OutlineButton key = {index} className='small'>{genre.name}</OutlineButton>)) }
                                            </div>
                                            <p className="card__detail__info__overview">{item.overview}</p>
                                        </div>
                                    </div>
                        </div>
                    </div>
                </>)}
       </div>
    )
}

export default Detail;