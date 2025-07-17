import React from 'react'

export default function Patients() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Patients</h1>
        <p className="text-muted-foreground mt-1">
          Manage patient records and information
        </p>
      </div>
      
      <div className="flex items-center justify-center h-96 border-2 border-dashed border-border rounded-lg">
        <p className="text-muted-foreground">Patient management coming soon...</p>
      </div>
    </div>
  )
}