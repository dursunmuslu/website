import React, { useEffect, useRef } from 'react';
import './Yetenekler.css';

function Yetenekler() {
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
        <section ref={sectionRef} id="yetenekler" className="section-content">
            <div className="content-flow">
                <h1 className="title-glow">Yetenekler</h1>
                <div className="skills-list">
                    <div className="skill-item">Java</div>
                    <div className="skill-item">Spring Boot</div>
                    <div className="skill-item">React</div>
                    <div className="skill-item">SQL</div>
                    <div className="skill-item">C#</div>
                    <div className="skill-item">Python</div>
                    <div className="skill-item">Docker</div>
                    <div className="skill-item">PostgreSql</div>
                </div>
            </div>
        </section>
    );
}

export default Yetenekler;