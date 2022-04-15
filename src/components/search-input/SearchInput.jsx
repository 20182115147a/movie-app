import './search-input.scss'
import React,{useState,useCallback,useEffect} from 'react'
import {useHistory} from 'react-router'
import {category as cate} from '../../api/tmdbApi'
const SearchInput = props => {
    const history = useHistory()
    const [keyword,setKeyword] = useState('')
    const goToSearch = useCallback(()=> {
        console.log(keyword)
        if (keyword.trim().length > 0){
            history.push(`${cate[props.category]}/search/${keyword}`)
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
        </div>
    )
}
export default SearchInput 