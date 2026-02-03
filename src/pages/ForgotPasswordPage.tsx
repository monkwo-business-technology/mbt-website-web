import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';

const forgotPasswordSchema = z.object({
  email: z.string().min(1, 'Enter an email').email('Enter a valid email address'),
});

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

const ForgotPasswordPage: React.FC = () => {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (data: ForgotPasswordFormData) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Forgot password data:', data);
      setSubmittedEmail(data.email);
      setIsSubmitted(true);
      toast.success('Recovery email sent');
    } catch {
      toast.error('Something went wrong. Please try again.');
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

        {!isSubmitted ? (
          <>
            {/* Title */}
            <h1
              className="text-2xl text-[#202124] dark:text-white text-center mb-2"
              style={{ fontFamily: "'Google Sans', Arial, sans-serif", fontWeight: 400 }}
            >
              Account recovery
            </h1>

            <p className="text-sm text-[#5f6368] dark:text-[#9aa0a6] text-center mb-8" style={{ fontFamily: "'Roboto', Arial, sans-serif" }}>
              Enter your email to recover your account
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Email Input */}
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
                  Email
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

              {/* Info text */}
              <p className="text-sm text-[#5f6368] dark:text-[#9aa0a6]" style={{ fontFamily: "'Roboto', Arial, sans-serif" }}>
                We'll send you a verification code to reset your password.
              </p>

              {/* Buttons */}
              <div className="flex items-center justify-between pt-4">
                <Link
                  to="/login"
                  className="text-sm font-medium text-[#1a73e8] dark:text-[#8ab4f8] hover:bg-[#e8f0fe] dark:hover:bg-[#1a73e8]/12 px-4 py-2.5 rounded transition-colors"
                  style={{ fontFamily: "'Google Sans', Arial, sans-serif" }}
                >
                  Back to sign in
                </Link>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 bg-[#1a73e8] text-white text-sm font-medium rounded hover:bg-[#1557b0] hover:shadow-md active:bg-[#174ea6] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ fontFamily: "'Google Sans', Arial, sans-serif" }}
                >
                  {isSubmitting ? 'Sending...' : 'Send code'}
                </button>
              </div>
            </form>
          </>
        ) : (
          /* Success State */
          <div className="text-center space-y-6">
            <div className="w-16 h-16 mx-auto bg-[#e8f0fe] dark:bg-[#1a73e8]/20 rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-[32px] text-[#1a73e8] dark:text-[#8ab4f8]">mail</span>
            </div>
            <div>
              <h2 className="text-lg font-medium text-[#202124] dark:text-white mb-2" style={{ fontFamily: "'Google Sans', Arial, sans-serif" }}>
                Check your email
              </h2>
              <p className="text-sm text-[#5f6368] dark:text-[#9aa0a6] mb-4" style={{ fontFamily: "'Roboto', Arial, sans-serif" }}>
                We sent a verification code to
              </p>
              <p className="text-sm font-medium text-[#202124] dark:text-white" style={{ fontFamily: "'Roboto', Arial, sans-serif" }}>
                {submittedEmail}
              </p>
            </div>
            <button
              onClick={() => navigate('/verify-otp', { state: { email: submittedEmail, type: 'password-reset' } })}
              className="w-full px-6 py-2.5 bg-[#1a73e8] text-white text-sm font-medium rounded hover:bg-[#1557b0] hover:shadow-md transition-all"
              style={{ fontFamily: "'Google Sans', Arial, sans-serif" }}
            >
              Enter code
            </button>
            <button
              onClick={() => setIsSubmitted(false)}
              className="text-sm font-medium text-[#1a73e8] dark:text-[#8ab4f8] hover:bg-[#e8f0fe] dark:hover:bg-[#1a73e8]/12 px-4 py-2 rounded transition-colors"
              style={{ fontFamily: "'Google Sans', Arial, sans-serif" }}
            >
              Try another email
            </button>
          </div>
        )}
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

export default ForgotPasswordPage;
