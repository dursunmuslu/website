import React, { useEffect, useRef } from "react";
import { FaJava, FaReact, FaPython, FaDocker, FaLinux } from "react-icons/fa";
import { SiSpringboot, SiPostgresql, SiWireguard } from "react-icons/si";
import "./Yetenekler.css";

function Yetenekler() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const skills = [
        { name: "Java", icon: <FaJava /> },
        { name: "Spring Boot", icon: <SiSpringboot /> },
        { name: "React", icon: <FaReact /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "Temel Network & Güvenlik", icon: <SiWireguard /> },
        { name: "Linux", icon: <FaLinux /> },
        { name: "Python", icon: <FaPython /> },
        { name: "Docker", icon: <FaDocker /> },
    ];

    return (
        <section ref={sectionRef} id="yetenekler" className="section-content">
            <div className="content-flow">
                <h1 className="title-glow">Yetenekler</h1>
                <div className="skills-list">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-item">
                            <span className="skill-icon">{skill.icon}</span>
                            <span className="skill-text">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Yetenekler;
