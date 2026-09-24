import Image from 'next/image';
import dartscopeMedia from '@/data/dartscopeMedia.json';
import styles from './DartScopeGallery.module.css';

export default function DartScopeGallery() {
  return (
    <section className={styles.gallery} aria-labelledby="dartscope-gallery-heading" data-dartscope-gallery data-release={dartscopeMedia.version}>
      <div className={styles.intro}>
        <h2 id="dartscope-gallery-heading" className="section-title">From finding a board<br /><em>to the final dart.</em></h2>
        <p>Explore venues on the map, start a Quick Match and keep score as you play. Browse without an account, or sign in to save your match history.</p>
      </div>
      <p className={styles.note}>Published iPhone screenshots · Version {dartscopeMedia.version}. Open any image for a closer look.</p>
      <div className={styles.grid}>
        {dartscopeMedia.screenshots.map(({ id, src, alt, caption, width, height }) => (
          <figure key={id} className={styles.figure}>
            <a href={src} target="_blank" rel="noopener noreferrer" className={styles.imageLink} aria-label={`${caption} — open full-size screenshot in a new tab`}>
              <Image src={src} alt={alt} width={width} height={height} sizes="(max-width: 479px) calc(100vw - 40px), (max-width: 700px) calc((100vw - 64px) / 2), (max-width: 900px) calc((100vw - 96px) / 2), (max-width: 1100px) calc((100vw - 136px) / 3), 326px" />
            </a>
            <figcaption>{caption}</figcaption>
          </figure>
        ))}
      </div>
      <p className={styles.source}>Screenshots from the <a href={dartscopeMedia.listing} target="_blank" rel="noopener noreferrer">DartScope App Store listing</a>.</p>
    </section>
  );
}
