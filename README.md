# The Front-End of a News App

The hosted version of the app is available at: https://newsappsite.netlify.app/

This app is reddit-style app where users can read, post, comment and vote on articles. 

## To run the application locally

- Click code on the top right of this page and copy the URL for this repository
- Open your terminal and then type. $ git clone {paste the URL of this repository} This will clone it.
- Navigate (using the 'cd' command) into the new folder and type. $ npm install. This installs the required dependencies.
- Finally, to run the React project type $ npm start.


## User Stories when building the app

### Users are able to:

- view a list of all articles
- view a page for each topic with a list of related articles.
- view an individual article.
- view an individual article's comments.
- vote on an article and immediately see the change.
- post a new comment to an existing article (as a default logged in user. e.g. 'jessjelly').
- sort articles by:
-date created
- comment_count
- votes
- delete my own comments (as a default logged in user. e.g. 'jessjelly').

Error-handling:

- Users can see an appropriate errors if they go on a non-existent path / a path for a non-existent article / topic.
- Users cannot post a comment if the form is not filled in.

## Additional User Stories
#### Viewers can:
- use the site on my mobile without sacrificing style or functionality (as I may not have my laptop nearby).
- follow the readme instructions to easily run the project locally.
- find a link to the hosted version of the project in the readme. (use a placeholder if not yet hosted!)
- find a link to the back-end repository of the project in the readme.
- find a link to the hosted version of the back-end project in the readme.
