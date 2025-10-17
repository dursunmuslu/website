import React, { useEffect, useRef } from 'react';
import './Iletisim.css';

// 1. React Icons kütüphanesinden gerekli ikonları içeri aktarıyoruz
import { FaInstagram, FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

// İkonları eşleştiren bir obje oluşturuyoruz
const ICONS = {
    Instagram: FaInstagram,
    Email: FaEnvelope,
    Telefon: FaPhone,
    LinkedIn: FaLinkedin,
    GitHub: FaGithub,
};

// Yeni bileşen: İletişim detaylarını link ve ikon yapısıyla gösterir
const ContactItem = ({ label, value, href }) => {
    // İkonu label'a göre al
    const IconComponent = ICONS[label];

    // İkona ve tüm p etiketine tıklayınca linke gitme işlevi
    const handleClick = () => {
        window.open(href, '_blank');
    };

    return (
        // İkona da tıklanabilirliği eklemek için onClick'i p etiketine taşıdık
        <p onClick={handleClick} title={label} className="contact-item">
            {/* İkonu sol tarafa yerleştiriyoruz */}
            {IconComponent && <IconComponent className="contact-icon" size={24} />}

            <span className="contact-text">
                {label}: **{value}**
            </span>
        </p>
    );
};

function Iletisim() {
    const sectionRef = useRef(null);

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
        <section ref={sectionRef} id="iletisim" className="section-content">
            <div className="content-flow">
                <h1 className="title-glow">İletişim</h1>
                <div className="contact-details">
                    <ContactItem
                        label="Instagram"
                        value="/dursunmuslu"
                        href="https://www.instagram.com/dursunmuslu/"
                    />
                    <ContactItem
                        label="Email"
                        value="dursunmuslu.tr@gmail.com"
                        href="mailto:dursunmuslu.tr@gmail.com"
                    />
                    <ContactItem
                        label="Telefon"
                        value="+90 545 491 41 54"
                        href="tel:+905454914154"
                    />
                    <ContactItem
                        label="LinkedIn"
                        value="/in/dursunmuslu"
                        href="https://linkedin.com/in/dursunmuslu"
                    />
                    <ContactItem
                        label="GitHub"
                        value="/dursunmuslu"
                        href="https://github.com/dursunmuslu"
                    />
                </div>
            </div>
        </section>
    );
}

export default Iletisim;