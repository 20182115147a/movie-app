import React,{useState,useEffect} from 'react'
import './movie-list.scss'
import tmdbApi,{category} from '../../api/tmdbApi'
import {Swiper,SwiperSlide} from 'swiper/react'
import apiConfig from '../../api/apiConfig'
import MovieCard from '../movie-card/MovieCard'
const MovieList = (props) => {
    const [movieList,setMovieList] = useState([])
    let response = null
    const params = {}
    useEffect(() => {
        const getMovieList = async () => {
            if (props.type !== 'similar') {
                
                switch(props.category) {
                    case category.movie:
                         response = await tmdbApi.getMoviesList(props.type,{params})
                        break;
                    default :
                       { response = await tmdbApi.getTvList(props.type,{params})}
                }
            }
            else {
                response = await tmdbApi.getSimilar(props.category,props.id)
            }
            setMovieList(response.results);
        }
        getMovieList();
    },[])

    return (
        <div className='movie-list'>
            <Swiper
             grabCursor={true}
             spaceBetween = {10}
             slidesPerView={'auto'} 
            >
                {
                    movieList.map((movieItem,index) => (
                        <SwiperSlide key={index}>
                            <MovieCard item={movieItem} category={props.category}></MovieCard>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}
export default MovieList