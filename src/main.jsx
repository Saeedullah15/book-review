import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from './App';
import AboutUs from './components/AboutUs/AboutUs';
import BookDetails from './components/BookDetails/BookDetails';
import Contact from './components/Contact/Contact';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import ListedBooks from './components/ListedBooks/ListedBooks';
import PagesToRead from './components/PagesToRead/PagesToRead';
import './index.css';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/listedBooks",
                element: <ListedBooks></ListedBooks>,
                loader: () => fetch("books.json"),
                errorElement: <ErrorPage></ErrorPage>
            },
            {
                path: "/pagesToRead",
                element: <PagesToRead></PagesToRead>,
                loader: () => fetch("books.json"),
            },
            {
                path: "/book/bookDetails/:bookId",
                element: <BookDetails></BookDetails>,
                loader: () => fetch("books.json"),
                errorElement: <ErrorPage></ErrorPage>
            },
            {
                path: "/about",
                element: <AboutUs></AboutUs>,
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            }
        ]
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HelmetProvider>
            <RouterProvider router={router} />
        </HelmetProvider>
    </React.StrictMode>,
)
