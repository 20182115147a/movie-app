import './search-input.scss'
import React,{useState,useCallback,useEffect} from 'react'
import {useHistory} from 'react-router'
import {category as cate} from '../../api/tmdbApi'
import Button from '../button/Button'
const SearchInput = props => {
    const history = useHistory()
    const [keyword,setKeyword] = useState(props.keyword ? props.keyword : '')
    let title = 1;
    const goToSearch = useCallback(()=> {
        if (keyword.trim().length > 0){
            history.push(`/${cate[props.category]}/search/${keyword}`)
            console.log(title += 1)
        }
       
    },[keyword,props.category,history])
    useEffect(()=> {
        const onKeyEnter = (e) =>
        {   
            e.preventDefault();
            if (e.keyCode === 13) {
                goToSearch()
            }
        }
        document.addEventListener('keyup',onKeyEnter)
        
  
        return () => {
            document.removeEventListener('keyup',onKeyEnter)
        }
    },[keyword,goToSearch])
    return (
        <div className="movie-search">
            <input className='search-input' placeholder={props.placeholder} value={keyword} onChange = {(e)=> {setKeyword(e.target.value)}}></input>
            <Button className='small search-btn' onClick={goToSearch}>Search</Button>
        </div>
    )
}
export default SearchInput 