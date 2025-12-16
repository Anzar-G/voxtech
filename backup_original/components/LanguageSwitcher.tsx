import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="flex items-center gap-2 p-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <button
                onClick={() => changeLanguage('id')}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${i18n.language === 'id' || i18n.language.startsWith('id')
                        ? 'bg-electric-500 text-white shadow-lg'
                        : 'text-white/60 hover:text-white'
                    }`}
                aria-label="Switch to Indonesian"
            >
                🇮🇩 ID
            </button>
            <button
                onClick={() => changeLanguage('en')}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${i18n.language === 'en' || i18n.language.startsWith('en')
                        ? 'bg-electric-500 text-white shadow-lg'
                        : 'text-white/60 hover:text-white'
                    }`}
                aria-label="Switch to English"
            >
                🇬🇧 EN
            </button>
        </div>
    );
};

export default LanguageSwitcher;
