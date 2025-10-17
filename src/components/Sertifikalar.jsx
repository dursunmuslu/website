import React, { useState, useEffect, useRef } from 'react';
import './Sertifikalar.css';

// Sertifika Verisi (Toplam 8 Sertifika)
const CERTIFICATES = [
    {
        id: 1,
        title: "Web Geliştirme",
        issuer: "Turkcell Geleceği Yazanlar, 2025",
        image: "/web.png", // Güncellendi
    },
    {
        id: 2,
        title: "AĞ Temelleri",
        issuer: "BTK Akademi, 2024",
        image: "/ağ.png", // Güncellendi
    },
    {
        id: 3,
        title: "İleri Seviye JAVA",
        issuer: "BTK Akademi, 2024",
        image: "/java.png", // Güncellendi
    },
    // --- Yeni Eklenen 5 Sertifika ---
    {
        id: 4,
        title: "Temel Python Programlama",
        issuer: "Turkcell Geleceği Yazanlar, 2024",
        image: "/pyt.png",
    },
    {
        id: 5,
        title: "Web Uygulama Güvenliği",
        issuer: "BTK Akademi, 2024",
        image: "/webgüvenlik.png",
    },
    {
        id: 6,
        title: "Telekomünikasyon Sistemleri ve Güvenliği",
        issuer: "BTK Akademi, 2024",
        image: "/tele.png",
    },
    {
        id: 7,
        title: "Siber Güvenlik",
        issuer: "BTK Akademi, 2024",
        image: "/siber.png",
    },
    {
        id: 8,
        title: "Java Programlama 301",
        issuer: "BTK Akademi, 2024",
        image: "/java1.png",
    },
];

// Modal Bileşeni (Değişmedi)
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
                            {/* Tüm görseller artık '/örnek.jpg' kullanıyor */}
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