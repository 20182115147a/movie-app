import React from 'react'
import HeroSlide from '../components/hero-slide/HeroSlide'
import { OutlineButton } from '../components/button/Button'
import {Link} from 'react-router-dom'
import MovieList from '../components/MovieList/MovieList'
import { category,movieType } from '../api/tmdbApi'
const Home = props => {
    return (
        <>
        <HeroSlide className='mb-3'/>
        <div className="container">
            <div className="section mb-3">
                <div className="section__header mb-2">
                    <h2>Trending Movies</h2>
                    <Link to='/movie'>
                        <OutlineButton className='small'>View more</OutlineButton>
                    </Link>
                </div>
                    <MovieList category={category.movie} type={movieType.popular}></MovieList>
            </div>
            <div className="section mb-3">
                <div className="section__header mb-2">
                    <h2>Top Rated Movies</h2>
                    <Link to='/movie'>
                        <OutlineButton className='small'>View more</OutlineButton>
                    </Link>
                </div>
                    <MovieList category={category.movie} type={movieType.top_rated}></MovieList>
            </div>
            <div className="section mb-3">
                <div className="section__header mb-2">
                    <h2>Trending TV</h2>
                    <Link to='/movie'>
                        <OutlineButton className='small'>View more</OutlineButton>
                    </Link>
                </div>
                    <MovieList category={category.tv} type={movieType.popular}></MovieList>
            </div>
            <div className="section mb-3">
                <div className="section__header mb-2">
                    <h2>Top Rated TV</h2>
                    <Link to='/movie'>
                        <OutlineButton className='small'>View more</OutlineButton>
                    </Link>
                </div>
                    <MovieList category={category.tv} type={movieType.top_rated}></MovieList>
            </div>
        </div>
        </>
    )
}
export default Home