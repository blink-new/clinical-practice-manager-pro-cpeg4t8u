import React from 'react'

export default function MedicalRecords() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Medical Records</h1>
        <p className="text-muted-foreground mt-1">
          Electronic health records and clinical documentation
        </p>
      </div>
      
      <div className="flex items-center justify-center h-96 border-2 border-dashed border-border rounded-lg">
        <p className="text-muted-foreground">Medical records system coming soon...</p>
      </div>
    </div>
  )
}