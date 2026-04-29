'use client'

import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Step {
  id: number
  title: string
}

interface BookingStepsProps {
  steps: Step[]
  currentStep: number
}

export function BookingSteps({ steps, currentStep }: BookingStepsProps) {
  return (
    <div className="overflow-x-auto pb-4">
      <div className="flex items-center min-w-max">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center">
            {/* Step Circle */}
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  'w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors',
                  step.id < currentStep
                    ? 'bg-accent text-accent-foreground'
                    : step.id === currentStep
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground'
                )}
              >
                {step.id < currentStep ? (
                  <Check className="w-5 h-5" />
                ) : (
                  step.id
                )}
              </div>
              <span
                className={cn(
                  'text-xs mt-2 whitespace-nowrap',
                  step.id <= currentStep
                    ? 'text-primary font-medium'
                    : 'text-muted-foreground'
                )}
              >
                {step.title}
              </span>
            </div>

            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div
                className={cn(
                  'h-0.5 w-12 mx-2',
                  step.id < currentStep ? 'bg-accent' : 'bg-muted'
                )}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
