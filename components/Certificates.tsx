import React from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';
import ScrollReveal from './animations/ScrollReveal';
import StaggerContainer from './animations/StaggerContainer';
import { Award, ExternalLink } from 'lucide-react';

const Certificates: React.FC = () => {
    const [selectedCert, setSelectedCert] = React.useState<string | null>(null);

    // Handle Escape key & Lock scroll
    React.useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setSelectedCert(null);
            }
        };

        if (selectedCert) {
            // Lock scroll
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleEsc);
        }

        return () => {
            // Unlock scroll saat modal ditutup
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', handleEsc);
        };
    }, [selectedCert]);

    const certificates = [
        {
            title: "RevoU Software Engineering (Fundamental)",
            image: "/sertifikat/Sertifikat RevoU Software Enginering 1.jpg",
            category: "Software Engineering",
            description: "Menguasai dasar-dasar pengembangan perangkat lunak dan web development. (19 Sep 2025)"
        },
        {
            title: "RevoU Software Engineering (Advanced)",
            image: "/sertifikat/Sertifikat RevoU Software Enginering 2.jpg",
            category: "Software Engineering",
            description: "Memahami arsitektur sistem dan teknik pengembangan perangkat lunak tingkat lanjut. (3 Okt 2025)"
        },
        {
            title: "RevoU Digital Marketing (Strategy)",
            image: "/sertifikat/Sertifikat RevoU Digital Marketing 1.jpg",
            category: "Digital Marketing",
            description: "Menyusun dan menerapkan strategi pemasaran digital secara efektif. (10 Okt 2025)"
        },
        {
            title: "RevoU Digital Marketing (Advanced)",
            image: "/sertifikat/Sertifikat RevoU Digital Marketing 2.jpg",
            category: "Digital Marketing",
            description: "Menganalisis data dan mengoptimalkan kinerja kampanye pemasaran secara mendalam. (17 Okt 2025)"
        },
        {
            title: "Universitas Satya Negara Indonesia - Frame to Fame",
            image: "/sertifikat/Sertifikat Frame to Fame.png",
            category: "Creative",
            description: "Memahami proses pembuatan animasi dan membuka peluang karier sebagai creator berbasis animasi. (15 Jul 2025)"
        }
    ];

    return (
        <section className="py-20 px-6 lg:px-20 bg-white/5 backdrop-blur-sm border-y border-white/10">
            <div className="max-w-7xl mx-auto">
                <ScrollReveal className="text-center mb-16">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Award className="w-8 h-8 text-electric-300" />
                        <h2 className="text-3xl lg:text-4xl font-bold text-white">
                            Sertifikasi & Penghargaan
                        </h2>
                    </div>
                    <p className="text-white/70 max-w-2xl mx-auto">
                        Validasi keahlian melalui sertifikasi profesional resmi
                    </p>
                </ScrollReveal>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            whileHover={{ y: -5 }}
                            onClick={() => setSelectedCert(cert.image)}
                            className="group bg-white/10 rounded-2xl overflow-hidden border border-white/20 hover:border-electric-500/50 transition-all duration-300 shadow-lg cursor-pointer"
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
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 text-xs font-bold bg-electric-500 text-white rounded-full shadow-lg">
                                        {cert.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-electric-300 transition-colors">
                                    {cert.title}
                                </h3>
                                <p className="text-sm text-white/70">
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
                            className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors"
                        >
                            Tutup [Esc]
                        </button>
                        <img
                            src={selectedCert}
                            alt="Certificate Full View"
                            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl border border-white/10"
                        />
                    </motion.div>
                </div>,
                document.body
            )}
        </section>
    );
};

export default Certificates;
