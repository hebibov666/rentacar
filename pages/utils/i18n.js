// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Örnek dil çevirileri
const resources = {
  en: {
    translation: {
      "Maşınlar": "Cars",
      "Haqqımızda":"About us",
      "Əlaqə":"Contact",
      "Hamısı":"All",
      "Ekonom":"Econom",
      "Biznes":"Business",
      "Minivan":"Minibus",
      "Vip":"Vip",
      "Daha çox":"More",
      "Sosial media":"Social media",
      "Bu kateqoriyada maşın yoxdur":"No car in this category",
      "Oturacaq sayı":"Seat",
      "Yanacaq növü":"Fuel type",
      "Sürətlər qutusu":"Gearbox",
      "Buraxılış ili":"Year",
      "Ətraflı":"Detail",
      "Açıqlama":"Description",
      "Zəng et":"Call"
      // Diğer çeviriler
    }
  },
  az: {
    translation: {
      "Maşınlar": "Maşınlar",
      "Haqqımızda":"Haqqımızda",
      "Əlaqə":"Əlaqə",
      "Hamısı":"Hamısı",
      "Ekonom": "Ekonom",
      "Biznes": "Biznes",
      "Minivan": "Minivan",
      "Vip":"Vip",
      "Daha çox":"Daha çox",
      "Sosial media":"Sosial media",
      "Bu kateqoriyada maşın yoxdur":"Bu kateqoriyada maşın yoxdur",
      "Oturacaq sayı": "Oturacaq sayı",
      "Yanacaq növü":"Yanacaq növü",
      "Sürətlər qutusu":"Sürətlər qutusu",
      "Buraxılış ili":"Buraxılış ili",
      "Ətraflı":"Ətraflı",
      "Açıqlama": "Açıqlama",
      "Zəng et":"Zəng et"
      // Diğer çeviriler
    }
  }
};

i18n
  .use(initReactI18next) // react için i18n başlatma
  .init({
    resources,
    lng: 'az', // varsayılan dil
    fallbackLng: 'az', // yedek dil
    interpolation: {
      escapeValue: false // React nesnelerini doğrudan göstermek için
    }
  });

export default i18n;
