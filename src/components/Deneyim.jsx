import React, { useEffect, useRef } from 'react';
import './Deneyim.css';

function Deneyim() {
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
        <section ref={sectionRef} id="deneyim" className="section-content">
            <div className="content-flow">
                <h1 className="title-glow">Deneyim</h1>
                <div className="experience-list">
                    <div className="experience-item">
                        <h3>Stajyer - KRON Teknoloji</h3>
                        <p>Temmuz 2024 - Eylül 2024 | Siber güvenlik ve erişim yönetimi alanında çözümler geliştiren Kron Teknoloji’nin Bilkent Cyberpark
                            ofisinde stajımı Stajyer Software Developer pozisyonunda yaptım. Burada JAVA (Spring Boot) ve
                            React ile Full-Stack projeler geliştirdim. Network teknolojileri üzerine çalışmalarda bulunup web
                            projelerimde bunları kullandım. Docker ve Git gibi teknolojiler kullanarak da gerçek çalışma ortamı
                            için kendimi geliştirme fırsatı buldum.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Deneyim;