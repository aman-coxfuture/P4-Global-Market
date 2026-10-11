import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../../components/ui/Breadcrumbs';
import { PageShell } from '../../components/layout/PageShell';

export default function OpenDemoAccount() {
  const [step, setStep] = useState(1);
  const [category, setCategory] = useState('');
  const [accountType, setAccountType] = useState('');
  const [leverage, setLeverage] = useState('1:500');
  const [currency, setCurrency] = useState('GBP');
  const [balance, setBalance] = useState('500');

  const breadcrumbItems = [
    { label: 'Home', href: '/portal/loyalty' },
    { label: "Trader's Menu", href: '#' },
    { label: 'Accounts', href: '/portal/accounts' },
    { label: 'Open Demo Account' },
  ];

  const handleContinue = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <PageShell>
      <div className="mb-4">
        <Breadcrumbs items={breadcrumbItems} />
      </div>
      
      <div className="bg-white border border-slate-200 shadow-sm min-h-[500px]">
        {/* Stepper */}
        <div className="flex items-center justify-center space-x-12 py-6 border-b border-slate-100">
          <div className={`text-[13px] font-medium tracking-wide ${step === 1 ? 'text-[#1e2b58]' : 'text-slate-300'}`}>1. SELECT CATEGORY</div>
          <div className={`text-[13px] font-medium tracking-wide ${step === 2 ? 'text-[#1e2b58]' : 'text-slate-300'}`}>2. SELECT ACCOUNT TYPE</div>
          <div className={`text-[13px] font-medium tracking-wide ${step === 3 ? 'text-[#1e2b58]' : 'text-slate-300'}`}>3. CONFIRMATION</div>
        </div>

        {/* Form Area */}
        <div className="flex flex-col items-center pt-16">
          <div className="w-[480px]">
            {step === 1 && (
              <div className="space-y-6">
                <div className="flex border border-slate-300 h-9">
                  <div className="bg-slate-50 w-[160px] px-3 flex items-center border-r border-slate-300 text-[13px] text-slate-600">
                    Account Category
                  </div>
                  <select 
                    className="flex-1 px-3 bg-white text-[13px] text-slate-700 focus:outline-none appearance-none"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="" disabled>Select</option>
                    <option value="mt5">MT5 Demo Account</option>
                    <option value="mt4">MT4 Demo Account</option>
                  </select>
                </div>

                <div>
                  <button 
                    onClick={handleContinue}
                    className="bg-[#1e2b58] hover:bg-[#152042] text-white px-5 py-1.5 text-[13px] font-medium transition-colors"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div className="flex border border-slate-300 h-9">
                  <div className="bg-slate-50 w-[160px] px-3 flex items-center border-r border-slate-300 text-[13px] text-slate-600">
                    Type
                  </div>
                  <select 
                    className="flex-1 px-3 bg-white text-[13px] text-slate-700 focus:outline-none appearance-none"
                    value={accountType}
                    onChange={(e) => setAccountType(e.target.value)}
                  >
                    <option value="" disabled>Select</option>
                    <option value="standard">MT5 Demo Standard</option>
                    <option value="premium">MT5 Demo Premium</option>
                    <option value="raw">MT5 Demo Raw Spread</option>
                  </select>
                </div>

                {accountType && (
                  <>
                    <div className="flex border border-slate-300 h-9">
                      <div className="bg-slate-50 w-[160px] px-3 flex items-center border-r border-slate-300 text-[13px] text-slate-600">
                        Leverage
                      </div>
                      <select 
                        className="flex-1 px-3 bg-white text-[13px] text-slate-700 focus:outline-none appearance-none"
                        value={leverage}
                        onChange={(e) => setLeverage(e.target.value)}
                      >
                        <option value="1:100">1:100</option>
                        <option value="1:500">1:500</option>
                        <option value="1:1000">1:1000</option>
                      </select>
                    </div>

                    <div className="flex border border-slate-300 h-9">
                      <div className="bg-slate-50 w-[160px] px-3 flex items-center border-r border-slate-300 text-[13px] text-slate-600">
                        Currency
                      </div>
                      <select 
                        className="flex-1 px-3 bg-white text-[13px] text-slate-700 focus:outline-none appearance-none"
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                      >
                        <option value="USD">USD</option>
                        <option value="GBP">GBP</option>
                        <option value="EUR">EUR</option>
                      </select>
                    </div>

                    <div className="flex border border-slate-300 h-9">
                      <div className="bg-slate-50 w-[160px] px-3 flex items-center border-r border-slate-300 text-[13px] text-slate-600">
                        Initial Balance
                      </div>
                      <select 
                        className="flex-1 px-3 bg-white text-[13px] text-slate-700 focus:outline-none appearance-none"
                        value={balance}
                        onChange={(e) => setBalance(e.target.value)}
                      >
                        <option value="500">500</option>
                        <option value="1000">1000</option>
                        <option value="5000">5000</option>
                        <option value="10000">10000</option>
                      </select>
                    </div>
                  </>
                )}

                <div className="flex space-x-2 pt-2">
                  <button 
                    onClick={handleBack}
                    className="bg-[#1e2b58] hover:bg-[#152042] text-white px-5 py-1.5 text-[13px] font-medium transition-colors"
                  >
                    Back
                  </button>
                  <button 
                    onClick={handleContinue}
                    className="bg-[#1e2b58] hover:bg-[#152042] text-white px-5 py-1.5 text-[13px] font-medium transition-colors"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6 text-center">
                <h3 className="text-xl font-medium text-slate-800">Confirm Account Creation</h3>
                <p className="text-slate-600">You are about to create a {accountType} account with {currency} {balance} initial balance.</p>
                
                <div className="flex justify-center space-x-2 pt-4">
                  <button 
                    onClick={handleBack}
                    className="bg-[#1e2b58] hover:bg-[#152042] text-white px-5 py-1.5 text-[13px] font-medium transition-colors"
                  >
                    Back
                  </button>
                  <button 
                    onClick={() => alert("Account Created!")}
                    className="bg-[#1e2b58] hover:bg-[#152042] text-white px-5 py-1.5 text-[13px] font-medium transition-colors"
                  >
                    Create Account
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </PageShell>
  );
}
