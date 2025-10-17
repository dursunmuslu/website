import React from 'react';
import './Hakkimda.css';

function Hakkimda() {
    return (
        <section id="hakkimda" className="section-content">
            <div className="content-flow">
                <div className="photo-wrapper">
                    <div className="photo-frame">
                        <img src="/vesika.jpg" alt="Dursun Muslu" className="profile-photo" />
                        <div className="photo-overlay"></div>
                    </div>
                </div>
                <div className="text-flow">
                    <h1 className="title-glow">Merhaba, Ben Dursun MUSLU</h1>
                    <p className="subtitle-text">Full-Stack Geliştirici & AI Meraklısı</p>
                    <p className="intro-text">
                        Yeni mezun bir bilgisayar mühendisi olarak yazılım geliştirme alanında kendimi sürekli geliştiren,
                        öğrenmeye açık ve yenilikçi çözümler üretmeye hevesli biriyim. Full-stack projeler üzerinde
                        geliştirmeler yapmanın yanı sıra yapay zeka alanında da çalışmalar yürütüyorum. Web alanında
                        çeşitli eğitimler alarak kendimi geliştirdim ve Java ile çalışıyorum. Diğer dillere temel
                        seviyede hakim olmak için çabalıyorum. Halihazırda bir mobil uygulamam var ve bu süreçte
                        problem çözme, analitik düşünme ile proje yönetimi becerilerimi geliştirdim. Güncel
                        teknolojilerle iş hayatına hazırlanmaya devam ediyorum.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Hakkimda;