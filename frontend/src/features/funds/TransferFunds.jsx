import React, { useState } from 'react';
import { Breadcrumbs } from '../../components/ui/Breadcrumbs';
import { PageShell } from '../../components/layout/PageShell';

export default function TransferFunds() {
  const [step, setStep] = useState(1);
  const [transferFrom, setTransferFrom] = useState('');
  const [transferTo, setTransferTo] = useState('');
  const [transferAmount, setTransferAmount] = useState('');
  const [creditedAmount, setCreditedAmount] = useState('');
  const [comment, setComment] = useState('');

  const breadcrumbItems = [
    { label: 'Home', href: '/portal/loyalty' },
    { label: "Trader's Menu", href: '#' },
    { label: 'Funds', href: '#' },
    { label: 'Transfer Funds' },
  ];

  const handleContinue = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const renderAccountOptions = () => (
    <>
      <option value="" disabled>Select</option>
      <optgroup label="Wallet Account">
        <option value="wallet-1">Wallet Account 3016234 (0.20 USD)</option>
      </optgroup>
      <optgroup label="MT5 Standard">
        <option value="mt5-1">MT5 Standard 3589975 (0.00 USD)</option>
        <option value="mt5-2">MT5 Standard 3590111 (0.00 USD)</option>
        <option value="mt5-3">MT5 Standard 3602135 (0.00 USD)</option>
      </optgroup>
      <optgroup label="IB Wallet">
        <option value="ib-1">IB Wallet 3015404 (0.95 USD)</option>
      </optgroup>
      <optgroup label="MT5 Bonus Raw Spread">
        <option value="mt5-bonus-1">MT5 Bonus Raw Spread 3591524 (0.00 USD)</option>
      </optgroup>
    </>
  );

  return (
    <PageShell>
      <div className="mb-4">
        <Breadcrumbs items={breadcrumbItems} />
      </div>
      
      <div className="bg-white border border-slate-200 shadow-sm min-h-[500px]">
        {/* Stepper */}
        <div className="flex items-center justify-center space-x-12 py-6 border-b border-slate-100">
          <div className={`text-[13px] font-medium tracking-wide ${step === 1 ? 'text-[#1e2b58]' : 'text-slate-300'}`}>1. INITIAL INFORMATION</div>
          <div className={`text-[13px] font-medium tracking-wide ${step === 2 ? 'text-[#1e2b58]' : 'text-slate-300'}`}>2. TRANSFER DETAILS</div>
          <div className={`text-[13px] font-medium tracking-wide ${step === 3 ? 'text-[#1e2b58]' : 'text-slate-300'}`}>3. CONFIRMATION</div>
        </div>

        {/* Form Area */}
        <div className="flex flex-col items-center pt-8 pb-16">
          <div className="w-[600px] max-w-full px-4">
            
            {step === 1 && (
              <div className="space-y-6">
                <div className="flex border border-slate-300 h-9">
                  <div className="bg-slate-50 w-[140px] px-3 flex items-center border-r border-slate-300 text-[13px] text-slate-600">
                    Transfer From
                  </div>
                  <select 
                    className="flex-1 px-3 bg-white text-[13px] text-slate-700 focus:outline-none appearance-none"
                    value={transferFrom}
                    onChange={(e) => setTransferFrom(e.target.value)}
                  >
                    {renderAccountOptions()}
                  </select>
                </div>

                <div className="flex border border-slate-300 h-9">
                  <div className="bg-slate-50 w-[140px] px-3 flex items-center border-r border-slate-300 text-[13px] text-slate-600">
                    Transfer To
                  </div>
                  <select 
                    className="flex-1 px-3 bg-white text-[13px] text-slate-700 focus:outline-none appearance-none"
                    value={transferTo}
                    onChange={(e) => setTransferTo(e.target.value)}
                  >
                    {renderAccountOptions()}
                  </select>
                </div>

                <div className="pt-2">
                  <button 
                    onClick={handleContinue}
                    disabled={!transferFrom || !transferTo}
                    className="bg-[#1e2b58] hover:bg-[#152042] text-white px-5 py-1.5 text-[13px] font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                
                <div className="space-y-4">
                  <div>
                    <div className="flex border border-slate-300 h-9">
                      <div className="bg-slate-50 w-[140px] px-3 flex items-center border-r border-slate-300 text-[13px] text-slate-600">
                        Transfer Amount
                      </div>
                      <input 
                        type="number"
                        className="flex-1 px-3 text-[13px] text-slate-700 focus:outline-none focus:bg-blue-50/30"
                        value={transferAmount}
                        onChange={(e) => setTransferAmount(e.target.value)}
                      />
                      <div className="bg-slate-50 w-[50px] px-3 flex items-center justify-center border-l border-slate-300 text-[13px] text-slate-500">
                        USD
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1 pl-1">Wallet Account 3016234: Available 0.20 USD</p>
                  </div>

                  <div>
                    <div className="flex border border-slate-300 h-9">
                      <div className="bg-slate-50 w-[140px] px-3 flex items-center border-r border-slate-300 text-[13px] text-slate-600">
                        Credited Amount
                      </div>
                      <input 
                        type="number"
                        readOnly
                        className="flex-1 px-3 text-[13px] text-slate-700 bg-slate-50 focus:outline-none"
                        value={creditedAmount}
                        onChange={(e) => setCreditedAmount(e.target.value)}
                        placeholder=""
                      />
                      <div className="bg-slate-50 w-[50px] px-3 flex items-center justify-center border-l border-slate-300 text-[13px] text-slate-500">
                        USD
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex border border-slate-300 min-h-[80px]">
                    <div className="bg-slate-50 w-[140px] px-3 py-2 flex border-r border-slate-300 text-[13px] text-slate-600 items-start">
                      Comment
                    </div>
                    <textarea 
                      className="flex-1 p-3 text-[13px] text-slate-700 focus:outline-none resize-none"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    ></textarea>
                  </div>
                </div>

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
                <h3 className="text-xl font-medium text-slate-800">Confirm Transfer</h3>
                <p className="text-slate-600">Please confirm your transfer of {transferAmount || '0'} USD.</p>
                
                <div className="flex justify-center space-x-2 pt-4">
                  <button 
                    onClick={handleBack}
                    className="bg-[#1e2b58] hover:bg-[#152042] text-white px-5 py-1.5 text-[13px] font-medium transition-colors"
                  >
                    Back
                  </button>
                  <button 
                    onClick={() => alert("Transfer Initiated!")}
                    className="bg-[#1e2b58] hover:bg-[#152042] text-white px-5 py-1.5 text-[13px] font-medium transition-colors"
                  >
                    Submit
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
