import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';
import { useForm } from 'react-hook-form';
import { Eye, EyeOff, CheckCircle2, ShieldCheck, ArrowRight, Check } from 'lucide-react';
import CountrySelect from '../components/CountrySelect';
import PhoneCountrySelect from '../components/PhoneCountrySelect';

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: {
      clientType: 'Individual Client',
      firstName: '',
      lastName: '',
      birthYear: '',
      birthMonth: '',
      birthDay: '',
      country: '',
      countryCode: '+91',
      phone: '',
      email: '',
      password: '',
      repeatPassword: '',
      agreedLegal: true,
      agreedMarketing: false
    }
  });

  // Register custom fields for validation
  useEffect(() => {
    register('country', { required: 'Country of Residence is required' });
    register('countryCode', { required: 'Country code is required' });
  }, [register]);

  const countryValue = watch('country', '');
  const countryCodeValue = watch('countryCode', '+91');
  const passwordValue = watch('password', '');

  // Password requirement checks for visual feedback
  const hasMinLength = passwordValue.length >= 8;
  const hasLowerCase = /[a-z]/.test(passwordValue);
  const hasUpperCase = /[A-Z]/.test(passwordValue);
  const hasDigit = /[0-9]/.test(passwordValue);

  const navigate = useNavigate();
  const { signup, user } = useAuthStore();
  const [serverError, setServerError] = useState('');

  const onSubmit = async (data) => {
    setServerError('');
    const success = await signup(data);
    if (success) {
      setRegistrationSuccess(true);
      const currentUser = useAuthStore.getState().user;
      setTimeout(() => {
        if (currentUser?.roles?.includes('admin')) {
          navigate('/admin');
        } else {
          navigate('/portal/loyalty');
        }
      }, 3000);
    } else {
      setServerError(useAuthStore.getState().error);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const onError = (errors) => {
    // If react-hook-form validation fails, scroll to top so user sees the red text
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f4f6f9] text-slate-800 flex flex-col justify-between relative overflow-hidden py-6 sm:py-8">
      
      {/* Subtle Geometric Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="register-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#cbd5e1" strokeWidth="0.8" opacity="0.5" />
              <circle cx="30" cy="30" r="1.5" fill="#94a3b8" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#register-grid)" />
        </svg>
      </div>

      {/* Main Container */}
      <div className="max-w-4xl w-full mx-auto px-4 sm:px-6 py-8 relative z-10">
        
        {/* TOP CENTER: Logo (h-16) */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-block transition-transform hover:scale-105">
            <img 
              src="/P4logo.jpeg" 
              alt="P4 Global Market" 
              className="h-16 w-auto object-contain mx-auto" 
            />
          </Link>
        </div>

        {/* MAIN CARD (white, shadow, rounded, max-w-3xl, mx-auto, p-8) */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xl max-w-3xl mx-auto">
          
          {/* Risk Warning at top of card */}
          <div className="border-b border-slate-200 pb-4 mb-6">
            <p className="text-[11px] text-slate-500 leading-relaxed font-normal">
              CFDs are complex instruments requiring specialized understanding. Volatile fluctuations can render them valueless, with a likelihood of loss exceeding potential profits. Positions carry a risk of unlimited losses greater than your deposited capital with this broker. You should consider your financial position carefully before investing.
            </p>
          </div>

          {/* "Create your Account" heading */}
          <h1 className="text-3xl font-light text-slate-800 mb-6">
            Create your Account
          </h1>

          {registrationSuccess ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Application Submitted!</h2>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you for choosing P4 Global Market. Your MT5 trading account credentials and email verification link have been dispatched.
              </p>
              <div className="pt-4">
                <Link
                  to="/login"
                  className="inline-block px-8 py-3.5 rounded-full bg-[#3f51b5] hover:bg-[#303f9f] text-white font-bold text-sm shadow-md transition-all cursor-pointer"
                >
                  Proceed to Login
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-5">
              {serverError && (
                <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg">
                  {serverError}
                </div>
              )}
              
              {/* "I want to register as" label + Dropdown */}
              <div>
                <label className="block text-xs text-slate-600 mb-1.5 font-medium">
                  I want to register as
                </label>
                <select
                  {...register('clientType')}
                  className="w-full p-3 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm font-semibold focus:outline-none focus:border-slate-800 focus:ring-1 focus:ring-slate-800 transition-all cursor-pointer"
                >
                  <option value="Individual Client" className="font-medium">Individual Client</option>
                  <option value="Corporate Client" className="font-medium">Corporate Client</option>
                  <option value="Introducing Broker (IB)" className="font-medium">Introducing Broker (IB)</option>
                </select>
              </div>

              {/* First Name & Last Name inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-600 mb-1.5 font-medium">
                    First Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Enter first name"
                    {...register('firstName', { required: 'First name is required' })}
                    className={`w-full p-3 rounded-lg border text-sm font-semibold bg-white text-slate-900 placeholder:text-slate-400 placeholder:font-normal focus:outline-none focus:ring-1 transition-all ${
                      errors.firstName ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-300 focus:border-slate-800 focus:ring-slate-800'
                    }`}
                  />
                  {errors.firstName && (
                    <p className="text-rose-500 text-xs mt-1 font-medium">{errors.firstName.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs text-slate-600 mb-1.5 font-medium">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Enter last name"
                    {...register('lastName', { required: 'Last name is required' })}
                    className={`w-full p-3 rounded-lg border text-sm font-semibold bg-white text-slate-900 placeholder:text-slate-400 placeholder:font-normal focus:outline-none focus:ring-1 transition-all ${
                      errors.lastName ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-300 focus:border-slate-800 focus:ring-slate-800'
                    }`}
                  />
                  {errors.lastName && (
                    <p className="text-rose-500 text-xs mt-1 font-medium">{errors.lastName.message}</p>
                  )}
                </div>
              </div>

              {/* Date of Birth row (3 inputs side by side: YYYY, MM, DD) */}
              <div>
                <label className="block text-xs text-slate-600 mb-1.5 font-medium">
                  Date of Birth *
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <input
                      type="number"
                      placeholder="YYYY"
                      min="1920"
                      max="2008"
                      {...register('birthYear', {
                        required: 'Year required',
                        min: { value: 1920, message: 'Invalid year' },
                        max: { value: 2008, message: 'Must be 18+' }
                      })}
                      className="w-full p-3 rounded-lg border border-slate-300 text-sm font-semibold text-center text-slate-900 placeholder:text-slate-400 placeholder:font-normal focus:outline-none focus:border-slate-800"
                    />
                  </div>

                  <div>
                    <input
                      type="number"
                      placeholder="MM"
                      min="1"
                      max="12"
                      {...register('birthMonth', {
                        required: 'Month required',
                        min: { value: 1, message: '1-12' },
                        max: { value: 12, message: '1-12' }
                      })}
                      className="w-full p-3 rounded-lg border border-slate-300 text-sm font-semibold text-center text-slate-900 placeholder:text-slate-400 placeholder:font-normal focus:outline-none focus:border-slate-800"
                    />
                  </div>

                  <div>
                    <input
                      type="number"
                      placeholder="DD"
                      min="1"
                      max="31"
                      {...register('birthDay', {
                        required: 'Day required',
                        min: { value: 1, message: '1-31' },
                        max: { value: 31, message: '1-31' }
                      })}
                      className="w-full p-3 rounded-lg border border-slate-300 text-sm font-semibold text-center text-slate-900 placeholder:text-slate-400 placeholder:font-normal focus:outline-none focus:border-slate-800"
                    />
                  </div>
                </div>
                {(errors.birthYear || errors.birthMonth || errors.birthDay) && (
                  <p className="text-rose-500 text-xs mt-1 font-medium">
                    {errors.birthYear?.message || errors.birthMonth?.message || errors.birthDay?.message || 'Please enter valid Date of Birth (must be 18+)'}
                  </p>
                )}
              </div>

              {/* TASK 1: Country of Residence Custom Dropdown */}
              <div>
                <label className="block text-xs text-slate-600 mb-1.5 font-medium">
                  Country Of Residence *
                </label>
                <CountrySelect
                  value={countryValue}
                  onChange={(val) => setValue('country', val, { shouldValidate: true })}
                  placeholder="Country of Residence"
                  error={!!errors.country}
                />
                {errors.country && (
                  <p className="text-rose-500 text-xs mt-1 font-medium">{errors.country.message}</p>
                )}
              </div>

              {/* TASK 2: Phone Number with Country Code Dropdown */}
              <div>
                <label className="block text-xs text-slate-600 mb-1.5 font-medium">
                  Phone Number *
                </label>
                <PhoneCountrySelect
                  countryCode={countryCodeValue}
                  onCountryCodeChange={(val) => setValue('countryCode', val, { shouldValidate: true })}
                  phoneRegisterProps={register('phone', {
                    required: 'Phone number is required',
                    pattern: {
                      value: /^[0-9\s-]{6,15}$/,
                      message: 'Please enter a valid phone number'
                    }
                  })}
                  error={!!errors.phone}
                />
                {errors.phone && (
                  <p className="text-rose-500 text-xs mt-1 font-medium">{errors.phone.message}</p>
                )}
              </div>

              {/* "Email" input */}
              <div>
                <label className="block text-xs text-slate-600 mb-1.5 font-medium">
                  Email Address *
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  {...register('email', {
                    required: 'Email address is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  className={`w-full p-3 rounded-lg border text-sm font-semibold bg-white text-slate-900 placeholder:text-slate-400 placeholder:font-normal focus:outline-none focus:ring-1 transition-all ${
                    errors.email ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-300 focus:border-slate-800 focus:ring-slate-800'
                  }`}
                />
                {errors.email && (
                  <p className="text-rose-500 text-xs mt-1 font-medium">{errors.email.message}</p>
                )}
              </div>

              {/* "Password" input with eye toggle icon */}
              <div>
                <label className="block text-xs text-slate-600 mb-1.5 font-medium">
                  Password *
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Create secure password"
                    {...register('password', {
                      required: 'Password is required',
                      minLength: { value: 8, message: 'Minimum 8 characters' },
                      validate: {
                        lower: (v) => /[a-z]/.test(v) || 'Must contain at least 1 lowercase letter',
                        upper: (v) => /[A-Z]/.test(v) || 'Must contain at least 1 uppercase letter',
                        digit: (v) => /[0-9]/.test(v) || 'Must contain at least 1 digit'
                      }
                    })}
                    className={`w-full p-3 pr-11 rounded-lg border text-sm font-semibold bg-white text-slate-900 placeholder:text-slate-400 placeholder:font-normal focus:outline-none focus:ring-1 transition-all ${
                      errors.password ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-300 focus:border-slate-800 focus:ring-slate-800'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3.5 text-slate-400 hover:text-slate-700 p-0.5 cursor-pointer"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>

                {/* Password requirements list (small, grey, bullet points with dynamic checkmarks) */}
                <div className="mt-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-500 space-y-1">
                  <div className={`flex items-center gap-1.5 ${hasMinLength ? 'text-emerald-600 font-semibold' : ''}`}>
                    <span className="text-[10px]">•</span>
                    <span>At least 8 characters long</span>
                  </div>
                  <div className={`flex items-center gap-1.5 ${hasLowerCase ? 'text-emerald-600 font-semibold' : ''}`}>
                    <span className="text-[10px]">•</span>
                    <span>At least 1 lower case latin letter</span>
                  </div>
                  <div className={`flex items-center gap-1.5 ${hasUpperCase ? 'text-emerald-600 font-semibold' : ''}`}>
                    <span className="text-[10px]">•</span>
                    <span>At least 1 upper case latin letter</span>
                  </div>
                  <div className={`flex items-center gap-1.5 ${hasDigit ? 'text-emerald-600 font-semibold' : ''}`}>
                    <span className="text-[10px]">•</span>
                    <span>At least 1 digit</span>
                  </div>
                </div>
              </div>

              {/* "Repeat Password" input with eye toggle icon */}
              <div>
                <label className="block text-xs text-slate-600 mb-1.5 font-medium">
                  Repeat Password *
                </label>
                <div className="relative">
                  <input
                    type={showRepeatPassword ? 'text' : 'password'}
                    placeholder="Repeat your password"
                    {...register('repeatPassword', {
                      required: 'Please repeat password',
                      validate: (val) => val === passwordValue || 'Passwords do not match'
                    })}
                    className={`w-full p-3 pr-11 rounded-lg border text-sm font-semibold bg-white text-slate-900 placeholder:text-slate-400 placeholder:font-normal focus:outline-none focus:ring-1 transition-all ${
                      errors.repeatPassword ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-300 focus:border-slate-800 focus:ring-slate-800'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowRepeatPassword(!showRepeatPassword)}
                    className="absolute right-3 top-3.5 text-slate-400 hover:text-slate-700 p-0.5 cursor-pointer"
                    aria-label={showRepeatPassword ? 'Hide password' : 'Show password'}
                  >
                    {showRepeatPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {errors.repeatPassword && (
                  <p className="text-rose-500 text-xs mt-1 font-medium">{errors.repeatPassword.message}</p>
                )}
              </div>

              {/* Checkbox 1: Legal documents agreement with blue links */}
              <div className="pt-2">
                <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-600 leading-normal font-medium">
                  <input
                    type="checkbox"
                    {...register('agreedLegal', { required: 'You must accept the legal agreements to open an account' })}
                    className="mt-0.5 w-4 h-4 rounded text-[#3f51b5] border-slate-300 focus:ring-[#3f51b5] shrink-0 cursor-pointer"
                  />
                  <span>
                    I confirm I have read and understood{' '}
                    <Link to="/terms" className="text-blue-600 hover:underline font-semibold">Client Services Agreement</Link>,{' '}
                    <Link to="/privacy" className="text-blue-600 hover:underline font-semibold">Privacy and Confidentiality Policy</Link> and all{' '}
                    <Link to="/risk-disclosure" className="text-blue-600 hover:underline font-semibold">P4 Global Market legal documents</Link>.
                  </span>
                </label>
                {errors.agreedLegal && (
                  <p className="text-rose-500 text-xs mt-1 font-medium pl-6">{errors.agreedLegal.message}</p>
                )}
              </div>

              {/* Checkbox 2: Marketing communication */}
              <div>
                <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-600 leading-normal font-medium">
                  <input
                    type="checkbox"
                    {...register('agreedMarketing')}
                    className="mt-0.5 w-4 h-4 rounded text-[#3f51b5] border-slate-300 focus:ring-[#3f51b5] shrink-0 cursor-pointer"
                  />
                  <span>
                    I agree to receive marketing communication from P4 Global Market
                  </span>
                </label>
              </div>

              {/* "Continue" button (dark blue/indigo background #3f51b5, white text, rounded-full, px-12 py-3) */}
              <div className="pt-4 text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-14 py-3.5 rounded-full bg-[#3f51b5] hover:bg-[#303f9f] text-white font-bold text-sm tracking-wide shadow-md transition-all transform hover:-translate-y-0.5 active:scale-95 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'Continue'}
                </button>
              </div>

              {/* Already have an account link */}
              <div className="pt-4 border-t border-slate-100 text-center">
                <p className="text-xs text-slate-500 font-medium">
                  Already have an account?{' '}
                  <Link to="/login" className="text-blue-600 font-bold hover:underline">
                    Log in here
                  </Link>
                </p>
              </div>

            </form>
          )}

        </div>

      </div>

      {/* BOTTOM: Same Risk Warning text as Login page */}
      <footer className="w-full border-t border-slate-200 bg-white/70 py-6 px-4 mt-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[11px] text-slate-500 leading-relaxed font-normal">
            Risk Warning – CFDs are complex financial instruments requiring advanced knowledge and understanding. They are subject to extreme price fluctuations that may render them valueless. Engaging in the buying and selling of these instruments carries an inherent likelihood of incurring losses that exceed potential profits. Transactions can result in unlimited losses greater than the amount deposited with this broker. You should consider your financial position carefully before investing.
          </p>
        </div>
      </footer>

    </div>
  );
}
