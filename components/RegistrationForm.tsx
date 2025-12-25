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
  fullName: z.string().min(2, 'దయచేసి పూర్తి పేరు రాయండి'),
  gotra: z.string().min(1, 'దయచేసి గోత్రం రాయండి'),
  mobile: z.string().regex(/^\d{10}$/, 'దయచేసి సరైన 10 అంకాల మొబైల్ నంబరు రాయండి'),
  email: z.string().email('దయచేసి సరైన ఇమెయిల్ చిల్లరాయి రాయండి'),
});

const step2Schema = z.object({
  numParticipants: z.number().min(1, 'కనీసం 1 పాల్గోనేవారు ఉండాలి'),
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
    'భక్తుల వివరాలు',
    'పాల్గొనువు విధానం',
    'ప్రసాదం వివరాలు',
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
            padding: 'clamp(var(--spacing-lg), 4vw, var(--spacing-2xl))',
            boxShadow: 'var(--shadow-lg)',
            width: '100%',
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
            యజ్ఞం కోసం నమోదు చేసుకోండి
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
                    మీ వివరాలు
                  </h3>
                  <p
                    style={{
                      fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                      lineHeight: '1.75',
                      color: 'var(--neutral-600)',
                      marginBottom: 'var(--spacing-xl)',
                    }}
                  >
                    పవిత్ర యజ్ఞంలో మీ పేరును చేర్చడానికి దయచేసి మీ వివరాలను తెలిపించండి.
                  </p>

                  <Input
                    label="పూర్తి పేరు"
                    value={formData.fullName}
                    onChange={(e) => updateFormData('fullName', e.target.value)}
                    error={errors.fullName}
                    placeholder="మీ పూర్తి పేరు రాయండి"
                    required
                  />

                  <Input
                    label="గోత్రం"
                    value={formData.gotra}
                    onChange={(e) => updateFormData('gotra', e.target.value)}
                    error={errors.gotra}
                    placeholder="మీ గోత్రం రాయండి"
                    helperText="మీ గోత్రం తెలీదు అంటే, 'తెలీదు' అని రాయవచ్చు"
                    required
                  />

                  <Input
                    label="మొబైల్ నంబరు"
                    type="tel"
                    value={formData.mobile}
                    onChange={(e) => updateFormData('mobile', e.target.value)}
                    error={errors.mobile}
                    placeholder="10 అంకాల మొబైల్ నంబరు"
                    required
                  />

                  <Input
                    label="ఇమెయిల్ చిల్లరాయి"
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
                    పాల్గొనువు వివరాలు
                  </h3>
                  <p
                    style={{
                      fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                      lineHeight: '1.75',
                      color: 'var(--neutral-600)',
                      marginBottom: 'var(--spacing-xl)',
                    }}
                  >
                    యజ్ఞంలో మీరు ఎలా పాల్గొనాలనుకుంటున్నారు అని తెలియజేయండి.
                  </p>

                  <Input
                    label="పాల్గోనే వారి సంఖ్య"
                    type="number"
                    min="1"
                    value={formData.numParticipants}
                    onChange={(e) => updateFormData('numParticipants', parseInt(e.target.value) || 1)}
                    error={errors.numParticipants}
                    helperText="మీరు మరియు మీ కుటుంబ సభ్యులు చేర్చి"
                    required
                  />

                  <RadioGroup
                    label="పాల్గొనువు రీతి"
                    name="participationMode"
                    value={formData.participationMode}
                    onChange={(value) => updateFormData('participationMode', value)}
                    options={[
                      {
                        value: 'in-person',
                        label: 'నేరుగా',
                        description: 'కోవిల్లో సర్వేశం నేరుగా పాల్గొని ఆశీర్వాదాలను తోల్లోనే పొందుతారు',
                      },
                      {
                        value: 'online',
                        label: 'ఆన్‌లైన్',
                        description: 'ఇంటినుండి లైవ్ ద్వారా పాల్గోనండి',
                      },
                    ]}
                    error={errors.participationMode}
                  />

                  <Textarea
                    label="యజ్ఞ సంకల్పాలు (ఐచ్ఛికం)"
                    value={formData.yajnaOptions}
                    onChange={(e) => updateFormData('yajnaOptions', e.target.value)}
                    placeholder="యజ్ఞం కోసం మీ ప్రార్థనలు లేదా సంకల్పాలు రాయవచ్చు..."
                    helperText="ఉదాహరణ: కుటుంబ సభ్యుల ఆరోగ్యం, ప్రయత్నాల్లో విజయం వంటివి"
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
                    ప్రసాదం వివరాలు
                  </h3>
                  <p
                    style={{
                      fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                      lineHeight: '1.75',
                      color: 'var(--neutral-600)',
                      marginBottom: 'var(--spacing-xl)',
                    }}
                  >
                    యజ్ఞంలో ఆశీర్వచించబడే ప్రసాదం భక్తులకు లభ్యం.
                  </p>

                  <RadioGroup
                    label="మీరు ప్రసాదం తీసుకుంటారా?"
                    name="wantsPrasadam"
                    value={formData.wantsPrasadam ? 'yes' : 'no'}
                    onChange={(value) => updateFormData('wantsPrasadam', value === 'yes')}
                    options={[
                      {
                        value: 'yes',
                        label: 'అవును, దయచేసి',
                        description: 'యజ్ఞంలో ఆశీర్వచించబడే ప్రసాదాన్ని తీసుకుంటాను',
                      },
                      {
                        value: 'no',
                        label: 'వద్దు, ధన్యవాదాలు',
                        description: 'నాకు ప్రసాదం అవసరం లేదు',
                      },
                    ]}
                  />

                  {formData.wantsPrasadam && (
                    <Textarea
                      label="పంపించు చిల్లరాయి"
                      value={formData.prasadamAddress}
                      onChange={(e) => updateFormData('prasadamAddress', e.target.value)}
                      error={errors.prasadamAddress}
                      placeholder="పిన్కోడుతో పాటు పూర్తి చిల్లరాయి రాయండి..."
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
              alignItems: 'center',
              gap: 'var(--spacing-md)',
              marginTop: 'var(--spacing-2xl)',
              flexWrap: 'wrap',
            }}
          >
            {currentStep > 1 ? (
              <Button variant="secondary" onClick={handlePrevious} style={{ flex: '1 1 auto', minWidth: '8rem' }}>
                క్రిందకు
              </Button>
            ) : (
              <Button variant="ghost" onClick={onCancel} style={{ flex: '1 1 auto', minWidth: '8rem' }}>
                రద్దు చేయి
              </Button>
            )}

            <Button onClick={handleNext} style={{ flex: '1 1 auto', minWidth: '8rem' }}>
              {currentStep === 3 ? 'నమోదు పూర్తి చేయండి' : 'ముందుకు'}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
