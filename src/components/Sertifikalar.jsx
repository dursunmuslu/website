import React, { useState, useEffect, useRef } from 'react';
import './Sertifikalar.css';

// Sertifika Verisi
const CERTIFICATES = [
    {
        id: 1,
        title: "Web Geliştirme",
        issuer: "Turkcell Geleceği Yazanlar, 2025",
        image: "/web.png",
    },
    {
        id: 2,
        title: "AI Temelleri",
        issuer: "BTK Akademi, 2024",
        image: "/ağ.png",
    },
    {
        id: 3,
        title: "İleri Seviye JAVA",
        issuer: "BTK Akademi, 2024",
        image: "/java.png",
    },
];

// Modal Bileşeni
const CertificateModal = ({ certificate, onClose }) => {
    if (!certificate) return null;

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>&times;</button>
                <h2>{certificate.title}</h2>
                <p className="issuer-text">Veren Kurum: {certificate.issuer}</p>
                {/* Tıklayınca büyüyen görsel burası */}
                <img src={certificate.image} alt={certificate.title} className="modal-certificate-image" />
            </div>
        </div>
    );
};

function Sertifikalar() {
    const sectionRef = useRef(null);
    // Hangi sertifikanın seçildiğini tutmak için state
    const [selectedCertificate, setSelectedCertificate] = useState(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} id="sertifikalar" className="section-content">
            <div className="content-flow">
                <h1 className="title-glow">Sertifikalar</h1>
                <div className="certificates-grid">
                    {CERTIFICATES.map(cert => (
                        <div
                            key={cert.id}
                            className="certificate-card"
                            onClick={() => setSelectedCertificate(cert)} // Tıklanınca Modalı Aç
                        >
                            <img src={cert.image} alt={cert.title} />
                            <p>{cert.title} - {cert.issuer}</p>
                        </div>
                    ))}
                </div>
            </div>
            {/* Modal bileşenini ekledik */}
            <CertificateModal
                certificate={selectedCertificate}
                onClose={() => setSelectedCertificate(null)}
            />
        </section>
    );
}

export default Sertifikalar;