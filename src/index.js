import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import store from './store/store';
import reportWebVitals from './reportWebVitals';
import ErrorPage from './ErrorPage';
import RootLayout from './routes/RootLayout';
import MoviePage from './MoviePage';
import HomePage, {loader as homeLoader} from './HomePage';
import SingleMoviePage, {loader as SingleMovieLoader} from './SingleMoviePage';
import SelectShowPage, {loader as SelectShowloader} from './routes/SelectShowPage';
import SelectSeats, {loader as selectSeatsLoader} from './routes/SelectSeats';
import { Provider } from 'react-redux';
import BookingSummary from './routes/BookingSummary';


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    errorElement: <ErrorPage/>,

    children: [
      {
        path: "/",
        element: <HomePage/>,
        loader: homeLoader
      },
      {
        path: "/movies",
        element: <MoviePage/>
      },
      {
        path: "/movies/:movieId",
        element: <SingleMoviePage/>,
        loader: SingleMovieLoader
      },
      {
       path: "/select-show/:movieId",
       element: <SelectShowPage/>,
       loader: SelectShowloader
      },
      {
        path: "/select-seats/:showId",
        element: <SelectSeats/>,
        loader:selectSeatsLoader
        
      },
      {
        path:"/booking-summary",
        element: <BookingSummary/>
      }
    ]
  },

  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
