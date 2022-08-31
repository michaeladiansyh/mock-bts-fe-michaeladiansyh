export const getToken = () => {
    return localStorage.getItem("USER")
}

export const setUser = (token) => {
    return localStorage.setItem("USER", JSON.stringify(token))
}

export const removeUser = () => {
    return localStorage.removeItem("USER")
}