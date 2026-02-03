import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';

/* ─── Validation Schemas ─── */
const step1Schema = z.object({
  firstName: z.string().min(1, 'Enter your first name'),
  lastName: z.string().min(1, 'Enter your last name'),
});

const step2Schema = z.object({
  email: z.string().min(1, 'Enter an email').email('Enter a valid email address'),
  phone: z.string().optional(),
});

const step3Schema = z.object({
  password: z.string().min(8, 'Use 8 characters or more for your password'),
  confirmPassword: z.string().min(1, 'Confirm your password'),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Those passwords didn't match. Try again.",
  path: ['confirmPassword'],
});

const step4Schema = z.object({
  company: z.string().optional(),
  jobTitle: z.string().optional(),
  industry: z.string().optional(),
});

type Step1Data = z.infer<typeof step1Schema>;
type Step2Data = z.infer<typeof step2Schema>;
type Step3Data = z.infer<typeof step3Schema>;
type Step4Data = z.infer<typeof step4Schema>;

type AllFormData = Step1Data & Step2Data & Step3Data & Step4Data;

const STEPS = [
  { title: 'Your name', subtitle: "Enter your name as you'd like it to appear" },
  { title: 'Contact info', subtitle: 'How you\'ll sign in to your account' },
  { title: 'Create password', subtitle: 'Create a strong password with a mix of letters, numbers, and symbols' },
  { title: 'About you', subtitle: 'Help us personalize your experience (optional)' },
];

const industries = [
  'Technology',
  'Finance & Banking',
  'Healthcare',
  'Retail & E-commerce',
  'Manufacturing',
  'Education',
  'Government',
  'Telecommunications',
  'Other',
];

const SignupPage: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Partial<AllFormData>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  /* ─── Step 1 Form ─── */
  const step1Form = useForm<Step1Data>({
    resolver: zodResolver(step1Schema),
    defaultValues: { firstName: formData.firstName || '', lastName: formData.lastName || '' },
  });

  /* ─── Step 2 Form ─── */
  const step2Form = useForm<Step2Data>({
    resolver: zodResolver(step2Schema),
    defaultValues: { email: formData.email || '', phone: formData.phone || '' },
  });

  /* ─── Step 3 Form ─── */
  const step3Form = useForm<Step3Data>({
    resolver: zodResolver(step3Schema),
    defaultValues: { password: '', confirmPassword: '' },
  });

  /* ─── Step 4 Form ─── */
  const step4Form = useForm<Step4Data>({
    resolver: zodResolver(step4Schema),
    defaultValues: { company: formData.company || '', jobTitle: formData.jobTitle || '', industry: formData.industry || '' },
  });

  const handleNext = async () => {
    let isValid = false;
    let data: Partial<AllFormData> = {};

    switch (currentStep) {
      case 0:
        isValid = await step1Form.trigger();
        if (isValid) data = step1Form.getValues();
        break;
      case 1:
        isValid = await step2Form.trigger();
        if (isValid) data = step2Form.getValues();
        break;
      case 2:
        isValid = await step3Form.trigger();
        if (isValid) data = step3Form.getValues();
        break;
      case 3:
        isValid = await step4Form.trigger();
        if (isValid) data = step4Form.getValues();
        break;
    }

    if (isValid) {
      setFormData((prev) => ({ ...prev, ...data }));
      if (currentStep < STEPS.length - 1) {
        setCurrentStep((prev) => prev + 1);
      } else {
        handleSubmit();
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async () => {
    try {
      const finalData = {
        ...formData,
        ...step4Form.getValues(),
      };
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Signup data:', finalData);
      toast.success('Account created! Please verify your email.');
      navigate('/verify-otp', { state: { email: formData.email, type: 'signup' } });
    } catch {
      toast.error('Something went wrong. Please try again.');
    }
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center gap-2 mb-8">
      {STEPS.map((_, index) => (
        <div
          key={index}
          className={`h-2 rounded-full transition-all duration-300 ${
            index === currentStep
              ? 'w-8 bg-[#1a73e8]'
              : index < currentStep
              ? 'w-2 bg-[#1a73e8]'
              : 'w-2 bg-[#dadce0] dark:bg-[#5f6368]'
          }`}
        />
      ))}
    </div>
  );

  const renderFloatingInput = (
    id: string,
    label: string,
    type: string,
    register: any,
    error: any,
    autoComplete?: string,
    showToggle?: boolean,
    isVisible?: boolean,
    onToggle?: () => void
  ) => (
    <div className="relative">
      <input
        id={id}
        type={showToggle ? (isVisible ? 'text' : 'password') : type}
        autoComplete={autoComplete}
        placeholder=" "
        className={`peer w-full px-4 pt-5 pb-2 ${showToggle ? 'pr-12' : ''} rounded border bg-transparent text-[#202124] dark:text-white text-base outline-none transition-all
          ${error
            ? 'border-[#d93025] focus:border-[#d93025]'
            : 'border-[#dadce0] dark:border-[#5f6368] focus:border-[#1a73e8] dark:focus:border-[#8ab4f8]'
          }
          focus:border-2 focus:-m-[1px]`}
        style={{ fontFamily: "'Roboto', Arial, sans-serif" }}
        {...register}
      />
      <label
        htmlFor={id}
        className={`absolute left-4 top-1/2 -translate-y-1/2 text-base transition-all pointer-events-none
          peer-focus:top-2 peer-focus:text-xs peer-focus:-translate-y-0
          peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-0
          ${error
            ? 'text-[#d93025] peer-focus:text-[#d93025]'
            : 'text-[#5f6368] peer-focus:text-[#1a73e8] dark:peer-focus:text-[#8ab4f8]'
          }`}
        style={{ fontFamily: "'Roboto', Arial, sans-serif" }}
      >
        {label}
      </label>
      {showToggle && (
        <button
          type="button"
          onClick={onToggle}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-[#5f6368] hover:text-[#202124] dark:hover:text-white transition-colors"
          tabIndex={-1}
        >
          <span className="material-symbols-outlined text-[20px]">
            {isVisible ? 'visibility_off' : 'visibility'}
          </span>
        </button>
      )}
    </div>
  );

  const renderError = (error: any) =>
    error && (
      <div className="flex items-center gap-2 mt-1">
        <span className="material-symbols-outlined text-[18px] text-[#d93025]">error</span>
        <p className="text-[#d93025] text-xs" style={{ fontFamily: "'Roboto', Arial, sans-serif" }}>
          {error.message}
        </p>
      </div>
    );

  return (
    <div className="min-h-screen bg-white dark:bg-[#202124] flex items-center justify-center px-4 py-12">
      {/* Google-style Card */}
      <div className="w-full max-w-[500px] border border-[#dadce0] dark:border-[#3c4043] rounded-lg p-10 md:p-12">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#1a73e8] rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
          </Link>
        </div>

        {/* Title */}
        <h1
          className="text-2xl text-[#202124] dark:text-white text-center mb-1"
          style={{ fontFamily: "'Google Sans', Arial, sans-serif", fontWeight: 400 }}
        >
          Create your Monkwo Account
        </h1>

        <p className="text-sm text-[#5f6368] dark:text-[#9aa0a6] text-center mb-6" style={{ fontFamily: "'Roboto', Arial, sans-serif" }}>
          {STEPS[currentStep].subtitle}
        </p>

        {/* Step Indicator */}
        {renderStepIndicator()}

        {/* Step Content */}
        <div className="space-y-5">
          {/* Step 1: Name */}
          {currentStep === 0 && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  {renderFloatingInput('firstName', 'First name', 'text', step1Form.register('firstName'), step1Form.formState.errors.firstName, 'given-name')}
                  {renderError(step1Form.formState.errors.firstName)}
                </div>
                <div>
                  {renderFloatingInput('lastName', 'Last name', 'text', step1Form.register('lastName'), step1Form.formState.errors.lastName, 'family-name')}
                  {renderError(step1Form.formState.errors.lastName)}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Contact */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <div>
                {renderFloatingInput('email', 'Email address', 'email', step2Form.register('email'), step2Form.formState.errors.email, 'email')}
                {renderError(step2Form.formState.errors.email)}
                <p className="text-xs text-[#5f6368] dark:text-[#9aa0a6] mt-2" style={{ fontFamily: "'Roboto', Arial, sans-serif" }}>
                  You'll use this email to sign in to your account
                </p>
              </div>
              <div>
                {renderFloatingInput('phone', 'Phone number (optional)', 'tel', step2Form.register('phone'), null, 'tel')}
                <p className="text-xs text-[#5f6368] dark:text-[#9aa0a6] mt-2" style={{ fontFamily: "'Roboto', Arial, sans-serif" }}>
                  For account recovery and security notifications
                </p>
              </div>
            </div>
          )}

          {/* Step 3: Password */}
          {currentStep === 2 && (
            <div className="space-y-4">
              <div>
                {renderFloatingInput('password', 'Password', 'password', step3Form.register('password'), step3Form.formState.errors.password, 'new-password', true, showPassword, () => setShowPassword(!showPassword))}
                {renderError(step3Form.formState.errors.password)}
              </div>
              <div>
                {renderFloatingInput('confirmPassword', 'Confirm password', 'password', step3Form.register('confirmPassword'), step3Form.formState.errors.confirmPassword, 'new-password', true, showConfirmPassword, () => setShowConfirmPassword(!showConfirmPassword))}
                {renderError(step3Form.formState.errors.confirmPassword)}
              </div>
              <div className="bg-[#f8f9fa] dark:bg-[#28292a] rounded-lg p-4 mt-4">
                <p className="text-xs font-medium text-[#202124] dark:text-white mb-2" style={{ fontFamily: "'Google Sans', Arial, sans-serif" }}>
                  Password strength tips:
                </p>
                <ul className="text-xs text-[#5f6368] dark:text-[#9aa0a6] space-y-1" style={{ fontFamily: "'Roboto', Arial, sans-serif" }}>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[14px]">check_circle</span>
                    Use at least 8 characters
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[14px]">check_circle</span>
                    Mix letters, numbers, and symbols
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[14px]">check_circle</span>
                    Don't use personal information
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* Step 4: About */}
          {currentStep === 3 && (
            <div className="space-y-4">
              <div>
                {renderFloatingInput('company', 'Company name', 'text', step4Form.register('company'), null, 'organization')}
              </div>
              <div>
                {renderFloatingInput('jobTitle', 'Job title', 'text', step4Form.register('jobTitle'), null, 'organization-title')}
              </div>
              <div className="relative">
                <select
                  id="industry"
                  className="w-full px-4 py-3.5 rounded border border-[#dadce0] dark:border-[#5f6368] bg-transparent text-[#202124] dark:text-white text-base outline-none transition-all focus:border-[#1a73e8] dark:focus:border-[#8ab4f8] focus:border-2 focus:-m-[1px] appearance-none cursor-pointer"
                  style={{ fontFamily: "'Roboto', Arial, sans-serif" }}
                  {...step4Form.register('industry')}
                >
                  <option value="" className="text-[#5f6368]">Select industry</option>
                  {industries.map((ind) => (
                    <option key={ind} value={ind}>{ind}</option>
                  ))}
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[#5f6368] pointer-events-none">
                  keyboard_arrow_down
                </span>
              </div>
              <p className="text-xs text-[#5f6368] dark:text-[#9aa0a6]" style={{ fontFamily: "'Roboto', Arial, sans-serif" }}>
                This information helps us provide relevant content and recommendations. You can skip this step.
              </p>
            </div>
          )}
        </div>

        {/* Terms */}
        {currentStep === STEPS.length - 1 && (
          <p className="text-xs text-[#5f6368] dark:text-[#9aa0a6] mt-6" style={{ fontFamily: "'Roboto', Arial, sans-serif" }}>
            By clicking Create account, you agree to our{' '}
            <a href="#" className="text-[#1a73e8] dark:text-[#8ab4f8] hover:underline">Terms of Service</a>
            {' '}and{' '}
            <a href="#" className="text-[#1a73e8] dark:text-[#8ab4f8] hover:underline">Privacy Policy</a>.
          </p>
        )}

        {/* Buttons */}
        <div className="flex items-center justify-between mt-8">
          {currentStep === 0 ? (
            <Link
              to="/login"
              className="text-sm font-medium text-[#1a73e8] dark:text-[#8ab4f8] hover:bg-[#e8f0fe] dark:hover:bg-[#1a73e8]/12 px-4 py-2.5 rounded transition-colors"
              style={{ fontFamily: "'Google Sans', Arial, sans-serif" }}
            >
              Sign in instead
            </Link>
          ) : (
            <button
              type="button"
              onClick={handleBack}
              className="text-sm font-medium text-[#1a73e8] dark:text-[#8ab4f8] hover:bg-[#e8f0fe] dark:hover:bg-[#1a73e8]/12 px-4 py-2.5 rounded transition-colors"
              style={{ fontFamily: "'Google Sans', Arial, sans-serif" }}
            >
              Back
            </button>
          )}
          <button
            type="button"
            onClick={handleNext}
            className="px-6 py-2.5 bg-[#1a73e8] text-white text-sm font-medium rounded hover:bg-[#1557b0] hover:shadow-md active:bg-[#174ea6] transition-all"
            style={{ fontFamily: "'Google Sans', Arial, sans-serif" }}
          >
            {currentStep === STEPS.length - 1 ? 'Create account' : 'Next'}
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 right-0 border-t border-[#dadce0] dark:border-[#3c4043] bg-white dark:bg-[#202124]">
        <div className="max-w-[500px] mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <button className="text-xs text-[#5f6368] dark:text-[#9aa0a6] hover:text-[#202124] dark:hover:text-white px-2 py-1 rounded transition-colors flex items-center gap-1" style={{ fontFamily: "'Roboto', Arial, sans-serif" }}>
              English (United States)
              <span className="material-symbols-outlined text-[16px]">keyboard_arrow_down</span>
            </button>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-[#5f6368] dark:text-[#9aa0a6] hover:text-[#202124] dark:hover:text-white transition-colors" style={{ fontFamily: "'Roboto', Arial, sans-serif" }}>
              Help
            </a>
            <a href="#" className="text-xs text-[#5f6368] dark:text-[#9aa0a6] hover:text-[#202124] dark:hover:text-white transition-colors" style={{ fontFamily: "'Roboto', Arial, sans-serif" }}>
              Privacy
            </a>
            <a href="#" className="text-xs text-[#5f6368] dark:text-[#9aa0a6] hover:text-[#202124] dark:hover:text-white transition-colors" style={{ fontFamily: "'Roboto', Arial, sans-serif" }}>
              Terms
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
