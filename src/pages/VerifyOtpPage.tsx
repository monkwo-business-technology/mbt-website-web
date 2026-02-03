import React, { useState, useRef, useEffect, KeyboardEvent, ClipboardEvent } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const OTP_LENGTH = 6;

const VerifyOtpPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { email, type } = (location.state as { email?: string; type?: string }) || {};

  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(''));
  const [isVerifying, setIsVerifying] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(0);
  const [error, setError] = useState('');

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Focus first input on mount
  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  // Resend cooldown timer
  useEffect(() => {
    if (resendCooldown > 0) {
      const timer = setTimeout(() => setResendCooldown(resendCooldown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendCooldown]);

  const handleChange = (index: number, value: string) => {
    // Only allow single digit
    const digit = value.replace(/\D/g, '').slice(-1);

    const newOtp = [...otp];
    newOtp[index] = digit;
    setOtp(newOtp);
    setError('');

    // Auto-focus next input
    if (digit && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    // Auto-submit when all digits are filled
    if (digit && index === OTP_LENGTH - 1) {
      const fullOtp = newOtp.join('');
      if (fullOtp.length === OTP_LENGTH) {
        handleVerify(fullOtp);
      }
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace') {
      if (!otp[index] && index > 0) {
        // Move to previous input if current is empty
        inputRefs.current[index - 1]?.focus();
        const newOtp = [...otp];
        newOtp[index - 1] = '';
        setOtp(newOtp);
      } else {
        // Clear current input
        const newOtp = [...otp];
        newOtp[index] = '';
        setOtp(newOtp);
      }
      setError('');
    } else if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === 'ArrowRight' && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, OTP_LENGTH);

    if (pastedData) {
      const newOtp = [...otp];
      for (let i = 0; i < pastedData.length; i++) {
        newOtp[i] = pastedData[i];
      }
      setOtp(newOtp);
      setError('');

      // Focus appropriate input
      const focusIndex = Math.min(pastedData.length, OTP_LENGTH - 1);
      inputRefs.current[focusIndex]?.focus();

      // Auto-submit if complete
      if (pastedData.length === OTP_LENGTH) {
        handleVerify(pastedData);
      }
    }
  };

  const handleVerify = async (code?: string) => {
    const otpCode = code || otp.join('');

    if (otpCode.length !== OTP_LENGTH) {
      setError('Please enter all 6 digits');
      return;
    }

    setIsVerifying(true);
    setError('');

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Simulate verification (accept any 6-digit code for demo)
      if (otpCode === '000000') {
        setError('Invalid verification code. Please try again.');
        setIsVerifying(false);
        return;
      }

      toast.success('Verification successful!');

      // Navigate based on type
      if (type === 'signup') {
        navigate('/login', { state: { verified: true } });
      } else if (type === 'password-reset') {
        navigate('/reset-password', { state: { email, verified: true } });
      } else {
        navigate('/login');
      }
    } catch {
      setError('Verification failed. Please try again.');
    } finally {
      setIsVerifying(false);
    }
  };

  const handleResend = async () => {
    if (resendCooldown > 0) return;

    setIsResending(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success('A new code has been sent to your email');
      setResendCooldown(60);
      setOtp(Array(OTP_LENGTH).fill(''));
      setError('');
      inputRefs.current[0]?.focus();
    } catch {
      toast.error('Failed to resend code. Please try again.');
    } finally {
      setIsResending(false);
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

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-[#e8f0fe] dark:bg-[#1a73e8]/20 rounded-full flex items-center justify-center">
            <span className="material-symbols-outlined text-[32px] text-[#1a73e8] dark:text-[#8ab4f8]">
              verified_user
            </span>
          </div>
        </div>

        {/* Title */}
        <h1
          className="text-2xl text-[#202124] dark:text-white text-center mb-2"
          style={{ fontFamily: "'Google Sans', Arial, sans-serif", fontWeight: 400 }}
        >
          Verify it's you
        </h1>

        <p className="text-sm text-[#5f6368] dark:text-[#9aa0a6] text-center mb-2" style={{ fontFamily: "'Roboto', Arial, sans-serif" }}>
          We sent a verification code to
        </p>

        {email && (
          <p className="text-sm font-medium text-[#202124] dark:text-white text-center mb-8" style={{ fontFamily: "'Roboto', Arial, sans-serif" }}>
            {email}
          </p>
        )}

        {/* OTP Input */}
        <div className="mb-6">
          <label className="block text-sm text-[#5f6368] dark:text-[#9aa0a6] mb-4 text-center" style={{ fontFamily: "'Roboto', Arial, sans-serif" }}>
            Enter the 6-digit code
          </label>

          <div className="flex justify-center gap-2 sm:gap-3">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                className={`w-11 h-14 sm:w-12 sm:h-16 text-center text-xl sm:text-2xl font-medium rounded-lg border-2 bg-transparent text-[#202124] dark:text-white outline-none transition-all
                  ${error
                    ? 'border-[#d93025] focus:border-[#d93025]'
                    : digit
                    ? 'border-[#1a73e8] dark:border-[#8ab4f8]'
                    : 'border-[#dadce0] dark:border-[#5f6368] focus:border-[#1a73e8] dark:focus:border-[#8ab4f8]'
                  }
                  focus:ring-2 focus:ring-[#1a73e8]/20 dark:focus:ring-[#8ab4f8]/20`}
                style={{ fontFamily: "'Google Sans', Arial, sans-serif" }}
                disabled={isVerifying}
              />
            ))}
          </div>

          {/* Error Message */}
          {error && (
            <div className="flex items-center justify-center gap-2 mt-4">
              <span className="material-symbols-outlined text-[18px] text-[#d93025]">error</span>
              <p className="text-[#d93025] text-sm" style={{ fontFamily: "'Roboto', Arial, sans-serif" }}>
                {error}
              </p>
            </div>
          )}
        </div>

        {/* Resend Code */}
        <div className="text-center mb-8">
          <p className="text-sm text-[#5f6368] dark:text-[#9aa0a6] mb-2" style={{ fontFamily: "'Roboto', Arial, sans-serif" }}>
            Didn't receive a code?
          </p>
          <button
            type="button"
            onClick={handleResend}
            disabled={resendCooldown > 0 || isResending}
            className="text-sm font-medium text-[#1a73e8] dark:text-[#8ab4f8] hover:bg-[#e8f0fe] dark:hover:bg-[#1a73e8]/12 px-4 py-2 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ fontFamily: "'Google Sans', Arial, sans-serif" }}
          >
            {isResending
              ? 'Sending...'
              : resendCooldown > 0
              ? `Resend code in ${resendCooldown}s`
              : 'Resend code'}
          </button>
        </div>

        {/* Verify Button */}
        <button
          type="button"
          onClick={() => handleVerify()}
          disabled={isVerifying || otp.join('').length !== OTP_LENGTH}
          className="w-full px-6 py-2.5 bg-[#1a73e8] text-white text-sm font-medium rounded hover:bg-[#1557b0] hover:shadow-md active:bg-[#174ea6] transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          style={{ fontFamily: "'Google Sans', Arial, sans-serif" }}
        >
          {isVerifying ? (
            <>
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Verifying...
            </>
          ) : (
            'Verify'
          )}
        </button>

        {/* Back link */}
        <div className="text-center mt-6">
          <Link
            to="/login"
            className="text-sm font-medium text-[#1a73e8] dark:text-[#8ab4f8] hover:bg-[#e8f0fe] dark:hover:bg-[#1a73e8]/12 px-4 py-2 rounded transition-colors inline-flex items-center gap-1"
            style={{ fontFamily: "'Google Sans', Arial, sans-serif" }}
          >
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            Back to sign in
          </Link>
        </div>
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

export default VerifyOtpPage;
