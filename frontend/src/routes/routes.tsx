
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from '../pages/Auth/LoginPage.tsx'
import SignupPage from '../pages/Auth/SignupPage.tsx'
import Home from '../pages/Home/Home.tsx'
import { getStorageItem } from '../util/Storage.ts'
import { StorageEnums } from '../Types/enum/StorageEnum.ts'
import NotFoundPage from '../pages/ErrorBoundary/NoFoundPage.tsx'

const AppRoutes: React.FC = () => {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const PrivateRoute = ({ children }:any) => {
        const token = getStorageItem(StorageEnums.TOKEN);
        console.log(">>>token",token)
        return token ? children : <Navigate to="/login" />;
      };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes