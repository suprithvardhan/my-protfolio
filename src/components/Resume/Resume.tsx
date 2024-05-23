// components/ResumeCard.tsx
'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import styles from './Resume.module.css';
import profilepic from '../../../public/images/profilepic.png';

const ResumeCard = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (button) {
      gsap.set(button, { backgroundColor: '#ffd700' });

      const handleMouseEnter = () => {
        gsap.to(button, { backgroundColor: '#000', color: '#fff', duration: 0.3, ease: 'power2.out' });
      };

      const handleMouseLeave = () => {
        gsap.to(button, { backgroundColor: '#ffd700', color: '#000', duration: 0.3, ease: 'power2.out' });
      };

      button.addEventListener('mouseenter', handleMouseEnter);
      button.addEventListener('mouseleave', handleMouseLeave);

      // Clean up event listeners on component unmount
      return () => {
        button.removeEventListener('mouseenter', handleMouseEnter);
        button.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.resumeCard}>
        <div className={styles.cardContent}>
          <div className={styles.profileImage}>
            <Image
              src={profilepic}
              alt="Your Name"
              width={100}
              height={100}
              className={styles.image}
            />
          </div>
          <div className={styles.textContent}>
            <h1 className={styles.name}>Suprith Vardhan</h1>
            <h2 className={styles.title}>Undergraduate Student</h2>
            <p className={styles.description}>
              Passionate undergraduate student with a strong foundation in programming languages. Eager to learn and contribute to innovative projects.
            </p>
            <a href="mailto:suprithvardhanrao@gmail.com" className={styles.email}>
              suprithvardhanrao@gmail.com
            </a>
            <p className={styles.location}>Hyderabad, India</p>
            <div className={styles.workExperience}>
              <h3>Projects</h3>
              <ul>
                <li>Loop Connect</li>
                <li>Protfolio</li>
                <li>Stock Bot</li>
                <li>Lost and Found app</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <button ref={buttonRef} className={styles.viewResumeButton}>View Resume</button>
    </div>
  );
};

export default ResumeCard;
