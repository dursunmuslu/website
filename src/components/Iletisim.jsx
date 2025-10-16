import React, { useEffect, useRef } from 'react';
import './Iletisim.css';

// Yeni bileşen: İletişim detaylarını link yapısıyla gösterir
const ContactItem = ({ label, value, href }) => (
    <p onClick={() => window.open(href, '_blank')} title={label}>
        {label}: **{value}**
    </p>
);

function Iletisim() {
    const sectionRef = useRef(null);

    useEffect(() => {
        // IntersectionObserver kodu aynı kalır...
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