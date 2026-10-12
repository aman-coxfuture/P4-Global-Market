import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';
import { useForm } from 'react-hook-form';
import { Eye, EyeOff, Lock, Mail, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../components/ui/LanguageSwitcher';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const { t } = useTranslation();

  const navigate = useNavigate();
  const { login } = useAuthStore();
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
      navigate(currentUser?.roles?.includes('admin') ? '/admin' : '/portal/loyalty', { replace: true });
    } else {
      setServerError(useAuthStore.getState().error);
    }
  };

return (
    <div className="min-h-screen bg-gradient-to-br from-[#050816] via-[#0b1b45] to-[#123b8c] text-slate-100 flex flex-col justify-between relative overflow-hidden py-6 sm:py-8">

      {/* Subtle Geometric Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="geometric-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#60a5fa" strokeWidth="0.8" opacity="0.5" />
              <circle cx="30" cy="30" r="1.5" fill="#93c5fd" opacity="0.3" />
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
                src="/P4logo.png"
                alt="P4 Global Market"
                className="h-20 w-auto object-contain drop-shadow-[0_0_18px_rgba(96,165,250,0.3)]"
              />
            </Link>

            <LanguageSwitcher className="rounded-lg border border-blue-300/30 bg-[#0b1533]/80 px-3 py-2 text-blue-100" />
          </div>

          <Link
            to="/"
            className="text-xs font-semibold text-blue-100/75 hover:text-white hidden sm:inline-block"
          >
            ← {t('auth.back_home')}
          </Link>
        </div>

        {/* 2-COLUMN MAIN CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center my-6">

          {/* LEFT SIDE (centered vertically): Heading + {t('auth.register_now').ToUpper()} button */}
          <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.15]">
              Create your account. <br />
              <span className="font-normal text-blue-200">Quick, easy, free.</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-500 max-w-md mx-auto lg:mx-0 font-normal">
              Access 500+ instruments with raw spreads from 0.0 pips on the institutional MetaTrader 5 platform.
            </p>

            <div className="pt-2">
              <Link
                to="/register"
                className="inline-block px-10 py-4 rounded-full border-2 border-blue-300/60 text-blue-100 hover:bg-blue-900/60 hover:text-white font-bold text-sm tracking-wider uppercase transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm"
              >
                {t('auth.register_now').toUpperCase()}
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE: White Card with Login Form */}
          <div className="lg:col-span-6 max-w-md w-full mx-auto lg:ml-auto">
            <div className="bg-gradient-to-br from-[#111d43]/95 via-[#0b1533]/95 to-[#050a1c]/95 rounded-3xl p-8 sm:p-10 border border-blue-300/20 shadow-2xl shadow-blue-950/40 relative">

              <h2 className="text-3xl font-light text-white text-center mb-8">
                {t('auth.login')}
              </h2>

              {loginSuccess ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Welcome Back!</h3>
                  <p className="text-xs text-slate-300">
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
                    <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                      {t('auth.email')}
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
                    <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                      {t('auth.password')}
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
                        className="absolute right-3 top-3.5 text-slate-400 hover:text-slate-200 transition-colors p-0.5"
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
                    <label className="flex items-center gap-2 cursor-pointer text-slate-300 select-none">
                      <input
                        type="checkbox"
                        {...register('rememberMe')}
                        className="w-4 h-4 rounded text-slate-900 border-slate-300 focus:ring-slate-400"
                      />
                      <span>{t('auth.remember')}</span>
                    </label>

                    <a href="#forgot-password" className="text-blue-300 hover:text-white hover:underline font-medium">
                      {t('auth.forgot')}
                    </a>
                  </div>

                  {/* "Login" button (dark grey/black background, white text, rounded-full, px-12 py-3, centered) */}
                  <div className="pt-4 text-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-12 py-3.5 rounded-full bg-gradient-to-r from-[#132c68] via-[#173f91] to-[#1d4ed8] hover:from-[#1d4ed8] hover:to-[#2563eb] text-white font-bold text-sm tracking-wide shadow-md transition-all transform hover:-translate-y-0.5 active:scale-95 cursor-pointer"
                    >
                      {isSubmitting ? t('auth.logging_in') : t('auth.login')}
                    </button>
                  </div>

                  {/* Register footer link */}
                  <div className="pt-4 border-t border-blue-200/20 text-center">
                    <p className="text-xs text-slate-300">
                      {t('auth.no_account')}{' '}
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
      <footer className="w-full border-t border-blue-200/20 bg-[#050816]/70 py-6 px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[11px] text-slate-300 leading-relaxed font-normal">
            Risk Warning – CFDs are complex financial instruments requiring advanced knowledge and understanding. They are subject to extreme price fluctuations that may render them valueless. Engaging in the buying and selling of these instruments carries an inherent likelihood of incurring losses that exceed potential profits. Transactions can result in unlimited losses greater than the amount deposited with this broker. You should consider your financial position carefully before investing.
          </p>
        </div>
      </footer>

    </div>
  );
}
