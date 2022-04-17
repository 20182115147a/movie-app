import React,{useEffect,useState} from 'react';
import tmdbApi from '../../api/tmdbApi'
import MovieCard from '../movie-card/MovieCard'
import {category as cate,movieType} from '../../api/tmdbApi';
import {OutlineButton} from '../button/Button'
import './movie-grid.scss';
import SearchInput from '../search-input/SearchInput'
import {useParams} from'react-router'
const MovieGrid = (props) => {
    const {category} = props;
    const [items,setItems] = useState(null);
    const [page,setPage] = useState(1);
    const {keyword} = useParams();
    const [totalPage,setTotalPage] = useState(null);
    useEffect(()=>{
        let response = null;
        const getList = async () => {
            if (keyword === undefined) {
                switch(category) {
                    case cate.movie: 
                        response = await tmdbApi.getMoviesList(movieType.upcoming,{params:{}});
                        break;
                    default : {
                        response = await tmdbApi.getTvList(movieType.popular,{params:{}})
                    }
                }
            }
            else {
                const params = {
                    query:keyword
                }
                response = await tmdbApi.search(cate[category],{params})
            }  
            setItems(response.results);
            setTotalPage(response.total_pages)
        }
        getList();
    },[category,keyword])
    const getMore = async () => {
             let response = null;
             
             const params = {
                 page:page +1,
             }
             if (keyword === undefined) {
                switch(category) {
                    case cate.movie: 
                        response = await tmdbApi.getMoviesList(movieType.upcoming,{params});
                        break;
                    default : {
                        response = await tmdbApi.getTvList(movieType.popular,{params})
                    }
                }
             }
            else {
                const params = {
                    page:page +1,
                    query:keyword
                }
                response = await tmdbApi.search(cate[category],{params})
            }  
            setPage(page+1)
            setItems([...items,...response.results]);
    };
    return (
        <div className="movie-grid">
            {items && (<>
                <div className="section mb-3">
                <SearchInput category={props.category} keyword={keyword} placeholder='Enter keyword'></SearchInput>
                </div>
                <div className="movie-grid__list mb-3">
                    {items.map((item,index) => (
                            <div className="movie-grid__list__item" key={index}>
                                    <MovieCard item={item} category={category} ></MovieCard>
                            </div>
                        
                    ))}
                </div>
                {
                                page < totalPage ? 
                                (<div className="movie-grid__loadmore">
                                    <OutlineButton className="small" onClick = {getMore}>Load More</OutlineButton>
                                </div>) : <></>
                    }
            
            </>)}
        </div>
    )
}
export default MovieGrid