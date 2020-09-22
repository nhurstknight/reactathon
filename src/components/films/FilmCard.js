import React from 'react'

import { Link } from 'react-router-dom'

const FilmCard = ({ title, release_date, poster_path, id }) => {
  return (
    <div id={id} className="column is-one-quarter-desktop is-one-third-tablet">
      <Link to={`/films/${id}`}>
        <div className="Filmcard card">
          <div className="card-image">
            <figure className="image image is-1by1">
              <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={`${title} poster`}/>
            </figure>
          </div>
          <div className="card-header">
            <h4 className="card-header-title is-centered">{title}</h4>
          </div>
        </div>
      </Link> 
    </div>
  )
}

export default FilmCard