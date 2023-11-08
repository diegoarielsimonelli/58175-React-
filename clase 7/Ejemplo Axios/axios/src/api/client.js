import axios from 'axios'

// Aquí colocamos la URL base del servidor de backend
// que luego utilizaremos para construir la URL completa
// junto al endpoint
const baseURL = `https://jsonplaceholder.typicode.com/posts`;

// Cremos un cliente que utilice esa URL base
export const client = axios.create({
    baseURL: baseURL,
});

export const useAuthEndpoints = false;

