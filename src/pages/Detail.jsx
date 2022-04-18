import React,{useEffect,useState} from "react";
import {useParams} from 'react-router'
import tmdbApi from '../api/tmdbApi'
import apiConfig from '../api/apiConfig'
import './detail.scss'
import {OutlineButton} from '../components/button/Button'
import MovieList from "../components/MovieList/MovieList";
const Detail = () => {
    const {id,category} = useParams();
    const [item,setItem] = useState(null)
    useEffect(() => {
        const getCardDetail = async () => {
            const response = await tmdbApi.getDetail(category,id,{params:{}})
            setItem(response)
        }
        window.scrollTo(0,0)
    
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
                                        <div  style={{backgroundImage: `url(${apiConfig.originalImage(item.poster_path ? item.poster_path : item.backdrop_path)})`}}  className="card__detail__info__poster__img" ></div>
                                        </div>
                                        <div className="card__detail__info__desc">
                                            <h1 className="card__detail__info__name">{item.title || item.name}</h1>
                                            <div className="card__detail__info__genres">
                                                {item.genres && item.genres.slice(0,5).map((genre,index) =>  (<OutlineButton disabled={true} key = {index} className='small'>{genre.name}</OutlineButton>)) }
                                            </div>
                                            <p className="card__detail__info__overview">{item.overview}</p>
                                            <Casts category = {category} id = {id} ></Casts>
                                        </div>
                                    </div>
                        </div>
                        <CardDetailTrailers category = {category} id = {id}></CardDetailTrailers>
                        <div className="similar">
                            <h2 className="similar__heading mb-2">Similar</h2>
                            <MovieList type='similar' category ={category} id = {id}></MovieList>
                        </div>
                    </div>
                </>)}
       </div>
    )
}
const Casts = props => {
    const [casts,setCasts] = useState(null)
    useEffect(() => {
        let response = null;
        const getCasts = async () => {
            const params = {}
            response = await tmdbApi.getCredits(props.category,props.id,{params});
            setCasts(response.cast.slice(0,5))
        }
        getCasts();
    },[props.category,props.id])
    return (
        <>
            {
                casts && 
                (<div className="casts">
                    <h2>Casts</h2>
                    <div className="casts__list">
                        {
                            casts.map((cast,index) => (
                                    <div className="casts__item" key={index}>
                                    <img src={`${apiConfig.w500Image(cast.profile_path)}`} alt="" className="casts__item__img" />
                                    <p className="casts__item__name">{cast.name}</p>
                                    </div>
                            ))
                        }
                    </div>
                </div>)
            }
        </>
    )
}
const CardDetailTrailers = props => {
    const [trailers,setTrailers] = useState(null);
    useEffect(() => {
        let response = null;
        const getTrailers = async () => {
            response = await tmdbApi.getVideos(props.category,props.id);
            setTrailers(response.results)
            
        }
        getTrailers()
    },[props.category,props.id]);
    return (
       <div className="card__detail__trailers">
           {
               trailers && (
                       
                                trailers.slice(0,5).map((trailer,index) => (
                                    <div className="card__detail__trailer" key = {index}>
                                        <h2 className="card__detail__trailer__title">{trailer.name}</h2>
                                        <iframe src = {`https://www.youtube.com/embed/${trailer.key}`} width='100%' title={trailer.name} height= '875px'></iframe>
                                    </div>
                                ))
                        
               )
           }
       </div>
    )
} 
export default Detail;