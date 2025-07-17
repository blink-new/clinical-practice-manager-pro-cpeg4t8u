import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import Layout from '@/components/layout/Layout'
import Dashboard from '@/pages/Dashboard'
import Patients from '@/pages/Patients'
import Appointments from '@/pages/Appointments'
import MedicalRecords from '@/pages/MedicalRecords'
import Billing from '@/pages/Billing'
import Reports from '@/pages/Reports'
import Settings from '@/pages/Settings'
import CalendarView from '@/pages/CalendarView'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/patients" element={<Patients />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/calendar" element={<CalendarView />} />
            <Route path="/medical-records" element={<MedicalRecords />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Layout>
        <Toaster />
      </div>
    </Router>
  )
}

export default App