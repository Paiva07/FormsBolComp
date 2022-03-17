import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, dados }) => {
  return dados.length !== 0 ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
