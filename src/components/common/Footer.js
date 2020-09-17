import React from 'react'

// import dblogo from '../../images/dblogo'


const Footer = () => {
  return (
    <footer className="footer has-background-grey-darker">
      {/* <img src={dblogo} alt="dblogo" /> */}
      <div className="content has-text-centered">
        <p className="has-text-white">This product uses the TMDb API but is not endorsed or certified by TMDb.
        </p>
      </div>
    </footer>
  )
}

export default Footer