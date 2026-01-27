import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Eye, EyeOff, ArrowRight, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';

const loginSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Please enter a valid email address'),
  password: z.string().min(1, 'Password is required').min(6, 'Password must be at least 6 characters'),
  rememberMe: z.boolean().optional(),
});

type LoginFormData = z.infer<typeof loginSchema>;

const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success('Login successful');
      console.log('Login data:', data);
    } catch {
      toast.error('Login failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-12">
      {/* Back to home */}
      <div className="w-full max-w-md mb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>
      </div>

      {/* Card */}
      <div className="w-full max-w-md bg-card border border-border rounded-2xl shadow-lg p-8">
        {/* Branding */}
        <div className="flex flex-col items-center mb-8">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-xl">M</span>
            </div>
            <span className="text-xl font-bold text-foreground tracking-tight">Monkwo</span>
          </Link>
          <h1 className="text-2xl font-bold text-foreground">Welcome back</h1>
          <p className="text-muted-foreground text-sm mt-1">Sign in to your account</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
              Email address
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              className={`w-full px-4 py-2.5 rounded-xl border bg-background text-foreground placeholder:text-muted-foreground text-sm outline-none transition-colors focus:ring-2 focus:ring-accent/50 focus:border-accent ${
                errors.email ? 'border-red-500 focus:ring-red-500/50 focus:border-red-500' : 'border-border'
              }`}
              {...register('email')}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-foreground mb-1.5">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                placeholder="Enter your password"
                className={`w-full px-4 py-2.5 pr-11 rounded-xl border bg-background text-foreground placeholder:text-muted-foreground text-sm outline-none transition-colors focus:ring-2 focus:ring-accent/50 focus:border-accent ${
                  errors.password ? 'border-red-500 focus:ring-red-500/50 focus:border-red-500' : 'border-border'
                }`}
                {...register('password')}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                tabIndex={-1}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Remember me + Forgot password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-border accent-accent"
                {...register('rememberMe')}
              />
              <span className="text-sm text-muted-foreground">Remember me</span>
            </label>
            <Link
              to="/forgot-password"
              className="text-sm text-accent hover:text-accent/80 transition-colors font-medium"
            >
              Forgot password?
            </Link>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-accent text-accent-foreground py-2.5 rounded-xl font-medium text-sm hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? 'Signing in...' : 'Sign In'}
            {!isSubmitting && <ArrowRight className="w-4 h-4" />}
          </button>
        </form>

        {/* Contact sales */}
        <p className="text-center text-sm text-muted-foreground mt-6">
          Don&apos;t have an account?{' '}
          <Link
            to="/contact"
            className="text-accent hover:text-accent/80 transition-colors font-medium"
          >
            Contact Sales
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
