import React from 'react'
// import { Link } from 'react-router-dom'

const FilmCard = ({ title , release_date, poster_path }) => {
  return (
    <div className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
      <div className="card">
        <div className="card-header">
          <h4 className="card-header-title">{title}</h4>
        </div>
        <div className="card-image">
          <figure className="image image is-1by1">
            <img src={ `https://image.tmdb.org/t/p/w500/${poster_path}` }/>
          </figure>
        </div>
        <div className="card-content">
          <h5 className="">Release Date:{release_date}</h5>
        </div>
      </div>
    </div>
  )
}

export default FilmCard