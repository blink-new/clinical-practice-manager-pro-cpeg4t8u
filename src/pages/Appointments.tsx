import React from 'react'

export default function Appointments() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Appointments</h1>
        <p className="text-muted-foreground mt-1">
          Schedule and manage patient appointments
        </p>
      </div>
      
      <div className="flex items-center justify-center h-96 border-2 border-dashed border-border rounded-lg">
        <p className="text-muted-foreground">Appointment management coming soon...</p>
      </div>
    </div>
  )
}