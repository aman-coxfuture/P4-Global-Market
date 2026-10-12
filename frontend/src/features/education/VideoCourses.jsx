import React, { useState, useEffect } from 'react';
import { Breadcrumbs } from '../../components/ui/Breadcrumbs';
import { PageShell } from '../../components/layout/PageShell';
import { MonitorPlay, Smartphone, TrendingUp, Presentation, BookOpen, User, Book, Layers, Repeat, Compass, CheckSquare } from 'lucide-react';

export default function VideoCourses() {
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // simulate loading
    return () => clearTimeout(timer);
  }, []);

  const breadcrumbItems = [
    { label: 'Home', href: '/portal/loyalty' },
    { label: "Trader's Menu", href: '#' },
    { label: 'EDUCATION', href: '#' },
    { label: 'Video Courses' },
  ];

  const courses = [
    { 
      level: 'Beginner', 
      title: 'Tips for beginners', 
      desc: 'This course focuses on building the right mindset, managing risk, following a structured process, and developing the discipline needed for more consistent trading.',
      lessons: '3 LESSONS',
      time: '00:04:21',
      icon: <Presentation size={48} className="text-white" />
    },
    { 
      level: 'Beginner', 
      title: 'Forex Trading', 
      desc: "From calculating pips and leverage to managing positions - all that traders need to know about Forex trading.",
      lessons: '10 LESSONS',
      time: '00:23:28',
      icon: <TrendingUp size={48} className="text-white" />
    },
    { 
      level: 'Beginner', 
      title: 'Crypto Trading', 
      desc: 'In this course, you will learn all the basics to start trading in the world of cryptocurrencies.',
      lessons: '13 LESSONS',
      time: '00:15:27',
      icon: <Repeat size={48} className="text-white" />
    },
    { 
      level: 'Beginner', 
      title: 'Stocks', 
      desc: 'Learn the essentials of stock trading - from prices and leverage to trading hours and earnings season. Each lesson delivers clear, practical insights to help you trade smarter.',
      lessons: '7 LESSONS',
      time: '00:13:46',
      icon: <MonitorPlay size={48} className="text-white" />
    },
    { 
      level: 'Beginner', 
      title: 'Indices', 
      desc: 'This course is a concise guide to understanding indices, key market players and essential factors for trading.',
      lessons: '6 LESSONS',
      time: '00:10:35',
      icon: <TrendingUp size={48} className="text-white" />
    },
    { 
      level: 'Beginner', 
      title: 'Commodity Trading', 
      desc: 'In this course, you will learn simply and interactively all the key takeaways a trader should know before starting an exciting career in the commodities market.',
      lessons: '4 LESSONS',
      time: '00:08:03',
      icon: <CheckSquare size={48} className="text-white" />
    },
    { 
      level: 'Beginner', 
      title: 'CFDs', 
      desc: 'Since their introduction of CFDs (Contracts for Differences) to the financial world, their popularity has surged higher with several traders.',
      lessons: '8 LESSONS',
      time: '00:23:45',
      icon: <PieChartIcon size={48} className="text-white" />
    },
    { 
      level: 'Beginner', 
      title: 'Social Trading', 
      desc: 'Social trading is a type of trading where investors can observe the trading strategies of other traders. Become a copier and replicate provider\'s trades, where a provider is an experienced trader who shares their investment strategies.',
      lessons: '3 LESSONS',
      time: '00:06:53',
      icon: <Compass size={48} className="text-white" />
    },
    { 
      level: 'Expert', 
      title: 'Trading Styles', 
      desc: 'This course will unveil a wide range of trading styles for all types of traders.',
      lessons: '3 LESSONS',
      time: '00:09:53',
      icon: <TrendingUp size={48} className="text-white" />
    },
    { 
      level: 'Expert', 
      title: 'Trading Psychology', 
      desc: 'In this groundbreaking course, you will learn how to overcome the greatest enemy of trading: emotional fear, into the mindset of a successful trader, and build confidence in your trading.',
      lessons: '8 LESSONS',
      time: '00:30:27',
      icon: <User size={48} className="text-white" />
    },
    { 
      level: 'Expert', 
      title: 'Fundamental Analysis', 
      desc: 'Unlock the essentials of fundamental analysis, learn to assess market conditions, economic data, and financial reports.',
      lessons: '6 LESSONS',
      time: '00:08:35',
      icon: <Layers size={48} className="text-white" />
    },
    { 
      level: 'Expert', 
      title: 'Technical Analysis', 
      desc: 'This technical analysis course is intended for those who want to develop their trading edge and sharpen their technical analysis skills to make better trading decisions.',
      lessons: '16 LESSONS',
      time: '00:38:23',
      icon: <MonitorPlay size={48} className="text-white" />
    },
    { 
      level: 'Expert', 
      title: 'Technical Indicators', 
      desc: 'The most common methods to analyze the financial markets: indicators, candlesticks, charting and more.',
      lessons: '6 LESSONS',
      time: '00:26:54',
      icon: <BookOpen size={48} className="text-white" />
    },
    { 
      level: 'Platform tutorials', 
      title: 'MT4', 
      desc: 'In this course, you will learn everything you need to know about the MetaTrader Platform: how to open trades, manage your trading account, use risk management tools and much more.',
      lessons: '8 LESSONS',
      time: '00:05:46',
      icon: <MonitorPlay size={48} className="text-white" />
    },
    { 
      level: 'Platform tutorials', 
      title: 'MT4 Mobile', 
      desc: 'In this course, you will learn everything you need to know about the MetaTrader Platform: how to open trades, manage your trading account, use risk management tools and much more.',
      lessons: '1 LESSONS',
      time: '00:06:52',
      icon: <Smartphone size={48} className="text-white" />
    },
    { 
      level: 'Platform tutorials', 
      title: 'MT5', 
      desc: 'In this course, you will learn everything you need to know about the MetaTrader Platform: how to open trades, manage your trading account, use risk management tools and much more.',
      lessons: '7 LESSONS',
      time: '00:08:29',
      icon: <MonitorPlay size={48} className="text-white" />
    },
  ];

  const filteredCourses = filter === 'All' ? courses : courses.filter(c => c.level === filter);

  return (
    <PageShell>
      <div className="mb-4">
        <Breadcrumbs items={breadcrumbItems} />
      </div>
      
      <div className="bg-[#0f172a] min-h-[800px] p-8">
        
        {loading ? (
          <div className="flex justify-center items-center h-[500px]">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-sm animate-bounce"></div>
              <div className="w-3 h-3 bg-green-500 rounded-sm animate-bounce" style={{animationDelay: '0.1s'}}></div>
              <div className="w-3 h-3 bg-slate-300 rounded-sm animate-bounce" style={{animationDelay: '0.2s'}}></div>
            </div>
          </div>
        ) : (
          <div className="max-w-[1200px] mx-auto">
            
            {/* Filters */}
            <div className="flex gap-6 mb-8 text-[12px] font-medium border-b border-slate-700 pb-4">
              {['All', 'Beginner', 'Expert', 'Platform tutorials'].map(cat => (
                <button 
                  key={cat}
                  className={`${filter === cat ? 'text-blue-500' : 'text-slate-400 hover:text-white'}`}
                  onClick={() => setFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="text-[10px] text-slate-400 mb-6 font-bold tracking-wide">VIDEO COURSES</div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredCourses.map((course, idx) => (
                <div key={idx} className="bg-[#1e293b] rounded-lg shadow-lg overflow-hidden flex flex-col hover:bg-[#253246] transition-colors cursor-pointer border border-[#1e293b] hover:border-slate-600">
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="inline-block bg-[#8cc63f] text-black text-[10px] font-bold px-2 py-0.5 rounded-sm mb-3">
                          {course.level}
                        </span>
                        <h3 className="text-white text-2xl font-bold max-w-[200px] leading-tight">{course.title}</h3>
                      </div>
                      <div className="opacity-80 drop-shadow-md">
                        {course.icon}
                      </div>
                    </div>
                    
                    <p className="text-[12px] text-slate-400 mt-4 leading-relaxed line-clamp-3">
                      {course.desc}
                    </p>
                  </div>
                  
                  <div className="px-6 py-4 border-t border-slate-700/50 flex justify-between items-center text-[#8cc63f] text-[10px] font-bold">
                    <div className="flex items-center gap-1">
                      <MonitorPlay size={12} />
                      {course.lessons}
                    </div>
                    <div className="flex items-center gap-1">
                      <MonitorPlay size={12} />
                      {course.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

      </div>
    </PageShell>
  );
}

// Quick helper for pie chart icon
function PieChartIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
      <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
    </svg>
  );
}
