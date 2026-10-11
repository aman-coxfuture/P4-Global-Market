import React, { useState } from 'react';
import { Breadcrumbs } from '../../components/ui/Breadcrumbs';
import { PageShell } from '../../components/layout/PageShell';

export default function DepositFunds() {
  const [step, setStep] = useState(1);
  const [depositTo, setDepositTo] = useState('wallet-1');
  const [selectedMethod, setSelectedMethod] = useState('');
  
  const [depositAmount, setDepositAmount] = useState('');
  const [creditedAmount, setCreditedAmount] = useState('');

  const breadcrumbItems = [
    { label: 'Home', href: '/portal/loyalty' },
    { label: "Trader's Menu", href: '#' },
    { label: 'Funds', href: '#' },
    { label: 'Deposit Funds' },
  ];

  const handleContinue = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const paymentMethods = [
    { id: 'upi', name: 'UPI Instant Pay', group: 'upi', image: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo-vector.svg' },
    { id: 'toolb', name: 'toolb', group: 'crypto', image: 'https://placehold.co/200x80/ffffff/333333?text=toolb' },
    { id: 'binance', name: 'BINANCE PAY', group: 'crypto', image: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Binance_Logo.svg' },
    { id: 'overchain', name: 'Overchain', group: 'crypto', dark: true, image: 'https://placehold.co/200x80/000000/22c55e?text=Overchain' },
    { id: 'letknow', name: 'LetKnow Pay', group: 'crypto', image: 'https://placehold.co/200x80/ffffff/22c55e?text=LetKnow+Pay' },
    { id: 'skrill', name: 'Skrill', group: 'ewallet', image: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Skrill_logo.svg' },
    { id: 'bankwire', name: 'BANK WIRE', group: 'bank', image: 'https://placehold.co/200x80/ffffff/1e3a8a?text=BANK+WIRE' },
    { id: 'rupay', name: 'RuPay / NetBanking', group: 'bank', image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Rupay-Logo.png' },
    { id: 'local-abhi', name: 'LOCAL DEPOSITOR Abhi Bank', group: 'local', image: 'https://placehold.co/200x80/ffffff/f97316?text=LOCAL+DEPOSITOR' },
    { id: 'local', name: 'LOCAL DEPOSITOR', group: 'local', image: 'https://placehold.co/200x80/ffffff/f97316?text=LOCAL+DEPOSITOR' },
  ];

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
                    Deposit To
                  </div>
                  <select 
                    className="flex-1 px-3 bg-white text-[13px] text-slate-700 focus:outline-none appearance-none"
                    value={depositTo}
                    onChange={(e) => setDepositTo(e.target.value)}
                  >
                    <optgroup label="Wallet Account">
                      <option value="wallet-1">Wallet Account 3016234 (0.20 USD)</option>
                    </optgroup>
                    <optgroup label="MT5 Standard">
                      <option value="mt5-1">MT5 Standard 3589975 (0.00 USD)</option>
                      <option value="mt5-2">MT5 Standard 3590111 (0.00 USD)</option>
                      <option value="mt5-3">MT5 Standard 3602135 (0.00 USD)</option>
                    </optgroup>
                    <optgroup label="MT5 Bonus Raw Spread">
                      <option value="mt5-bonus-1">MT5 Bonus Raw Spread 3591524 (0.00 USD)</option>
                    </optgroup>
                  </select>
                </div>

                {/* Payment Methods Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  {paymentMethods.map(method => (
                    <button
                      key={method.id}
                      onClick={() => setSelectedMethod(method.id)}
                      className={`h-20 flex flex-col items-center justify-center p-2 border transition-all ${
                        selectedMethod === method.id 
                          ? 'border-[#1e2b58] ring-1 ring-[#1e2b58] bg-blue-50/20' 
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      } ${method.dark ? 'bg-black text-white' : ''}`}
                    >
                      {method.image ? (
                        <img src={method.image} alt={method.name} className="max-h-12 max-w-full object-contain" />
                      ) : (
                        <span className={`text-[11px] font-bold text-center leading-tight ${method.dark ? 'text-white' : 'text-slate-700'}`}>
                          {method.name}
                        </span>
                      )}
                    </button>
                  ))}
                </div>

                <div className="pt-4">
                  <button 
                    onClick={handleContinue}
                    disabled={!selectedMethod}
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
                        Deposit Amount
                      </div>
                      <input 
                        type="number"
                        className="flex-1 px-3 text-[13px] text-slate-700 focus:outline-none focus:bg-blue-50/30"
                        value={depositAmount}
                        onChange={(e) => setDepositAmount(e.target.value)}
                      />
                      <div className="bg-slate-50 w-[50px] px-3 flex items-center justify-center border-l border-slate-300 text-[13px] text-slate-500">
                        INR
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1 pl-1">Deposit to Wallet Account 3016234 (0.20 USD)</p>
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
                        placeholder="0.00"
                      />
                      <div className="bg-slate-50 w-[50px] px-3 flex items-center justify-center border-l border-slate-300 text-[13px] text-slate-500">
                        USD
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1 pl-1">Approximate amount to be credited onto your Trading Account after deducting the Commission & Fees</p>
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

                {/* Important Notes Box */}
                <div className="bg-slate-50/50 border border-slate-200 p-5 mt-6 space-y-4 rounded-sm">
                  <div>
                    <h4 className="text-[11px] font-bold text-slate-800 tracking-wide uppercase">Minimum Deposit Amount</h4>
                    <p className="text-[12px] text-slate-700 mt-1">1,000.00 INR</p>
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-slate-800 tracking-wide uppercase">Maximum Deposit Amount</h4>
                    <p className="text-[12px] text-slate-700 mt-1">100,000.00 INR</p>
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-slate-800 tracking-wide uppercase">Please Note:</h4>
                    <ul className="text-[12px] text-slate-700 mt-2 space-y-3 font-medium">
                      <li>Estimated processing time: up to 6 hours.</li>
                      <li>Most UPI deposits are processed within a few hours.</li>
                      <li>In some cases, bank-side verification may take longer.</li>
                      <li>Deposits must be made through the Client Area. Payments sent directly to saved bank details without creating a deposit order may be delayed or lost.</li>
                      <li>Third-party deposits are not permitted.</li>
                    </ul>
                  </div>
                </div>

              </div>
            )}

            {step === 3 && (
              <div className="space-y-6 text-center">
                <h3 className="text-xl font-medium text-slate-800">Confirm Deposit</h3>
                <p className="text-slate-600">Please confirm your deposit of {depositAmount || '0'} INR.</p>
                
                <div className="flex justify-center space-x-2 pt-4">
                  <button 
                    onClick={handleBack}
                    className="bg-[#1e2b58] hover:bg-[#152042] text-white px-5 py-1.5 text-[13px] font-medium transition-colors"
                  >
                    Back
                  </button>
                  <button 
                    onClick={() => alert("Deposit Initiated!")}
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
