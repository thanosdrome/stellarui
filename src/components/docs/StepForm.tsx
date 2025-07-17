import React, { useState, ReactNode } from 'react';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';

interface StepFormProps {
  steps: {
    title: string;
    content: ReactNode;
  }[];
  onComplete?: (data: Record<string, any>) => void;
  className?: string;
}

export const StepForm: React.FC<StepFormProps> = ({
  steps,
  onComplete,
  className = '',
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    if (isAnimating) return;
    
    if (currentStep < steps.length - 1) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentStep(prev => prev + 1);
        setIsAnimating(false);
      }, 150);
    } else {
      // Final step - complete the form
      onComplete?.(formData);
    }
  };

  const handlePrevious = () => {
    if (isAnimating || currentStep === 0) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentStep(prev => prev - 1);
      setIsAnimating(false);
    }, 150);
  };

  const updateFormData = (key: string, value: any) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const isLastStep = currentStep === steps.length - 1;

  return (
    <div className={`w-full max-w-2xl mx-auto ${className}`}>
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                  index < currentStep
                    ? 'bg-green-600 border-green-600 text-white'
                    : index === currentStep
                    ? 'bg-blue-600 border-blue-600 text-white'
                    : 'bg-dark-gray border-light-gray text-shiny-gray'
                }`}
              >
                {index < currentStep ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <span className="font-semibold">{index + 1}</span>
                )}
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`w-24 h-0.5 mx-2 transition-all duration-300 ${
                    index < currentStep ? 'bg-green-600' : 'bg-light-gray'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <div className="text-center">
          <h2 className="text-xl font-semibold text-white mb-2">
            {steps[currentStep]?.title}
          </h2>
          <p className="text-shiny-gray">
            Step {currentStep + 1} of {steps.length}
          </p>
        </div>
      </div>

      {/* Step Content */}
      <div className="bg-dark-gray rounded-lg p-6 mb-6 min-h-64">
        <div
          className={`transition-opacity duration-150 ${
            isAnimating ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {React.cloneElement(steps[currentStep]?.content as React.ReactElement, {
            formData,
            updateFormData,
          })}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <button
          onClick={handlePrevious}
          disabled={currentStep === 0 || isAnimating}
          className="flex items-center space-x-2 px-6 py-3 rounded-lg bg-medium-gray hover:bg-light-gray text-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Previous</span>
        </button>

        <button
          onClick={handleNext}
          disabled={isAnimating}
          className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-200 text-white ${
            isLastStep
              ? 'bg-green-600 hover:bg-green-700'
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          <span>{isLastStep ? 'Complete' : 'Next'}</span>
          {isLastStep ? (
            <Check className="w-5 h-5" />
          ) : (
            <ChevronRight className="w-5 h-5" />
          )}
        </button>
      </div>
    </div>
  );
};

// Example step components for demonstration
export const StepFormExample = () => {
  const steps = [
    {
      title: 'Personal Information',
      content: (
        <PersonalInfoStep />
      ),
    },
    {
      title: 'Preferences',
      content: (
        <PreferencesStep />
      ),
    },
    {
      title: 'Review & Submit',
      content: (
        <ReviewStep />
      ),
    },
  ];

  const handleComplete = (data: Record<string, any>) => {
    console.log('Form completed with data:', data);
    alert('Form submitted successfully!');
  };

  return (
    <StepForm steps={steps} onComplete={handleComplete} />
  );
};

const PersonalInfoStep: React.FC<{
  formData?: Record<string, any>;
  updateFormData?: (key: string, value: any) => void;
}> = ({ formData = {}, updateFormData = () => {} }) => (
  <div className="space-y-4">
    <div>
      <label className="block text-sm font-medium text-white mb-2">
        Full Name
      </label>
      <input
        type="text"
        value={formData.fullName || ''}
        onChange={(e) => updateFormData('fullName', e.target.value)}
        className="w-full px-4 py-3 bg-medium-gray border border-light-gray rounded-lg text-white focus:outline-none focus:border-blue-500"
        placeholder="Enter your full name"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-white mb-2">
        Email Address
      </label>
      <input
        type="email"
        value={formData.email || ''}
        onChange={(e) => updateFormData('email', e.target.value)}
        className="w-full px-4 py-3 bg-medium-gray border border-light-gray rounded-lg text-white focus:outline-none focus:border-blue-500"
        placeholder="Enter your email"
      />
    </div>
  </div>
);

const PreferencesStep: React.FC<{
  formData?: Record<string, any>;
  updateFormData?: (key: string, value: any) => void;
}> = ({ formData = {}, updateFormData = () => {} }) => (
  <div className="space-y-4">
    <div>
      <label className="block text-sm font-medium text-white mb-2">
        Preferred Theme
      </label>
      <select
        value={formData.theme || ''}
        onChange={(e) => updateFormData('theme', e.target.value)}
        className="w-full px-4 py-3 bg-medium-gray border border-light-gray rounded-lg text-white focus:outline-none focus:border-blue-500"
      >
        <option value="">Select a theme</option>
        <option value="dark">Dark Mode</option>
        <option value="light">Light Mode</option>
        <option value="auto">Auto</option>
      </select>
    </div>
    <div>
      <label className="block text-sm font-medium text-white mb-2">
        Notifications
      </label>
      <div className="space-y-2">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={formData.emailNotifications || false}
            onChange={(e) => updateFormData('emailNotifications', e.target.checked)}
            className="mr-2"
          />
          <span className="text-white">Email notifications</span>
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={formData.pushNotifications || false}
            onChange={(e) => updateFormData('pushNotifications', e.target.checked)}
            className="mr-2"
          />
          <span className="text-white">Push notifications</span>
        </label>
      </div>
    </div>
  </div>
);

const ReviewStep: React.FC<{
  formData?: Record<string, any>;
}> = ({ formData = {} }) => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold text-white mb-4">Review Your Information</h3>
    <div className="bg-medium-gray rounded-lg p-4 space-y-3">
      <div>
        <span className="text-shiny-gray">Full Name:</span>
        <span className="text-white ml-2">{formData.fullName || 'Not provided'}</span>
      </div>
      <div>
        <span className="text-shiny-gray">Email:</span>
        <span className="text-white ml-2">{formData.email || 'Not provided'}</span>
      </div>
      <div>
        <span className="text-shiny-gray">Theme:</span>
        <span className="text-white ml-2">{formData.theme || 'Not selected'}</span>
      </div>
      <div>
        <span className="text-shiny-gray">Email Notifications:</span>
        <span className="text-white ml-2">{formData.emailNotifications ? 'Enabled' : 'Disabled'}</span>
      </div>
      <div>
        <span className="text-shiny-gray">Push Notifications:</span>
        <span className="text-white ml-2">{formData.pushNotifications ? 'Enabled' : 'Disabled'}</span>
      </div>
    </div>
  </div>
);