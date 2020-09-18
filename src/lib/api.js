import axios from 'axios'

const baseUrl = 'https://api.themoviedb.org/3'
const token = '5adb5c242d8f7268a630ecc811e49a81'
// const corsUrl = 'https://cors-anywhere.herokuapp.com'
// const baseUrl2 = 'https://api.themoviedb.org/3'


export const getAllFilms = currentPage => {
  return axios.get(`${baseUrl}/discover/movie?api_key=${token}&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=${currentPage}&vote_count.gte=100&vote_average.gte=8`)
}

export const getSingleFilm = filmId => {
  return axios.get(`${baseUrl}/movie/${filmId}?api_key=${token}&language=en-US`)
}

export const searchFunction = userInput => {
  return axios.get(`${baseUrl}/search/movie?api_key=${token}&query=${userInput}`)
}


export const getRandomFilm = randomFilmId => {
  return axios.get(`${baseUrl}/movie/${randomFilmId}?api_key=5adb5c242d8f7268a630ecc811e49a81&language=en-US`)
}

