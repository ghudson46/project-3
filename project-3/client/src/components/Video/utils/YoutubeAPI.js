import axios from 'axios';
const KEY = 'AIzaSyCQQ3A_JIuXiZGpBjtBsD2oEtONLFPx7tM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 3,
        key: KEY
    }
})
