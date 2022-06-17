import React from 'react';

import assets from '../assets';
import styles from '../styles/Global';

const FeatureCard = ({ iconUrl, iconText }) => (
  <div className={styles.featureCard}>
    <img src={iconUrl} alt="icon" className={styles.featureImg} />
    <p className={styles.featureText}>{iconText}</p>
  </div>
)

const Features = () => {
  return (
    <div className={`${styles.section} ${styles.bgPrimary} banner03`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.whiteText}`}>Tasvee is backed by</h1>
          <p className={`${styles.pText} ${styles.whiteText}`}>strong supports like</p>
        </div>

        <div className={styles.flexWrap}>
         
          <FeatureCard iconUrl={assets.scitech} iconText="Science & Tech Park" />
          <FeatureCard iconUrl={assets.researchpark} iconText="Research park" />

        </div>
      </div>
    </div>
  )
}

export default Features