'use client';

import { useState } from 'react'; // Import useState
import styles from '../styles/float.module.css';
import Link from 'next/link';

interface FloatProps {
  serveLinks?: {
    label: string;
    url: string;
  }[];
}

const Float: React.FC<FloatProps> = (props) => {
  const { serveLinks = [] } = props;
  const linksToShow = serveLinks.length > 3 ? serveLinks?.slice(0, 2) : serveLinks;

  const [activeLinkIndex, setActiveLinkIndex] = useState<number | null>(0); // Default to index 1

  const handleClick = (index: number) => {
    setActiveLinkIndex(index);
  };

  return (
    <>
      <div className={styles.tabViewList}>
        {serveLinks.map((link, i) => (
          <Link
            key={i}
            href={link.url}
            className={`${styles.links} ${i === activeLinkIndex ? styles.activeLink : ''}`}
            onClick={() => handleClick(i)} // Set active link on click
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className={styles.mobileViewList}>
        {linksToShow.map((link, i) => (
          <Link
            key={i}
            href={link.url}
            className={`${styles.links} ${i === activeLinkIndex ? styles.activeLink : ''}`}
            onClick={() => handleClick(i)} // Set active link on click
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Float;
