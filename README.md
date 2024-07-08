# npx create-react-app name
# installed tailwindCSS from docs
# reRun the app to work css
# routing for the app
# login and signup page ui/ux



# Key Learnings about routes
 -App.js is our main screen and we just render mainbody inside that
 -We have Main body where we create the routes 
 -We install react-browser-dom (npm i -D)
 -We make appRouter variable which is an array containing all the path details
 -We wrap everything inside RouterProvider 
 -Have the authentication and routing inside the header only so it is accessable everywhere and easy to manage

# Key Learnings in UI design of login form
 - Keep styling as same as possible for different pages so changes would be minimal
 - Dont create new pages for minimal changes
 - Learn it from chatGPT keep spamming questions
 - Use Formik(library) if there are multiple form items and validations
 

# Installing Firebase into the app

 - Create a project from firebase website
 - Add hoisting if planning to host the website
 - npm i firebase
 - Add the config and export data in a file inside src/utils/firebase.js, exporting is important
 - for deploying 
    -npm install -g firebase-tools
    -firebase login
    -firebase init 
    -firebase deploy, inside build folder for create-react-app
 - copy codes for sign in and log in from their docs for web page
 - check for users from their page 


# Installing Redux into the app

 - npm i -D @reduxjs/toolkit
 - npm i react-redux
 - dispatch is for setting data, const dispatch = useDispatch()
 - dispatch(reducerName(dataToSet));
 - selector is for getting data, const selector = useSelector()



# TMDB API

 - signed in to get access token
 - read docs and got fetch API syntax



# Why API calls happens twice?
 - Its because of the react strict mode in the main page
 - React does extra rendering of the components to check for some inconsistency between our calls, this happens only in development mode
 - Throws error if any inconsistency in the rendering cycle

 