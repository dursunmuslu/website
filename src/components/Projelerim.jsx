import React, { useState } from 'react';
import './Projelerim.css';

const PROJECTS = [
    {
        id: 1,
        title: "Proje 1: JAVA ile SSH Bağlantısı",
        image: "/ssh.png",
        shortDesc: "Java ve React kullanarak SSH bağlantısı ile cihaz yönetimi sağlayan, WebSocket ile canlı veri gösteren bir web arayüzü.",
        fullDesc: "Bu projemde backend kısmını Java ve Frontend kısmını da React ile yazıp SSH bağlantısı ile cihaz yönetimi ve kontrolü sağladığım bir web arayüzü oluşturdum. WebSocket ile verileri canlı olarak grafiksel şekilde de görüntülemekteyim. Bağlı olduğu cihazda her türlü terminal sorgusu ve komutları çalışmaktadır. Hedef makine için de sanal makineler kurup testlerimi orada gerçekleştirdim.",
    },
    {
        id: 2,
        title: "Proje 2: KELİME OYUNU UYGULAMASI",
        image: "/oyun.jpg",
        shortDesc: "Kotlin ile Android ortamında geliştirilmiş, Firebase altyapılı multiplayer kelime oyunu. Şu an kapalı test sürecinde.",
        fullDesc: "Kotlin ile Android Studio ortamında android cihazlar için geliştirmiş olduğum bir kelime oyunum bulunmaktadır. Multiplayer bir oyun olarak tasarlayıp Play Store’ a yükledim. Firebase kullanarak oyuncuları odalarda buluşturdum. Şu an kapalı test sürecinde olup farklı cihazlarda da sorunsuz çalışabilmektedir.",
    },
    {
        id: 3,
        title: "Proje 3: HAREKET TAKİBİ TESPİTİ",
        image: "/ethereal.png",
        shortDesc: "Yapay zeka projesi. Kameradan alınan anlık görüntülerde hareket tespiti yaparak hareketli nesneyi ayırt eder ve görüntüleri kullanıcıya mail ile anlık iletir.",
        fullDesc: "Yapay zeka projesi olarak geliştirdiğim bu projemde kamera ile almış olduğum anlık görüntüde bir hareket olduğunda sistem tespit edip sonrasında hareketli nesneyi ayırt edip bu iki görüntüyü kullanıcıya mail ile anlık olarak iletmektedir.",
    },
    {
        id: 4,
        title: "Proje 4: Mail Doğrulamalı Kayıt Sistemi",
        shortDesc: "Spring Boot ve React ile geliştirilen, kullanıcı doğrulama mailiyle kayıt işlemi yapan bir sistem.",
        fullDesc: "BackEnd tarafında Spring Boot ile çalışmış olduğum bu projemde kullanıcılar öncelikle kayıt olup sistemde de kayıtlı diğer kullanıcıları görüntüleyebilmektedir. Kayıt sırasında kayıt oluşturabilmek için mail adreslerine doğrulama maili gönderilip daha sonrasında bu işlem tamamlanmaktadır. Kayıtlı kullanıcılar ile sorunsuz bir şekilde iletişime geçilebilmesi için geliştirmelerim devam etmektedir. Frontend için React ile projemi geliştirdim.",
    },
];

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;
    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>&times;</button>
                <h2>{project.title}</h2>
                {project.image && <img src={project.image} alt={project.title} className="modal-image" />}
                <p className="modal-desc">{project.fullDesc}</p>
            </div>
        </div>
    );
};

function Projelerim() {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projelerim" className="section-content">
            <div className="content-flow">
                <h1 className="title-glow">Projelerim</h1>

                {/* Projeler Grid */}
                <div className="projects-grid">
                    {PROJECTS.map(project => (
                        <div
                            key={project.id}
                            className="project-card"
                            onClick={() => setSelectedProject(project)}
                        >
                            {project.image && (
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="card-image-symbol"
                                />
                            )}
                            <h3>{project.title}</h3>
                            <p>{project.shortDesc}</p>
                            <span className="read-more-text">Detayları Gör...</span>
                        </div>
                    ))}
                </div>

                {/* --- Buton Grid'in ALTINDA --- */}
                <div className="github-button-container">
                    <a
                        href="https://github.com/dursunmuslu?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-button"
                    >
                        Tüm Projelerimi Gör →
                    </a>
                </div>
            </div>

            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    );
}

export default Projelerim;
