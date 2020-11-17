
# SEI-project-2 - A General Assembly of Movies
The deployed app can be found [here] [🍿 A General Assembly of Films 🎬](https://condescending-kowalevski-76c740.netlify.app/)

## Brief
The brief for this project was to build a **React application** that consumes a **public API**.

The technical requirements were as follows:
- The app must consume a public API.
- Have several components including at least one class component and one functional component.
- The app can have an optional router.
- Must be deployed online.

## Contributors & Timeline
This project was pair coded with [Lewis Jones](https://github.com/LewisJones0). We had 1.5 days to complete the build the application.

## Technologies & Tools
- React 
- HTML5
- Sass
- Bulma
- React-router-dom
- Axios
- VSCode
- Eslint
- Git
- Github
- Yarn
- Netlify

## Overview 
We selected our chosen API [The Movie DB (TMDB)]([API Overview — The Movie Database (TMDb)](https://www.themoviedb.org/documentation/api)) The ket features were:
- View top rated movies.
- Search for movies.
- Randomise a film selection if you are stuck for what to watch.

## Process
As we have a limited time to build the application we decided to spend time planning and investigate which API to build our application with. We opted to build our app using [TMDb (The Movie Db) API]([API Overview — The Movie Database (TMDb)](https://www.themoviedb.org/documentation/api)) due to the extensive documentation that was available and the amount of data that was accessible from the API. 

### Planning
We outlined the MVP for our product which was to build the FilmIndex, FilmCard and FilmShow components.

INSERT WIREFRAMES

We also planned the extra features that we wanted to implement if we achieved MVP which included:
- Search functionality
- Randomising a film
- Filtering by genre

### Build
Once we received the API key we delved into building the application and decided to pair code throughout the build. This allowed me to really build on my ability to talk through coding challenges with my course mate and I found that I really enjoyed this aspect of the process.

## Wins & Challenges
### Wins
I really enjoyed building this application due to the flexibility and speed you can achieve when building applications using React and a styling framework such as Bulma. Due to this we were able to build our MVP very quickly and move onto implementing additional features such as pagination and search functionality.

### Challenges
Once of the challenges that we encountered whilst building the app was due to the limitations of how many objects it could return for each GET request. Due to this we had to implement pagination. Which was challenging

[image:57BC2861-0AB5-428E-BF83-9D2983054DAB-56756-0000D56E7FC577AA/Screenshot 2020-11-17 at 02.18.33.png]

## Bugs
As this uses a third party API, we discovered that some of the randomFilmId generated in the randomise component function may not be associated with a valid film. Due to time constraints we were not able to implement an error page for the user.
 
## Future features
We were not able to implement a filter by genre so I would like to add this in the future.
