'use client';
import React, { useEffect } from 'react';
import styles from './Contact.module.css';
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaCodepen } from 'react-icons/fa';

const Contact = () => {

  return (
    <div className={styles.contactContainer}>
      <div className={styles.leftSection}>
        <h1 className={styles.heading}>
          Let&apos;s <br />
          <span className={styles.connect}>Connect.</span>
        </h1>
        <a href="mailto:suprithvardhanrao@gmail.com" className={styles.email}>suprithvardhanrao@gmail.com</a>
        <div className={styles.links}>
          <a href="https://twitter.com/suprithvardhan" target="_blank" rel="noopener noreferrer" className={styles.icon}><FaTwitter /></a>
          <a href="https://instagram.com/suprith_vardhan" target="_blank" rel="noopener noreferrer" className={styles.icon}><FaInstagram /></a>
          <a href="https://linkedin.com/suprithvardhan" target="_blank" rel="noopener noreferrer" className={styles.icon}><FaLinkedin /></a>
          <a href="https://github.com/suprithvardhan" target="_blank" rel="noopener noreferrer" className={styles.icon}><FaGithub /></a>
          <a href="https://codepen.io/suprithvardhan" target="_blank" rel="noopener noreferrer" className={styles.icon}><FaCodepen /></a>
        </div>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.section}>
          <h2 className={styles.hoverTitle} data-hover="Skills">Skills</h2>
          <p>Check out the things I&apos;m good at, from building websites to design and more.</p>
        </div>
        <div className={styles.section}>
          <h2 className={styles.hoverTitle} data-hover="Experience">Experience</h2>
          <p>Check out the things I&apos;m good at, from building websites to design and more.</p>
        </div>
        <div className={styles.section}>
          <h2 className={styles.hoverTitle} data-hover="Resume">Resume</h2>
          <p>See my work history and what I&apos;ve achieved in a quick and easy resume.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;