//Source code generated by AppGPT (www.appgpt.tech)
import { mergeTranslations } from 'ra-core';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import enOriginal from 'ra-language-english';
import frOriginal from 'ra-language-french';

const enResources = {
  resources: {
    Users: {
      name: 'Users',
      fields: {
        name: 'Name',
        email: 'Email',
        password: 'Password',
        accountNumber: 'Account Number',
        accountName: 'Account Name',
        id: 'id',
      },
    },
    Machines: {
      name: 'Machines',
      fields: {
        machineName: 'Machine Name',
        investmentCost: 'Investment Cost',
        dailyIncome: 'Daily Income',
        duration: 'Duration',
        totalReturn: 'Total Return',
        id: 'id',
      },
    },
    Investments: {
      name: 'Investments',
      fields: {
        userId: 'User Id',
        machineId: 'Machine Id',
        investmentDate: 'Investment Date',
        amountInvested: 'Amount Invested',
        investmentStatus: 'Investment Status',
        id: 'id',
      },
    },
    DailyEarnings: {
      name: 'Daily Earnings',
      fields: {
        earningsDate: 'Earnings Date',
        userId: 'User Id',
        machineId: 'Machine Id',
        amountEarned: 'Amount Earned',
        investmentId: 'Investment Id',
        id: 'id',
      },
    },
  },
};
const frResources = {
  resources: {
    Users: {
      name: 'Users (fr)',
      fields: {
        name: 'Name (fr)',
        email: 'Email (fr)',
        password: 'Password (fr)',
        accountNumber: 'Account Number (fr)',
        accountName: 'Account Name (fr)',
        id: 'id',
      },
    },
    Machines: {
      name: 'Machines (fr)',
      fields: {
        machineName: 'Machine Name (fr)',
        investmentCost: 'Investment Cost (fr)',
        dailyIncome: 'Daily Income (fr)',
        duration: 'Duration (fr)',
        totalReturn: 'Total Return (fr)',
        id: 'id',
      },
    },
    Investments: {
      name: 'Investments (fr)',
      fields: {
        userId: 'User Id (fr)',
        machineId: 'Machine Id (fr)',
        investmentDate: 'Investment Date (fr)',
        amountInvested: 'Amount Invested (fr)',
        investmentStatus: 'Investment Status (fr)',
        id: 'id',
      },
    },
    DailyEarnings: {
      name: 'Daily Earnings (fr)',
      fields: {
        earningsDate: 'Earnings Date (fr)',
        userId: 'User Id (fr)',
        machineId: 'Machine Id (fr)',
        amountEarned: 'Amount Earned (fr)',
        investmentId: 'Investment Id (fr)',
        id: 'id',
      },
    },
  },
};

const en = mergeTranslations(enOriginal, enResources);
const fr = mergeTranslations(frOriginal, frResources);

const translations = { en, fr };
export const i18nProvider = polyglotI18nProvider(
  (locale) => translations[locale],
  'en', //default locale
  [
    { locale: 'en', name: 'English' },
    { locale: 'fr', name: 'Français' },
  ],
);
