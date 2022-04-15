import axiosClient from "./axiosClient";

export const category = {
    movie:'movie',
    tv:'tv'
}
export const movieType = {
    popular:'popular',
    top_rated:'top_rated',
    upcoming:'upcoming'
}
const tmdbApi = {
    getMoviesList : (type,params) => {
        const url = 'movie/' + movieType[type]
        return axiosClient.get(url,params)
    },
    getTvList : (type,params) => {
        const url = 'tv/' + movieType[type]
        return axiosClient.get(url,params)
    },
    getVideos: (cate,id) => {
        const url = category[cate] +'/'+id + '/videos'
        return axiosClient.get(url,{params:{}})
    },
    getSimilar: (cate,id) => {
        const url = category[cate] + '/' +id +'/videos'
        return axiosClient.get(url,{params:{}})
    },
    search: (cate,params) => {
        const url = 'search/' + category[cate]; 
        return axiosClient.get(url,params)
    }

}
export default tmdbApi