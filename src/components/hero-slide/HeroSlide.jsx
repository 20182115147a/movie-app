import {useEffect,useState} from 'react'
import SwiperCore, {Autoplay} from 'swiper'
import {Swiper,SwiperSlide} from 'swiper/react'
import tmdbApi,{movieType} from '../../api/tmdbApi'
import apiConfig from '../../api/apiConfig'
const HeroSlide = () => {
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
        <div className="hero-slide">
            <Swiper modules= {[Autoplay]} 
                    slidesPerView={2} 
                    spaceBetween = {0}
                    direction = 'horizontal'
                    grabCursor={true}>
                    {   movieItems.map((item,index) => (
                        <SwiperSlide key= {index}>  
                            {({ isActive }) => (
                            <img src={apiConfig.originalImage(item.backdrop_path)} alt=""></img>
                            )}
                        </SwiperSlide>)) 
                    }
            </Swiper>
        </div>
    )
}
export default HeroSlide