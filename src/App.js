import React from 'react'
import Layout from './components/Layout'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Dashboard from './pages/ChartPage'
import CompanyDetails from './pages/CompanyDetails'
import ReportsPage from './pages/ReportsPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="*" element={<RegisterPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/Dashboard" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="CompanyDetails" element={<CompanyDetails />} />
          <Route path="MyReports" element={<ReportsPage />} />
          <Route path="GRIreport" element={<ReportsPage />} />
          <Route path="SEBIReport" element={<ReportsPage />} />
          <Route path="Customizereport" element={<ReportsPage />} />
          <Route path="DataUpload" element={<ReportsPage />} />
          <Route path="Environment" element={<Dashboard />} />
          <Route path="Social" element={<Dashboard />} />
          <Route path="Governance" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
