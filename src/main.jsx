import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from './App';
import BookDetails from './components/BookDetails/BookDetails';
import Home from './components/Home/Home';
import ListedBooks from './components/ListedBooks/ListedBooks';
import PagesToRead from './components/PagesToRead/PagesToRead';
import './index.css';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/listedBooks",
                element: <ListedBooks></ListedBooks>,
                loader: () => fetch("books.json"),
            },
            {
                path: "/pagesToRead",
                element: <PagesToRead></PagesToRead>
            },
            {
                path: "/book/bookDetails/:bookId",
                element: <BookDetails></BookDetails>,
                loader: () => fetch("books.json"),
            }
        ]
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
