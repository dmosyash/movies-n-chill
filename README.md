# Movies-n-Chill
This is a web application for viewing popular movies, about movies and their cast and crew.

[Click here to see the live App](https://movies-n-chill.netlify.com/)

This application is developed in Reactjs.
TMDb APIs are used to fetch data.

## Structure of the App

The App is developed in ReactJs. It is created with the help of **React cli**. **React bootstrap** is used for CSS and modeling purpose. Every page of this app is divided into 3 parts

- Header
- Main Part
- Footer

### Header
It always stays on top of every page, this component is called in App component, so need to write only once in the whole app.

It has 2 elements
- Logo
- Search Box

#### Search Box
This is a smart component which takes input from the user to search movies from the text provided by the user.

It calls TMDb's search movie API as user types in the text in the search box. It fetches the data from the API's response and shows the list to the user. It shows the top 7 most related movies in the list. The user can see details of the movie by clicking on it in the list.


### Main Part
As the name suggests it is the main body of the App. This App has 3 main parts or pages.

- Home page
- Movie Detail page
- Cast Detail page

#### Home page
This is App's default page. It shows the most popular movies of recent days. It shows 20 most popular movies in a single view, pagination is there to view less popular movies. The user can see details of the movie by clicking on any of the movies in the view.

It is a container component. It calls TMDb popular movies API to show list popular movies. It is consists of a few dumb components and has some methods to navigate around. It also has the pagination functionality.

#### Movie Details page
This page is for viewing movie details like movie's runtime, release dates, budget, cast etc. It shows *similar movies* and *cast n crew* of the movie along with basic details. The user can see details of any cast member of the movie by clicking on it.

This container component calls TMDb's movie details API for showing basic details like its **Poster**, **Name**, **Genre**, **Plot** etc. 
Similar movies API is called to fetch similar movie's data and a dumb component is used to render that.
For fetching cast n crew of the movie, it is calling a different API. A dumb component is used to render that

#### Cast Details page
This page is for viewing cast member details like name, nick-name, DOB, birth location etc. It shows *other movies of the person*  along with basic details. The user can see details of any movie by clicking on it.

This container component calls TMDb's person API for showing basic details like its **Profile**, **Name**, **Profession**, **Biography** etc. 
Other movies of the person are fetched from movie_credits API and a dumb component is used to render that.


### Footer
It holds the link to its GitHub page and emailId of the creator.


### Services
For calling APIs and handling other details like *API_KEY*, *base URL*, *base image URL* apiService is used.
