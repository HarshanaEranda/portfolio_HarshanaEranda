// // src/services/api.js
// import axios from 'axios';

// const API_BASE_URL = 'http://localhost:5221/api/Auth';

// const api = axios.create({
//   baseURL: API_BASE_URL,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// // Request interceptor for adding the auth token
// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       config.headers['Authorization'] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// // Response interceptor for handling common errors
// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response?.status === 401) {
//       localStorage.removeItem('token');
//       window.location.href = '/login';
//     }
//     return Promise.reject(error);
//   }
// );

// const authService = {
//   login: (email, password) => api.post('/auth/login', { "Email": email, "Password": password }),
//   register: (userData) => api.post('/auth/register', userData),
//   getCurrentUser: () => api.get('/auth/current-user'),
//   logout: () => {
//     localStorage.removeItem('token');
//     delete api.defaults.headers.common['Authorization'];
//   },
// };
const fetchData = async () => {
  try {
    const response = await fetch('./data/data.json');
    const data = await response.json();
    return data.personalInfo;
  } catch (error) {
    console.error('Error fetching personal info:', error);
  }
};


export default  fetchData;

