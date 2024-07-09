import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const getBookIdForRead = () => {
    const storedIds = localStorage.getItem("readIds");
    if (storedIds) {
        return JSON.parse(storedIds);
    }
    else {
        return [];
    }
}
const saveBookIdForRead = (id) => {
    const storedIds = getBookIdForRead();
    const wishIds = getBookIdForWish();
    if (!storedIds.includes(id)) {
        storedIds.push(id);
        localStorage.setItem("readIds", JSON.stringify(storedIds));
        toast.success("added to your reading list!");
    }
    else {
        toast.warn("already been added to your reading list! you can not add the same book more than once!!");
    }
}

// --------------------------------------------------------------------------

const getBookIdForWish = () => {
    const storedIds = localStorage.getItem("wishIds");
    if (storedIds) {
        return JSON.parse(storedIds);
    }
    else {
        return [];
    }
}
const saveBookIdForWish = (id) => {
    const storedIds = getBookIdForWish();
    if (!storedIds.includes(id)) {
        storedIds.push(id);
        localStorage.setItem("wishIds", JSON.stringify(storedIds));
        toast.success("added to your wishlist!");
    }
    else {
        toast.warn("already been added to your wishlist! you can not add the same book more than once!!");
    }
}

export { getBookIdForRead, getBookIdForWish, saveBookIdForRead, saveBookIdForWish };

