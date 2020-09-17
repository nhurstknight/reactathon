import axios from 'axios'

const baseUrlDiscover = 'https://api.themoviedb.org/3/discover/movie?api_key=5adb5c242d8f7268a630ecc811e49a81'

export const getAllFilms = () => {
  return axios.get(`${baseUrlDiscover}&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&vote_count.gte=100&vote_average.gte=8`)
}


// Search Function
// Display first 