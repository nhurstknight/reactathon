
# SEI-project-2 - A General Assembly of Films

![A General Assembly of Films](/movie-api.png)

The deployed app can be found [here](https://condescending-kowalevski-76c740.netlify.app/).

## Brief
The brief for this project was to build a **React application** that consumes a **public API**.

The technical requirements were as follows:
- The app must consume a public API.
- Have several components including at least one class component and one functional component.
- The app can have an optional router.
- Must be deployed online.

## Contributors & Timeline
This project was pair coded with [Lewis Jones](https://github.com/LewisJones0). We had 2 days to complete the build the application.

## Technologies & Tools

**Tech:** HTML5, CSS3, JavaScript, React, Sass, Bulma, Axios, React-router-dom

**Tools:** VSCode,Eslint, Git & GitHub, Yarn, Netflify

## Overview 
We selected our chosen API [The Movie DB (TMDB)]([API Overview — The Movie Database (TMDb)](https://www.themoviedb.org/documentation/api)) The key features were:
- View top rated films.
- Search for films.
- Randomise a film selection if you are stuck for what to watch.

## Process
As we have a limited time to build the application, we decided to spend time planning and investigate which API to build our application with. We opted to build our app using [TMDb (The Movie Db) API]([API Overview — The Movie Database (TMDb)](https://www.themoviedb.org/documentation/api)) due to the extensive documentation that was available and the amount of data that was accessible from the API. 

### Planning
We outlined the MVP (minimum viable product) for our product which was to build the FilmIndex, FilmCard and FilmShow components.

INSERT WIREFRAMES

We also planned the extra features to implement if we achieved MVP which included:
- Search functionality.
- Randomising a film.
- Filtering by genre.

### Build
Once we received the API key, we delved into building the application and decided to pair code throughout the build. This allowed me to really build on my ability to talk through coding challenges with my course mate and I found that I really enjoyed this aspect of the process.

## Wins & Challenges
### Wins
I really enjoyed building this application due to the flexibility and speed you can achieve when using React and a styling framework such as Bulma. Due to this, we were able to build our MVP very quickly and move onto implementing additional features such as pagination and search functionality.

### Challenges
One of the challenges that we encountered whilst building the app was due to the limitations of how many objects it could return for each GET request. The below code snippets show how we were able to overcome this by implementing on the FilmIndex component.

```js
handleNextPage = () => {
    const plusOne = this.state.currentPage + 1
    this.setState({ 
      currentPage: plusOne
    }, () => this.displayNewResults())
  }

  handlePreviousPage = () => {
    const minusOne = this.state.currentPage - 1
    this.setState({ 
      currentPage: minusOne
    }, () => this.displayNewResults())
  }
```
```xml
<nav className="pagination is-centered" role="navigation" aria-label="pagination">
  <button onClick={this.handlePreviousPage} className="pagination-previous">Previous page</button>
  <button onClick={this.handleNextPage} className="pagination-next">Next page</button>
  <ul className="pagination-list">
    <li className="pagination-link is-current" aria-label={this.state.currentPage} aria-current="page">{this.state.currentPage}</li>
  </ul>
</nav>
```

## Bugs
As this uses a third party API, we discovered that some of the randomFilmIds that were generated in the randomise function may not be associated with a valid film. Due to time constraints we were not able to implement an error page for the user so this is something I would like to add at a later stage.
 
## Future features
We were not able to implement a filter by genre so I would like to add this in the future.

## Key Learnings
- Building an application using a component-based framework such as React.
- How to structure files in a RESTful React project.
- Using JSX to write HTML markup directly in JavaScript source code.
- Understanding the unidirectional flow of data in React and how to use `state` and `props`.
- Intergrating a third party API into a front-end application.
