# Uni.fy

## The BEST College Search Application for Future College Students

The idea is simple, Uni.fy connects future students to a College Info Page in which they may view a large variety of different aspects of the college. College websites do not give an honest unbias view of themselves like Uni.fy provides. On top of all that, we allow Prospect students to ask questions and allow Alumni students of that college to answer.

## Third Party API
We used the API from collegescorecard.gov (College Scorecard API) to populate our database with their information on each college. This included such things as; Programs, Scores, Finances, Statistics, etc. 

![alt text](/client/public/assets/img/ReadMe1.PNG)

## Alumni and Prospect Students
The cherry on top of all of this is our Q and A interface on a college's Info Page!

![alt text](/client/public/assets/img/ReadMe2.PNG)

## Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following commands:

```
yarn install
cd client
yarn install
cd ..
``

After both installations complete, run the following command in your terminal:

```
yarn start
```

That's it, your app should be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Deployment (Heroku)

After confirming that you have an up to date git repository and a Heroku app created, complete the following:

1. Build the React app for production by running the following command:

```
yarn build
```
> Note: A yarn build will be required to register any new Post requests from any front-end JavaScript to to prevent any proxy server errors.

2. Add and commit all changes to git

3. Push to Heroku

If all previous steps were followed correctly, your application should be deployed to Heroku!
