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
    if (!storedIds.includes(id)) {
        storedIds.push(id);
        localStorage.setItem("readIds", JSON.stringify(storedIds));
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
    }
}

export { getBookIdForRead, getBookIdForWish, saveBookIdForRead, saveBookIdForWish };

