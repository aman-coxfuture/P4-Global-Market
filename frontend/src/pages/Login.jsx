import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';
import { useForm } from 'react-hook-form';
import { Eye, EyeOff, Globe, Lock, Mail, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState({ code: 'EN', flag: '🇬🇧', label: 'English' });
  const [loginSuccess, setLoginSuccess] = useState(false);

  const navigate = useNavigate();
  const { login, user } = useAuthStore();
  const [serverError, setServerError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: { email: '', password: '', rememberMe: false }
  });

  const onError = () => { window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const onSubmit = async (data) => {
    setServerError('');
    const success = await login(data);
    if (success) {
      setLoginSuccess(true);
      const currentUser = useAuthStore.getState().user;
      setTimeout(() => {
        if (currentUser?.roles?.includes('admin')) {
          navigate('/admin');
        } else {
          navigate('/portal/loyalty');
        }
      }, 1000);
    } else {
      setServerError(useAuthStore.getState().error);
    }
  };

  const languages = [
    { code: 'EN', flag: '🇬🇧', label: 'English' },
    { code: 'AR', flag: '🇦🇪', label: 'العربية' },
    { code: 'ES', flag: '🇪🇸', label: 'Español' },
    { code: 'DE', flag: '🇩🇪', label: 'Deutsch' },
    { code: 'FR', flag: '🇫🇷', label: 'Français' },
    { code: 'IT', flag: '🇮🇹', label: 'Italiano' },
    { code: 'ZH', flag: '🇨🇳', label: '中文' }
  ];

  return (
    <div className="min-h-screen bg-[#f4f6f9] text-slate-800 flex flex-col justify-between relative overflow-hidden py-6 sm:py-8">
      
      {/* Subtle Geometric Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="geometric-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#cbd5e1" strokeWidth="0.8" opacity="0.5" />
              <circle cx="30" cy="30" r="1.5" fill="#94a3b8" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#geometric-grid)" />
        </svg>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-8 py-8 relative z-10">
        
        {/* TOP LEFT: Logo (h-16) + Language selector "🇬🇧 EN" */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center space-x-4">
            <Link to="/" className="inline-block transition-transform hover:scale-105">
              <img 
                src="/P4logo.jpeg" 
                alt="P4 Global Market" 
                className="h-16 w-auto object-contain" 
              />
            </Link>

            {/* Language Selector "🇬🇧 EN" */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-xs font-bold text-slate-700 shadow-sm transition-all cursor-pointer"
              >
                <span>{selectedLang.flag}</span>
                <span>{selectedLang.code}</span>
                <span className="text-[9px] text-slate-400">▼</span>
              </button>

              {languageMenuOpen && (
                <div className="absolute left-0 top-full mt-1.5 w-36 bg-white border border-slate-200 rounded-xl shadow-xl z-50 py-1">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => {
                        setSelectedLang(lang);
                        setLanguageMenuOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-xs flex items-center gap-2 hover:bg-slate-100 ${selectedLang.code === lang.code ? 'font-bold text-blue-600 bg-blue-50' : 'text-slate-700'}`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <Link
            to="/"
            className="text-xs font-semibold text-slate-500 hover:text-slate-900 hidden sm:inline-block"
          >
            ← Back to Homepage
          </Link>
        </div>

        {/* 2-COLUMN MAIN CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center my-6">
          
          {/* LEFT SIDE (centered vertically): Heading + REGISTER NOW button */}
          <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-800 tracking-tight leading-[1.15]">
              Create your account. <br />
              <span className="font-normal text-slate-900">Quick, easy, free.</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-500 max-w-md mx-auto lg:mx-0 font-normal">
              Access 500+ instruments with raw spreads from 0.0 pips on the institutional MetaTrader 5 platform.
            </p>

            <div className="pt-2">
              <Link
                to="/register"
                className="inline-block px-10 py-4 rounded-full border-2 border-slate-800 text-slate-900 hover:bg-slate-800 hover:text-white font-bold text-sm tracking-wider uppercase transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm"
              >
                REGISTER NOW
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE: White Card with Login Form */}
          <div className="lg:col-span-6 max-w-md w-full mx-auto lg:ml-auto">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-xl relative">
              
              <h2 className="text-3xl font-light text-slate-800 text-center mb-8">
                Login
              </h2>

              {loginSuccess ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Welcome Back!</h3>
                  <p className="text-xs text-slate-600">
                    Authenticating your credentials and redirecting to the P4 Global Market client portal...
                  </p>
                  <Link
                    to="/"
                    className="inline-block px-6 py-2.5 rounded-full bg-slate-900 text-white font-bold text-xs"
                  >
                    Go to Dashboard
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-5">
                  {serverError && (
                    <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg">
                      {serverError}
                    </div>
                  )}
                  
                  {/* Email input field (full width, border, rounded, p-3) */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                      Email Address
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
                      className={`w-full p-3 rounded-lg border text-sm bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                        errors.email 
                          ? 'border-rose-400 focus:ring-rose-200' 
                          : 'border-slate-300 focus:border-slate-800 focus:ring-slate-100'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-rose-500 text-xs mt-1 font-medium">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Password input field with eye toggle icon (show/hide password) */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="••••••••••••"
                        {...register('password', {
                          required: 'Password is required',
                          minLength: {
                            value: 6,
                            message: 'Password must be at least 6 characters'
                          }
                        })}
                        className={`w-full p-3 pr-11 rounded-lg border text-sm bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                          errors.password 
                            ? 'border-rose-400 focus:ring-rose-200' 
                            : 'border-slate-300 focus:border-slate-800 focus:ring-slate-100'
                        }`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3.5 text-slate-400 hover:text-slate-700 transition-colors p-0.5"
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                    {errors.password && (
                      <p className="text-rose-500 text-xs mt-1 font-medium">{errors.password.message}</p>
                    )}
                  </div>

                  {/* Row: "Remember me" checkbox (left) + "Forgot Password" link (right) */}
                  <div className="flex items-center justify-between text-xs pt-1">
                    <label className="flex items-center gap-2 cursor-pointer text-slate-600 select-none">
                      <input
                        type="checkbox"
                        {...register('rememberMe')}
                        className="w-4 h-4 rounded text-slate-900 border-slate-300 focus:ring-slate-400"
                      />
                      <span>Remember me</span>
                    </label>

                    <a href="#forgot-password" className="text-blue-600 hover:underline font-medium">
                      Forgot Password?
                    </a>
                  </div>

                  {/* "Login" button (dark grey/black background, white text, rounded-full, px-12 py-3, centered) */}
                  <div className="pt-4 text-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-12 py-3.5 rounded-full bg-slate-900 hover:bg-black text-white font-bold text-sm tracking-wide shadow-md transition-all transform hover:-translate-y-0.5 active:scale-95 cursor-pointer"
                    >
                      {isSubmitting ? 'Logging In...' : 'Login'}
                    </button>
                  </div>

                  {/* Register footer link */}
                  <div className="pt-4 border-t border-slate-100 text-center">
                    <p className="text-xs text-slate-500">
                      Don't have an account?{' '}
                      <Link to="/register" className="text-blue-600 font-bold hover:underline">
                        Register Now
                      </Link>
                    </p>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>

      {/* BOTTOM (full width): Risk Warning text (small, grey, centered, max-w-4xl) */}
      <footer className="w-full border-t border-slate-200 bg-white/70 py-6 px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[11px] text-slate-500 leading-relaxed font-normal">
            Risk Warning – CFDs are complex financial instruments requiring advanced knowledge and understanding. They are subject to extreme price fluctuations that may render them valueless. Engaging in the buying and selling of these instruments carries an inherent likelihood of incurring losses that exceed potential profits. Transactions can result in unlimited losses greater than the amount deposited with this broker. You should consider your financial position carefully before investing.
          </p>
        </div>
      </footer>

    </div>
  );
}
