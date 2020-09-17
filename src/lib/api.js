import axios from 'axios'

const baseUrlDiscover = 'https://api.themoviedb.org/3/discover/movie?api_key=5adb5c242d8f7268a630ecc811e49a81'

export const getAllFilms = () => {
  return axios.get(`${baseUrlDiscover}/films`)
}