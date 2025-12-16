import React from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';
import ScrollReveal from './animations/ScrollReveal';
import StaggerContainer from './animations/StaggerContainer';
import { Award, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';


interface Certificate {
    title: string;
    image: string;
    category: string;
    description: string;
}

const Certificates: React.FC = () => {
    const { t } = useTranslation();
    const [selectedCert, setSelectedCert] = React.useState<string | null>(null);
    const scrollPositionRef = React.useRef(0);

    // Handle Escape key & Lock scroll
    React.useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setSelectedCert(null);
            }
        };

        if (selectedCert) {
            // Save current scroll position
            scrollPositionRef.current = window.scrollY;
            // Lock scroll
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollPositionRef.current}px`;
            document.body.style.width = '100%';
            window.addEventListener('keydown', handleEsc);
        } else {
            // Restore scroll position when modal closes
            const scrollY = scrollPositionRef.current;
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            if (scrollY > 0) {
                window.scrollTo(0, scrollY);
            }
        }

        return () => {
            // Cleanup
            window.removeEventListener('keydown', handleEsc);
        };
    }, [selectedCert]);

    const certificatesRaw = t('certificates.items', { returnObjects: true }) as any[];
    const certificates: Certificate[] = [
        { image: "/sertifikat/Sertifikat RevoU Software Enginering 1-640w.webp" },
        { image: "/sertifikat/Sertifikat RevoU Software Enginering 2-640w.webp" },
        { image: "/sertifikat/Sertifikat RevoU Digital Marketing 1-640w.webp" },
        { image: "/sertifikat/Sertifikat RevoU Digital Marketing 2-640w.webp" },
        { image: "/sertifikat/Sertifikat Frame to Fame-640w.webp" }
    ].map((item, index) => ({
        ...item,
        title: certificatesRaw[index]?.title || '',
        category: certificatesRaw[index]?.category || '',
        description: certificatesRaw[index]?.description || ''
    }));

    return (
        <section className="py-20 px-6 lg:px-20 bg-electric-500/5 backdrop-blur-sm border-y border-electric-500/10">
            <div className="max-w-7xl mx-auto">
                <ScrollReveal className="text-center mb-16">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Award className="w-8 h-8 text-electric-300" />
                        <h2 className="text-3xl lg:text-4xl font-bold text-white">
                            {t('certificates.title')}
                        </h2>
                    </div>
                    <p className="text-blue-200 max-w-2xl mx-auto">
                        {t('certificates.subtitle')}
                    </p>
                </ScrollReveal>

                <StaggerContainer className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            whileHover={{ y: -5 }}
                            onClick={() => setSelectedCert(cert.image)}
                            className="group bg-electric-500/10 rounded-2xl overflow-hidden border border-electric-500/20 hover:border-electric-500/50 transition-all duration-300 shadow-lg cursor-pointer"
                        >
                            {/* Image Container */}
                            <div className="relative aspect-[4/3] overflow-hidden bg-navy-900">
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    onError={(e) => {
                                        // Fallback if image fails
                                        (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/1e293b/white?text=Sertifikat';
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent opacity-60" />
                                <div className="absolute inset-0 bg-electric-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <ExternalLink className="w-8 h-8 text-white drop-shadow-lg" />
                                </div>

                                {/* Overlay Content */}
                                <div className="absolute top-2 left-2 lg:top-4 lg:left-4">
                                    <span className="px-2 py-0.5 lg:px-3 lg:py-1 text-[10px] lg:text-xs font-bold bg-electric-500 text-white rounded-full shadow-lg">
                                        {cert.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-4 lg:p-6">
                                <h3 className="text-sm lg:text-xl font-bold text-white mb-1 lg:mb-2 group-hover:text-electric-300 transition-colors line-clamp-2">
                                    {cert.title}
                                </h3>
                                <p className="text-[10px] lg:text-sm text-blue-200 line-clamp-3 leading-relaxed">
                                    {cert.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </StaggerContainer>
            </div>

            {/* Lightbox Modal */}
            {selectedCert && ReactDOM.createPortal(
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-10"
                    onClick={() => setSelectedCert(null)}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="relative max-w-5xl w-full max-h-full flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedCert(null)}
                            className="absolute -top-12 right-0 text-blue-200 hover:text-white transition-colors"
                        >
                            {t('certificates.close')}
                        </button>
                        <img
                            src={selectedCert}
                            alt="Certificate Full View"
                            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl border border-electric-500/10"
                        />
                    </motion.div>
                </div>,
                document.body
            )}
        </section>
    );
};

export default Certificates;
