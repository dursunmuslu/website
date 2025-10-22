import React, { useEffect } from 'react';
import './App.css';
import Hakkimda from './components/Hakkimda';
import Egitim from './components/Egitim';
import Projelerim from './components/Projelerim';
import Deneyim from './components/Deneyim';
import Yetenekler from './components/Yetenekler';
import Sertifikalar from './components/Sertifikalar';
import Iletisim from './components/Iletisim';

function App() {
    useEffect(() => {
        const sections = document.querySelectorAll('section:not(#hakkimda)');
        const options = {
            threshold: 0.1,
            rootMargin: '0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    entry.target.classList.remove('hidden');
                } else {
                    entry.target.classList.remove('visible');
                    entry.target.classList.add('hidden');
                }
            });
        }, options);

        sections.forEach(section => {
            observer.observe(section);
        });

        return () => {
            sections.forEach(section => {
                observer.unobserve(section);
            });
        };
    }, []);

    return (
        <div className="app-wrapper">
            <nav className="custom-navbar">
                <div className="nav-container">
                    <div className="nav-brand">
                        <span className="logo-text">DM</span>
                        <span className="name-text">Dursun Muslu</span>
                    </div>
                    <ul className="nav-links">
                        <li><a href="#hakkimda" className="nav-link">Hakkımda</a></li>
                        <li><a href="#egitim" className="nav-link">Eğitim</a></li>
                        <li><a href="#projelerim" className="nav-link">Projeler</a></li>
                        <li><a href="#deneyim" className="nav-link">Deneyim</a></li>
                        <li><a href="#yetenekler" className="nav-link">Yetenekler</a></li>
                        <li><a href="#sertifikalar" className="nav-link">Sertifikalar</a></li>
                        <li><a href="#iletisim" className="nav-link">İletişim</a></li>
                    </ul>
                </div>
            </nav>

            <main className="main-content">
                <section id="hakkimda"><Hakkimda/></section>
                <section id="egitim"><Egitim/></section>
                <section id="projelerim"><Projelerim/></section>
                <section id="deneyim"><Deneyim/></section>
                <section id="yetenekler"><Yetenekler/></section>
                <section id="sertifikalar"><Sertifikalar/></section>
                <section id="iletisim"><Iletisim/></section>
            </main>
        </div>
    );
}

export default App;