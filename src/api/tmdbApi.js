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
    }
}
export default tmdbApi