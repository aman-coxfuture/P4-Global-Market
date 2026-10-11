import React from 'react';

const platforms = [
  {
    id: 'facebook',
    name: 'Facebook',
    color: 'bg-[#1877F2]',
    shadow: 'shadow-[0_0_40px_rgba(24,119,242,0.4)]',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
    ),
    smallIcon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
    ),
    quests: [
      { name: 'Connect Account', reward: '+10' },
      { name: 'Follow Account', reward: '+20' },
      { name: 'Like Post', reward: '+5' },
      { name: 'Comment on Post', reward: '+10' }
    ]
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    color: 'bg-[#0A66C2]',
    shadow: 'shadow-[0_0_40px_rgba(10,102,194,0.4)]',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
    ),
    smallIcon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
    ),
    quests: [
      { name: 'Connect Account', reward: '+10' },
      { name: 'Share/Repost', reward: '+10' },
      { name: 'Like Post', reward: '+5' },
      { name: 'Comment on Post', reward: '+10' }
    ]
  },
  {
    id: 'x',
    name: 'X',
    color: 'bg-black',
    shadow: 'shadow-[0_0_40px_rgba(255,255,255,0.2)]',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
    ),
    smallIcon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
    ),
    quests: [
      { name: 'Connect Account', reward: '+10' },
      { name: 'Repost', reward: '+10' },
      { name: 'Like Post', reward: '+5' },
      { name: 'Comment on Post', reward: '+10' }
    ]
  },
  {
    id: 'youtube',
    name: 'YouTube',
    color: 'bg-[#FF0000]',
    shadow: 'shadow-[0_0_40px_rgba(255,0,0,0.4)]',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#0b1120"></polygon></svg>
    ),
    smallIcon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#0b1120"></polygon></svg>
    ),
    quests: [
      { name: 'Connect Account', reward: '+10' },
      { name: 'Follow Account', reward: '+20' },
      { name: 'Comment on Video', reward: '+10' }
    ]
  },
  {
    id: 'instagram',
    name: 'Instagram',
    color: 'bg-gradient-to-tr from-[#FFDC80] via-[#F56040] to-[#C13584]',
    shadow: 'shadow-[0_0_40px_rgba(245,96,64,0.4)]',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
    ),
    smallIcon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
    ),
    quests: [
      { name: 'Connect Account', reward: '+10' },
      { name: 'Comment on Post', reward: '+5' }
    ]
  }
];

export function LoyaltySocialQuests() {
  return (
    <div className="w-full flex flex-col items-center py-16 px-4 mb-24">
      <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide text-white mb-2 text-center">Social Quests</h2>
      <p className="text-[11px] md:text-sm text-slate-400 mb-16 text-center">Follow and engage with us on social media</p>

      {/* Grid container to perfectly match the 3-top, 2-bottom centered layout */}
      <div className="flex flex-col items-center gap-6 max-w-4xl w-full">
        {/* Top Row: Facebook, LinkedIn, X */}
        <div className="flex flex-col md:flex-row justify-center gap-6 w-full">
          {platforms.slice(0, 3).map((platform) => (
            <QuestCard key={platform.id} platform={platform} />
          ))}
        </div>
        
        {/* Bottom Row: YouTube, Instagram */}
        <div className="flex flex-col md:flex-row justify-center gap-6 w-full">
          {platforms.slice(3, 5).map((platform) => (
            <QuestCard key={platform.id} platform={platform} />
          ))}
        </div>
      </div>
    </div>
  );
}

function QuestCard({ platform }) {
  return (
    <div className="group relative w-full md:w-[240px] h-[320px] bg-[#0b1120] border border-[#1a233a] rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:border-blue-900/50 hover:shadow-[0_0_30px_rgba(30,58,138,0.2)]">
      
      {/* Front Face (Default State) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 transition-all duration-500 group-hover:opacity-0 group-hover:scale-95 bg-[#0b1120] z-10">
        <div className="relative mb-10 mt-4">
          {/* Subtle glow behind the icon */}
          <div className={`absolute inset-0 blur-xl opacity-50 ${platform.color}`}></div>
          <div className={`relative w-[64px] h-[64px] rounded-2xl ${platform.color} flex items-center justify-center text-white shadow-xl`}>
            {platform.icon}
          </div>
        </div>
        <div className="mt-auto text-center w-full">
          <h3 className="font-bold text-white text-[14px] mb-1.5">{platform.name}</h3>
          <p className="text-[10px] text-slate-500 font-medium">Hover over to see quests</p>
        </div>
      </div>

      {/* Back Face (Hover State) */}
      <div className="absolute inset-0 flex flex-col p-5 opacity-0 scale-105 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100 bg-[#0b1120] z-20 pointer-events-none group-hover:pointer-events-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className={`w-8 h-8 rounded-lg ${platform.color} flex items-center justify-center text-white shadow-lg shrink-0`}>
            {platform.smallIcon}
          </div>
          <div>
            <h3 className="text-[11px] font-bold text-white">{platform.name} Quests</h3>
            <p className="text-[8px] text-slate-400">Earn rewards for engagement</p>
          </div>
        </div>
        
        <div className="flex flex-col gap-4 mt-1">
          {platform.quests.map((quest, idx) => (
            <div key={idx} className="flex justify-between items-center group/item hover:bg-slate-800/30 p-1.5 -mx-1.5 rounded transition-colors">
              <span className="text-[10px] text-slate-300 font-medium">{quest.name}</span>
              <div className="flex items-center gap-1.5 bg-[#0a1128] border border-slate-800/50 px-2 py-1 rounded">
                <span className="text-slate-200 font-bold text-[9px] mr-1">{quest.reward}</span>
                <div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b] shadow-[0_0_3px_rgba(245,158,11,0.5)]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_3px_rgba(59,130,246,0.5)]"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
