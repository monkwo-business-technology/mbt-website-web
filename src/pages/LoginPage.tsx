import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';

const loginSchema = z.object({
  email: z.string().min(1, 'Enter an email').email('Enter a valid email address'),
  password: z.string().min(1, 'Enter a password').min(6, 'Password must be at least 6 characters'),
});

type LoginFormData = z.infer<typeof loginSchema>;

const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState<'email' | 'password'>('email');
  const [userEmail, setUserEmail] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    trigger,
    getValues,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleEmailNext = async () => {
    const isValid = await trigger('email');
    if (isValid) {
      setUserEmail(getValues('email'));
      setStep('password');
    }
  };

  const onSubmit = async (data: LoginFormData) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success('Sign in successful');
      console.log('Login data:', data);
    } catch {
      toast.error('Sign in failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#202124] flex items-center justify-center px-4 py-12">
      {/* Google-style Card */}
      <div className="w-full max-w-[450px] border border-[#dadce0] dark:border-[#3c4043] rounded-lg p-10 md:p-12">
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
          className="text-2xl text-[#202124] dark:text-white text-center mb-2"
          style={{ fontFamily: "'Google Sans', Arial, sans-serif", fontWeight: 400 }}
        >
          Sign in
        </h1>

        {step === 'email' ? (
          <p className="text-base text-[#202124] dark:text-[#e3e3e3] text-center mb-8" style={{ fontFamily: "'Roboto', Arial, sans-serif" }}>
            Use your Monkwo Account
          </p>
        ) : (
          <div className="flex items-center justify-center gap-2 mb-8">
            <button
              onClick={() => setStep('email')}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#dadce0] dark:border-[#5f6368] hover:bg-[#f8f9fa] dark:hover:bg-[#3c4043] transition-colors"
            >
              <div className="w-6 h-6 bg-[#1a73e8] rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-medium">
                  {userEmail.charAt(0).toUpperCase()}
                </span>
              </div>
              <span className="text-sm text-[#202124] dark:text-[#e3e3e3]" style={{ fontFamily: "'Roboto', Arial, sans-serif" }}>
                {userEmail}
              </span>
              <span className="material-symbols-outlined text-[18px] text-[#5f6368]">keyboard_arrow_down</span>
            </button>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {step === 'email' ? (
            /* Email Step */
            <div className="space-y-6">
              {/* Email Input - Google Filled Style */}
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder=" "
                  className={`peer w-full px-4 pt-5 pb-2 rounded border bg-transparent text-[#202124] dark:text-white text-base outline-none transition-all
                    ${errors.email
                      ? 'border-[#d93025] focus:border-[#d93025]'
                      : 'border-[#dadce0] dark:border-[#5f6368] focus:border-[#1a73e8] dark:focus:border-[#8ab4f8]'
                    }
                    focus:border-2 focus:-m-[1px]`}
                  style={{ fontFamily: "'Roboto', Arial, sans-serif" }}
                  {...register('email')}
                />
                <label
                  htmlFor="email"
                  className={`absolute left-4 top-1/2 -translate-y-1/2 text-base transition-all pointer-events-none
                    peer-focus:top-2 peer-focus:text-xs peer-focus:-translate-y-0
                    peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-0
                    ${errors.email
                      ? 'text-[#d93025] peer-focus:text-[#d93025]'
                      : 'text-[#5f6368] peer-focus:text-[#1a73e8] dark:peer-focus:text-[#8ab4f8]'
                    }`}
                  style={{ fontFamily: "'Roboto', Arial, sans-serif" }}
                >
                  Email or phone
                </label>
              </div>
              {errors.email && (
                <div className="flex items-center gap-2 -mt-4">
                  <span className="material-symbols-outlined text-[18px] text-[#d93025]">error</span>
                  <p className="text-[#d93025] text-xs" style={{ fontFamily: "'Roboto', Arial, sans-serif" }}>
                    {errors.email.message}
                  </p>
                </div>
              )}

              {/* Forgot email & password links */}
              <div className="flex items-center gap-4">
                <Link
                  to="/forgot-email"
                  className="text-sm font-medium text-[#1a73e8] dark:text-[#8ab4f8] hover:bg-[#e8f0fe] dark:hover:bg-[#1a73e8]/12 px-2 py-1 -ml-2 rounded transition-colors"
                  style={{ fontFamily: "'Google Sans', Arial, sans-serif" }}
                >
                  Forgot email?
                </Link>
                <Link
                  to="/forgot-password"
                  className="text-sm font-medium text-[#1a73e8] dark:text-[#8ab4f8] hover:bg-[#e8f0fe] dark:hover:bg-[#1a73e8]/12 px-2 py-1 rounded transition-colors"
                  style={{ fontFamily: "'Google Sans', Arial, sans-serif" }}
                >
                  Forgot password?
                </Link>
              </div>

              {/* Guest mode info */}
              <p className="text-sm text-[#5f6368] dark:text-[#9aa0a6] leading-relaxed" style={{ fontFamily: "'Roboto', Arial, sans-serif" }}>
                Not your computer? Use Guest mode to sign in privately.{' '}
                <a href="#" className="text-[#1a73e8] dark:text-[#8ab4f8] hover:underline">Learn more about using Guest mode</a>
              </p>

              {/* Buttons */}
              <div className="flex items-center justify-between pt-6">
                <Link
                  to="/signup"
                  className="text-sm font-medium text-[#1a73e8] dark:text-[#8ab4f8] hover:bg-[#e8f0fe] dark:hover:bg-[#1a73e8]/12 px-4 py-2.5 rounded transition-colors"
                  style={{ fontFamily: "'Google Sans', Arial, sans-serif" }}
                >
                  Create account
                </Link>
                <button
                  type="button"
                  onClick={handleEmailNext}
                  className="px-6 py-2.5 bg-[#1a73e8] text-white text-sm font-medium rounded hover:bg-[#1557b0] hover:shadow-md active:bg-[#174ea6] transition-all"
                  style={{ fontFamily: "'Google Sans', Arial, sans-serif" }}
                >
                  Next
                </button>
              </div>
            </div>
          ) : (
            /* Password Step */
            <div className="space-y-6">
              <p className="text-sm text-[#5f6368] dark:text-[#9aa0a6] mb-6" style={{ fontFamily: "'Roboto', Arial, sans-serif" }}>
                To continue, first verify it's you
              </p>

              {/* Password Input - Google Filled Style */}
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  placeholder=" "
                  className={`peer w-full px-4 pt-5 pb-2 rounded border bg-transparent text-[#202124] dark:text-white text-base outline-none transition-all
                    ${errors.password
                      ? 'border-[#d93025] focus:border-[#d93025]'
                      : 'border-[#dadce0] dark:border-[#5f6368] focus:border-[#1a73e8] dark:focus:border-[#8ab4f8]'
                    }
                    focus:border-2 focus:-m-[1px]`}
                  style={{ fontFamily: "'Roboto', Arial, sans-serif" }}
                  {...register('password')}
                />
                <label
                  htmlFor="password"
                  className={`absolute left-4 top-1/2 -translate-y-1/2 text-base transition-all pointer-events-none
                    peer-focus:top-2 peer-focus:text-xs peer-focus:-translate-y-0
                    peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-0
                    ${errors.password
                      ? 'text-[#d93025] peer-focus:text-[#d93025]'
                      : 'text-[#5f6368] peer-focus:text-[#1a73e8] dark:peer-focus:text-[#8ab4f8]'
                    }`}
                  style={{ fontFamily: "'Roboto', Arial, sans-serif" }}
                >
                  Enter your password
                </label>
              </div>
              {errors.password && (
                <div className="flex items-center gap-2 -mt-4">
                  <span className="material-symbols-outlined text-[18px] text-[#d93025]">error</span>
                  <p className="text-[#d93025] text-xs" style={{ fontFamily: "'Roboto', Arial, sans-serif" }}>
                    {errors.password.message}
                  </p>
                </div>
              )}

              {/* Show password checkbox */}
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={showPassword}
                  onChange={(e) => setShowPassword(e.target.checked)}
                  className="w-[18px] h-[18px] rounded border-[#5f6368] accent-[#1a73e8] cursor-pointer"
                />
                <span className="text-sm text-[#202124] dark:text-[#e3e3e3]" style={{ fontFamily: "'Roboto', Arial, sans-serif" }}>
                  Show password
                </span>
              </label>

              {/* Buttons */}
              <div className="flex items-center justify-between pt-6">
                <Link
                  to="/forgot-password"
                  className="text-sm font-medium text-[#1a73e8] dark:text-[#8ab4f8] hover:bg-[#e8f0fe] dark:hover:bg-[#1a73e8]/12 px-4 py-2.5 rounded transition-colors"
                  style={{ fontFamily: "'Google Sans', Arial, sans-serif" }}
                >
                  Forgot password?
                </Link>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 bg-[#1a73e8] text-white text-sm font-medium rounded hover:bg-[#1557b0] hover:shadow-md active:bg-[#174ea6] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ fontFamily: "'Google Sans', Arial, sans-serif" }}
                >
                  {isSubmitting ? 'Signing in...' : 'Sign in'}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 right-0 border-t border-[#dadce0] dark:border-[#3c4043] bg-white dark:bg-[#202124]">
        <div className="max-w-[450px] mx-auto px-4 py-3 flex items-center justify-between">
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

export default LoginPage;
