import React, { useState } from 'react';
import { Breadcrumbs } from '../../components/ui/Breadcrumbs';
import { PageShell } from '../../components/layout/PageShell';
import { Plus } from 'lucide-react';

export default function WithdrawFunds() {
  const [step, setStep] = useState(1);
  const [withdrawFrom, setWithdrawFrom] = useState('');
  const [selectedMethod, setSelectedMethod] = useState('');

  const breadcrumbItems = [
    { label: 'Home', href: '/portal/loyalty' },
    { label: "Trader's Menu", href: '#' },
    { label: 'Funds', href: '#' },
    { label: 'Withdraw Funds' },
  ];

  const handleContinue = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const paymentMethods = [
    { id: 'upi', name: 'UPI Instant Pay', group: 'upi', image: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo-vector.svg' },
    { id: 'paytm', name: 'Paytm / PhonePe', group: 'upi', image: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Paytm_Logo_%28standalone%29.svg' },
    { id: 'upi-b', name: 'UPI PhonePe', group: 'upi', image: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo-vector.svg' },
    { id: 'toolb', name: 'toolb', group: 'crypto', image: 'https://placehold.co/200x80/ffffff/333333?text=toolb' },
    { id: 'binance', name: 'BINANCE PAY', group: 'crypto', image: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Binance_Logo.svg' },
    { id: 'overchain', name: 'Overchain', group: 'crypto', dark: true, image: 'https://placehold.co/200x80/000000/22c55e?text=Overchain' },
    { id: 'letknow', name: 'LetKnow Pay', group: 'crypto', image: 'https://placehold.co/200x80/ffffff/22c55e?text=LetKnow+Pay' },
    { id: 'skrill', name: 'Skrill', group: 'ewallet', image: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Skrill_logo.svg' },
    { id: 'neteller', name: 'NETELLER', group: 'ewallet', image: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Neteller_Logo.svg' },
    { id: 'bankwire', name: 'BANK WIRE', group: 'bank', image: 'https://placehold.co/200x80/ffffff/1e3a8a?text=BANK+WIRE' },
    { id: 'rupay', name: 'RuPay / NetBanking', group: 'bank', image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Rupay-Logo.png' },
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
                    Withdraw From
                  </div>
                  <select 
                    className="flex-1 px-3 bg-white text-[13px] text-slate-700 focus:outline-none appearance-none"
                    value={withdrawFrom}
                    onChange={(e) => setWithdrawFrom(e.target.value)}
                  >
                    <option value="" disabled>Select an account</option>
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

                <div className="pt-2">
                  <p className="text-[13px] text-slate-600 mb-3">You do not have any payment details saved. Please upload your payment details.</p>
                  <button className="flex items-center gap-2 bg-[#1e2b58] hover:bg-[#152042] text-white px-4 py-1.5 text-[13px] font-medium transition-colors mb-6">
                    <Plus size={16} />
                    Upload Payment Details
                  </button>

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
              <div className="space-y-6 text-center">
                <h3 className="text-xl font-medium text-slate-800">Transfer Details</h3>
                <p className="text-slate-600">Enter withdrawal amount here.</p>
                
                <div className="flex justify-center space-x-2 pt-4">
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
                <h3 className="text-xl font-medium text-slate-800">Confirm Withdrawal</h3>
                
                <div className="flex justify-center space-x-2 pt-4">
                  <button 
                    onClick={handleBack}
                    className="bg-[#1e2b58] hover:bg-[#152042] text-white px-5 py-1.5 text-[13px] font-medium transition-colors"
                  >
                    Back
                  </button>
                  <button 
                    onClick={() => alert("Withdrawal Initiated!")}
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
