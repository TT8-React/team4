import React from 'react'
import Layout from './components/Layout'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Dashboard from './pages/ChartPage'
import CompanyDetails from './pages/CompanyDetails'
import ReportsPage from './pages/ReportsPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MyReport from './pages/MyReport'
import CustomizeReport from './pages/CustomizeReport'
import ForgetPassword from './pages/ForgetPassword'
import Verification from './pages/Verification'
import Verified from './pages/Verified'
import UploadData from './pages/DataUpload'

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/verified" element={<Verified />} />
        <Route path="/Dashboard" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="CompanyDetails" element={<CompanyDetails />} />
          <Route path="MyReports" element={<MyReport />} />
          <Route path="GRIreport" element={<ReportsPage />} />
          <Route path="SEBIReport" element={<ReportsPage />} />
          <Route path="Customizereport" element={<CustomizeReport />} />
          <Route path="DataUpload" element={<UploadData />} />
          <Route path="Environment" element={<Dashboard />} />
          <Route path="Social" element={<Dashboard />} />
          <Route path="Governance" element={<Dashboard />} />
        </Route>
        <Route path="*" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  )
}
