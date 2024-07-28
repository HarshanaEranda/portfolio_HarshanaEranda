// // src/contexts/AuthContext.js
// import React, { createContext, useState, useEffect, useCallback } from 'react';
// import { api, authService } from '../services/api';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const loadUser = useCallback(async () => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       try {
//         const response = await authService.getCurrentUser();
//         setUser(response.data);
//       } catch (error) {
//         console.error('Error loading user:', error);
//         logout();
//       }
//     }
//     setLoading(false);
//   }, []);

//   useEffect(() => {
//     loadUser();
//   }, [loadUser]);

//   const login = async (email, password) => {
//     try {
//       const response = await authService.login(email, password);
//       const { token, user } = response.data;
//       localStorage.setItem('token', token);
//       api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//       setUser(user);
//       return user;
//     } catch (error) {
//       console.error('Login error:', error);
//       throw new Error(error.response?.data?.message || 'Invalid credentials');
//     }
//   };

//   const logout = useCallback(() => {
//     localStorage.removeItem('token');
//     delete api.defaults.headers.common['Authorization'];
//     setUser(null);
//   }, []);

//   const value = {
//     user,
//     login,
//     logout,
//     loading,
//   };

//   return (
//     <AuthContext.Provider value={value}>
//       {children}
//     </AuthContext.Provider>
//   );
// };