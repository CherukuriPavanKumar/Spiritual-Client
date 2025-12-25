'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProgressIndicator } from './ui/ProgressIndicator';
import { Input, Textarea } from './ui/Input';
import { RadioGroup } from './ui/RadioGroup';
import { Button } from './ui/Button';
import { z } from 'zod';

// Form validation schemas
const step1Schema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  gotra: z.string().min(1, 'Please enter your gotra'),
  mobile: z.string().regex(/^\d{10}$/, 'Please enter a valid 10-digit mobile number'),
  email: z.string().email('Please enter a valid email address'),
});

const step2Schema = z.object({
  numParticipants: z.number().min(1, 'At least 1 participant required'),
  participationMode: z.enum(['in-person', 'online']),
  yajnaOptions: z.string().optional(),
});

const step3Schema = z.object({
  wantsPrasadam: z.boolean(),
  prasadamAddress: z.string().optional(),
});

export interface RegistrationFormData {
  // Step 1
  fullName: string;
  gotra: string;
  mobile: string;
  email: string;
  
  // Step 2
  numParticipants: number;
  participationMode: 'in-person' | 'online';
  yajnaOptions: string;
  
  // Step 3
  wantsPrasadam: boolean;
  prasadamAddress: string;
}

interface RegistrationFormProps {
  onComplete: (data: RegistrationFormData) => void;
  onCancel: () => void;
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({
  onComplete,
  onCancel,
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<RegistrationFormData>({
    fullName: '',
    gotra: '',
    mobile: '',
    email: '',
    numParticipants: 1,
    participationMode: 'in-person',
    yajnaOptions: '',
    wantsPrasadam: false,
    prasadamAddress: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const steps = [
    'Devotee Details',
    'Participation',
    'Prasadam',
  ];

  const updateFormData = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error for this field
    setErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors[field];
      return newErrors;
    });
  };

  const validateStep = (step: number): boolean => {
    try {
      setErrors({});
      
      switch (step) {
        case 1:
          step1Schema.parse({
            fullName: formData.fullName,
            gotra: formData.gotra,
            mobile: formData.mobile,
            email: formData.email,
          });
          return true;
          
        case 2:
          step2Schema.parse({
            numParticipants: formData.numParticipants,
            participationMode: formData.participationMode,
            yajnaOptions: formData.yajnaOptions,
          });
          return true;
          
        case 3:
          if (formData.wantsPrasadam && !formData.prasadamAddress.trim()) {
            setErrors({ prasadamAddress: 'Please provide delivery address for prasadam' });
            return false;
          }
          return true;
          
        default:
          return true;
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.issues.forEach((err: z.ZodIssue) => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < 3) {
        setCurrentStep(currentStep + 1);
      } else {
        onComplete(formData);
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0,
    }),
  };

  return (
    <section
      id="registration"
      style={{
        padding: 'var(--spacing-section) 0',
        background: 'var(--cream-100)',
      }}
    >
      <div className="container">
        <div
          style={{
            maxWidth: '50rem',
            margin: '0 auto',
            background: 'white',
            borderRadius: '1.5rem',
            padding: 'var(--spacing-2xl)',
            boxShadow: 'var(--shadow-lg)',
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.875rem, 1.6rem + 1.375vw, 2.5rem)',
              fontWeight: '600',
              color: 'var(--neutral-700)',
              textAlign: 'center',
              marginBottom: 'var(--spacing-xl)',
            }}
          >
            Register for the Yajna
          </h2>

          <ProgressIndicator
            currentStep={currentStep}
            totalSteps={3}
            steps={steps}
          />

          <AnimatePresence mode="wait" custom={currentStep}>
            <motion.div
              key={currentStep}
              custom={currentStep}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              {/* Step 1: Devotee Details */}
              {currentStep === 1 && (
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 'clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)',
                      fontWeight: '600',
                      color: 'var(--neutral-700)',
                      marginBottom: 'var(--spacing-lg)',
                    }}
                  >
                    Your Details
                  </h3>
                  <p
                    style={{
                      fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                      lineHeight: '1.75',
                      color: 'var(--neutral-600)',
                      marginBottom: 'var(--spacing-xl)',
                    }}
                  >
                    Please share your details so we can include you in the sacred ceremony.
                  </p>

                  <Input
                    label="Full Name"
                    value={formData.fullName}
                    onChange={(e) => updateFormData('fullName', e.target.value)}
                    error={errors.fullName}
                    placeholder="Enter your full name"
                    required
                  />

                  <Input
                    label="Gotra"
                    value={formData.gotra}
                    onChange={(e) => updateFormData('gotra', e.target.value)}
                    error={errors.gotra}
                    placeholder="Enter your gotra"
                    helperText="If you don't know your gotra, you may write 'Unknown'"
                    required
                  />

                  <Input
                    label="Mobile Number"
                    type="tel"
                    value={formData.mobile}
                    onChange={(e) => updateFormData('mobile', e.target.value)}
                    error={errors.mobile}
                    placeholder="10-digit mobile number"
                    required
                  />

                  <Input
                    label="Email Address"
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
                    error={errors.email}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              )}

              {/* Step 2: Participation Details */}
              {currentStep === 2 && (
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 'clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)',
                      fontWeight: '600',
                      color: 'var(--neutral-700)',
                      marginBottom: 'var(--spacing-lg)',
                    }}
                  >
                    Participation Details
                  </h3>
                  <p
                    style={{
                      fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                      lineHeight: '1.75',
                      color: 'var(--neutral-600)',
                      marginBottom: 'var(--spacing-xl)',
                    }}
                  >
                    Let us know how you would like to participate in the yajna.
                  </p>

                  <Input
                    label="Number of Participants"
                    type="number"
                    min="1"
                    value={formData.numParticipants}
                    onChange={(e) => updateFormData('numParticipants', parseInt(e.target.value) || 1)}
                    error={errors.numParticipants}
                    helperText="Including yourself and family members"
                    required
                  />

                  <RadioGroup
                    label="Mode of Participation"
                    name="participationMode"
                    value={formData.participationMode}
                    onChange={(value) => updateFormData('participationMode', value)}
                    options={[
                      {
                        value: 'in-person',
                        label: 'In-Person',
                        description: 'Attend the yajna at the temple and receive blessings directly',
                      },
                      {
                        value: 'online',
                        label: 'Online',
                        description: 'Participate virtually from home through live streaming',
                      },
                    ]}
                    error={errors.participationMode}
                  />

                  <Textarea
                    label="Special Yajna Intentions (Optional)"
                    value={formData.yajnaOptions}
                    onChange={(e) => updateFormData('yajnaOptions', e.target.value)}
                    placeholder="You may mention any specific prayers or intentions for the yajna..."
                    helperText="Example: Health for family members, success in endeavors, etc."
                  />
                </div>
              )}

              {/* Step 3: Prasadam Details */}
              {currentStep === 3 && (
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 'clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)',
                      fontWeight: '600',
                      color: 'var(--neutral-700)',
                      marginBottom: 'var(--spacing-lg)',
                    }}
                  >
                    Prasadam Details
                  </h3>
                  <p
                    style={{
                      fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                      lineHeight: '1.75',
                      color: 'var(--neutral-600)',
                      marginBottom: 'var(--spacing-xl)',
                    }}
                  >
                    Prasadam blessed during the yajna will be available for devotees.
                  </p>

                  <RadioGroup
                    label="Would you like to receive prasadam?"
                    name="wantsPrasadam"
                    value={formData.wantsPrasadam ? 'yes' : 'no'}
                    onChange={(value) => updateFormData('wantsPrasadam', value === 'yes')}
                    options={[
                      {
                        value: 'yes',
                        label: 'Yes, please',
                        description: 'I would like to receive blessed prasadam from the yajna',
                      },
                      {
                        value: 'no',
                        label: 'No, thank you',
                        description: 'I will not require prasadam',
                      },
                    ]}
                  />

                  {formData.wantsPrasadam && (
                    <Textarea
                      label="Delivery Address"
                      value={formData.prasadamAddress}
                      onChange={(e) => updateFormData('prasadamAddress', e.target.value)}
                      error={errors.prasadamAddress}
                      placeholder="Enter complete delivery address with pincode..."
                      required
                    />
                  )}
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: 'var(--spacing-md)',
              marginTop: 'var(--spacing-2xl)',
            }}
          >
            {currentStep > 1 ? (
              <Button variant="secondary" onClick={handlePrevious}>
                Previous
              </Button>
            ) : (
              <Button variant="ghost" onClick={onCancel}>
                Cancel
              </Button>
            )}

            <Button onClick={handleNext}>
              {currentStep === 3 ? 'Complete Registration' : 'Continue'}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
