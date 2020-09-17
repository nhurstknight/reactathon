import React from 'react'
// import { Link } from 'react-router-dom'

const FilmCard = ({ title, genre, release_date, poster_path }) => {
  return (
    <div className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
      {/* <Link to={`/cheeses/${_id}`} > */}
        <div className="card">
          <div className="card-header">
            <h4 className="card-header-title">{title}</h4>
          </div>
          <div className="card-image">
            <figure className="image image is-1by1">
              {/* <img src={image} alt={name} loading="lazy" width="255" height="255" /> */}
              <img src={ `https://image.tmdb.org/t/p/w500/${poster_path}` }/>
            </figure>
          </div>
          <div className="card-content">
            <h5 className="">Release Date:{release_date}</h5>
          </div>
        </div>
      {/* </Link> */}
    </div>
  )
}

export default FilmCard