import React from 'react';
import cardStyles from './styles.module.css';

const getProgressValue = (step) => {
  if (step === 1) return 33;
  if (step === 2) return 66;
  return 100;
};

const Card = ({ step, title, children }) => {
  return (
    <section className={cardStyles.cardContainer}>
      <section className={cardStyles.container__header}>
        <span className={cardStyles.container__header__title}>{title}</span>
        <span className={cardStyles.container__header__steps}>
          Step {step}/3
        </span>
      </section>
      <section>
        <progress
          className={cardStyles.container__progress}
          max="100"
          value={getProgressValue(step)}
        ></progress>
      </section>
      <section>
        {children} 
      </section>
    </section>
  );
};

export default Card;
