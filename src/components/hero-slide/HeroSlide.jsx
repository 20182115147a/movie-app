import React,{useEffect,useState,useRef} from 'react'
import SwiperCore, {Autoplay,Navigation} from 'swiper'
import {Swiper,SwiperSlide} from 'swiper/react'
import tmdbApi,{movieType,category} from '../../api/tmdbApi'
import apiConfig from '../../api/apiConfig'
import Button,{OutlineButton} from'../button/Button'
import Modal from '../modal/Modal';
import './hero-slide.scss'
const HeroSlide = (props) => {
    const [movieItems,setMovieItems] = useState([])
    SwiperCore.use([Autoplay]);
    useEffect(() => {
        const getMovies = async() => {
            const params ={page:1}
            try {
                const response = await tmdbApi.getMoviesList(movieType.popular,{params})
                setMovieItems(response.results.slice(0,4))
            }
            catch {
                console.log('error')
            }
        }
        getMovies()
    },[])
    return (
        <div className={`hero-slide ${props.className}`}>
            <Swiper modules= {[Autoplay,Navigation]} 
                    grabCursor={true}
                    spaceBetween = {10}
                    slidesPerView={'auto'} 
                    >
                    {   movieItems.map((movieitem,index) => (
                        <SwiperSlide key= {index}  >  
                            {({ isActive }) => (
                                <HeroSlideItem item={movieitem} isActive={isActive}/>
                            )}
                        </SwiperSlide>)) 
                    }
            </Swiper>
            {movieItems.map((item,index) => (
                <MovieTrailers item={item} key={index}></MovieTrailers>
            ))}
        </div>
    )
}
const HeroSlideItem = props => {
    const {item} = props
    const bgUrl = apiConfig.originalImage(item.backdrop_path ? item.backdrop_path : item.backdrop_poster)
    const setMovieTrailerActive = async () => {
        const modal = document.querySelector(`#modal_${item.id}`)
        const videos = await tmdbApi.getVideos(category.movie,item.id);
        if (videos.results.length > 0) {
            const videoSrc = 'https://www.youtube.com/embed/' + videos.results[0].key;
            modal.querySelector('iframe').setAttribute('src',videoSrc);
        }
        else {
            modal.innerHTML= "No trailer"
        }
        console.log(videos.results[0].key)
        modal.classList.add('active')
    }
    return (
        <div className = {`hero-slide__item ${props.isActive ? 'active' : ''}`} style={{backgroundImage:` url(${bgUrl})`}}>
            <div className="hero-slide__item__container">
                <div className="hero-slide__item__desc">
                    <h1 className="hero-slide__item__desc__title">{item.title}</h1>
                    <p className="hero-slide__item__desc__overview">{item.overview}</p>
                    <div className="btns">
                        <Button>Watch Now</Button>
                        <OutlineButton className="btn-outline" onClick={setMovieTrailerActive}>View Trailers</OutlineButton>
                    </div>
                </div>
                <div className = "poster">
                    <img src={apiConfig.w500Image(item.poster_path)} alt="" />
                </div>
            </div>
        </div>
    )
}
const MovieTrailers = (props) => {
    const {item} = props
    const iframe = useRef(null)
    const onClose = () => {
        iframe.current.setAttribute('src','')
    }
    return (
        <Modal active={false} id={`modal_${item.id}`} onClose={onClose} >
            <iframe title= {item.title}  width="100%" height="500px" ref={iframe}/>
        </Modal>
    )
}

export default HeroSlide