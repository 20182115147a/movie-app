const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'f22fb06d73774750612caf8b09c09c4b',
    originalImage: imgPath => {
        return `https://image.tmdb.org/t/p/original${imgPath}`;
    },
    w500Image: imgPath => {
        return `https://image.tmdb.org/t/p/w500${imgPath}`;
    }
}
export default apiConfig;