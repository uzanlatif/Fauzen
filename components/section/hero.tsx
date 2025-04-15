// components/Hero.tsx
import TiltedCard from "./TiltedCard";
import styles from './Hero.module.css';

interface HeroProps {
  backgroundImage?: string;
  overlayOpacity?: number;
  tiltCardSrc?: string;
  cardRotationAmplitude?: number;
}

const Hero = ({
  backgroundImage = "/images/pattern.jpeg",
  overlayOpacity = 0.8,
  tiltCardSrc = "/images/Frame_Hero.png",
  cardRotationAmplitude = 12,
}: HeroProps) => {
  return (
    <section
      className={styles.heroSection}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay for background image */}
      <div
        className={styles.heroOverlay}
        style={{ opacity: overlayOpacity }}
      ></div>

      {/* Positioned TiltedCard on top of the image */}
      <div className={styles.heroCardContainer}>
        <div className={styles.heroCard}>
          <TiltedCard
            imageSrc={tiltCardSrc}
            altText="Image"
            containerHeight="100%"
            containerWidth="100%"
            imageHeight="100%"
            imageWidth="100%"
            rotateAmplitude={cardRotationAmplitude}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
