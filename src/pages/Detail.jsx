import React,{useEffect,useState} from "react";
import {useParams} from 'react-router'
import tmdbApi from '../api/tmdbApi'
import apiConfig from '../api/apiConfig'
import './detail.scss'
const Detail = () => {
    const {id,category} = useParams();
    const [item,setItem] = useState({})
    useEffect(() => {
      const getCardDetail = async () => {
        const response = await tmdbApi.getDetail(category,id,{params:{}})
        setItem(response)
    }
    //   window.scrollTo(0,0)
    
    getCardDetail()
    }, [category,id])
    const bg = item.backdrop_path ? item.backdrop_path : item.poster_path
    return (
       <div className="card__detail">
           <div className="card__detail__container">
                   <div className="card__detail__bg" style={{backgroundImage: `url(${apiConfig.originalImage(bg)})`}}>

                   </div>
             
           </div>
       </div>
    )
}

export default Detail;