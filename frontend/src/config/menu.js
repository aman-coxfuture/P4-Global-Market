import { Trophy, Briefcase, Wallet, Users, User, Download, Calendar, Calculator, BookOpen, BarChart2, PieChart, TrendingUp } from 'lucide-react';

export const PORTAL_MENU = [
  {
    group: "Trader's Menu",
    roles: ['user', 'ib'],
    items: [
      { id: 'loyalty', labelKey: 'menu.loyalty', icon: Trophy, route: '/portal/loyalty', roles: ['user'] },
      { 
        id: 'accounts', 
        labelKey: 'menu.accounts', 
        icon: Briefcase, 
        route: '/portal/accounts', 
        roles: ['user', 'ib'],
        subItems: [
          { id: 'open-demo', labelKey: 'portal.open_demo', route: '/portal/accounts/open-demo' },
          { id: 'open-live', labelKey: 'portal.open_live', route: '/portal/accounts/open-live' },
          { id: 'accounts-overview', labelKey: 'portal.accounts_overview', route: '/portal/accounts' }
        ]
      },
      { 
        id: 'funds', 
        labelKey: 'menu.funds', 
        icon: Wallet, 
        route: '/portal/funds', 
        roles: ['user', 'ib'],
        subItems: [
          { id: 'deposit', labelKey: 'menu.deposit_funds', route: '/portal/funds/deposit' },
          { id: 'withdraw', labelKey: 'menu.withdraw_funds', route: '/portal/funds/withdraw' },
          { id: 'transfer', labelKey: 'menu.transfer_funds', route: '/portal/funds/transfer' },
          { id: 'history', labelKey: 'menu.transactions_history', route: '/portal/funds/history' },
          { id: 'payment-details', labelKey: 'menu.payment_details', route: '/portal/funds/payment-details' }
        ]
      },
      { id: 'social', labelKey: 'menu.social', icon: Users, route: '/portal/social', roles: ['user'] },
      { 
        id: 'profile', 
        labelKey: 'menu.profile', 
        icon: User, 
        route: '/portal/profile', 
        roles: ['user', 'ib'],
        subItems: [
          { id: 'profile-main', labelKey: 'menu.profile', route: '/portal/profile' },
          { id: 'upload-documents', labelKey: 'portal.upload_documents', route: '/portal/profile/documents' },
          { id: 'my-agreements', labelKey: 'portal.agreements', route: '/portal/profile/agreements' },
          { id: 'messages', labelKey: 'portal.messages', route: '/portal/profile/messages' },
          { id: 'reverse-solicitation', labelKey: 'portal.reverse_solicitation', route: '/portal/profile/reverse-solicitation' },
          { id: 'economic-profile', labelKey: 'portal.economic_details', route: '/portal/profile/economic-details' }
        ]
      },
      { id: 'downloads', labelKey: 'menu.downloads', icon: Download, route: '/portal/downloads', roles: ['user', 'ib'] },
      { id: 'calendar', labelKey: 'menu.calendar', icon: Calendar, route: '/portal/calendar', roles: ['user', 'ib'] },
      { id: 'calculator', labelKey: 'menu.calculator', icon: Calculator, route: '/portal/calculator', roles: ['user', 'ib'] },
      { 
        id: 'education', 
        labelKey: 'EDUCATION', 
        icon: BookOpen, 
        route: '/portal/education/ebooks', 
        roles: ['user', 'ib'],
        subItems: [
          { id: 'ebooks', labelKey: 'e-Books', route: '/portal/education/ebooks' },
          { id: 'video-courses', labelKey: 'Video Courses', route: '/portal/education/video-courses' },
          { id: 'glossary', labelKey: 'Glossary', route: '/portal/education/glossary' },
          { id: 'podcasts', labelKey: 'Podcasts', route: '/portal/education/podcasts' },
          { id: 'newsfeed', labelKey: 'Newsfeed', route: '/portal/education/newsfeed' },
          { id: 'daily-news', labelKey: 'Daily News', route: '/portal/education/daily-news' }
        ]
      },
      {
        id: 'pamm', 
        labelKey: 'PAMM MENU', 
        icon: BarChart2,
        roles: ['user', 'ib'],
        subItems: [
          { id: 'pamm-manager', labelKey: 'Money Manager Portal', route: 'https://pamm-br.m4markets.site/app/auth/manager', external: true },
          { id: 'pamm-investor', labelKey: 'Investor Portal', route: 'https://pamm-br.m4markets.site/app/auth/investor', external: true }
        ]
      },
    ]
  },
  {
    group: "IB Menu",
    roles: ['ib', 'user'], // I will add user role temporarily so the user can see it without changing their role in state
    items: [
      { id: 'ib-dashboard', labelKey: 'Dashboard', icon: PieChart, route: '/portal/ib/dashboard', roles: ['ib', 'user'] },
      { id: 'ib-statistics', labelKey: 'Statistics', icon: TrendingUp, route: '/portal/ib/statistics', roles: ['ib', 'user'] },
      { 
        id: 'ib-marketing', 
        labelKey: 'Marketing Tools', 
        icon: Briefcase, 
        route: '/portal/ib/marketing/links', 
        roles: ['ib', 'user'],
        subItems: [
          { id: 'ib-links', labelKey: 'Links', route: '/portal/ib/marketing/links' },
          { id: 'ib-banners', labelKey: 'Banners', route: '/portal/ib/marketing/banners' }
        ]
      },
      { 
        id: 'ib-reports', 
        labelKey: 'Reports', 
        icon: BarChart2, 
        route: '/portal/ib/reports/accounts-commission', 
        roles: ['ib', 'user'],
        subItems: [
          { id: 'ib-accounts-commission', labelKey: 'Accounts Commission', route: '/portal/ib/reports/accounts-commission' },
          { id: 'ib-clients-commission', labelKey: 'Clients Commission', route: '/portal/ib/reports/clients-commission' }
        ]
      }
    ]
  }
];
