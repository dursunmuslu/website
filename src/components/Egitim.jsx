import React, { useEffect, useRef } from 'react';
import './Egitim.css';

function Egitim() {
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
        <section ref={sectionRef} id="egitim" className="section-content">
            <div className="content-flow">
                <h1 className="title-glow">Eğitim</h1>
                <div className="education-list">
                    <div className="education-item">
                        <h3>Bilgisayar Mühendisliği - Bandırma Onyedi Eylül Üniversitesi</h3>
                        <p>2021 - 2025</p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Egitim;