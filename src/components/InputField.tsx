import React from 'react';
import styles from './InputField.module.scss';

export const InputField = ({
  clickFunction,
}: {
  clickFunction: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) => {
  return (
    <div className={styles.inputField}>
      <textarea
        className={styles.area}
        placeholder="Enter your text"
        onChange={(event) => clickFunction(event)}
      ></textarea>
      <p className={styles.description}>
        Enter your text above and hit 'play.' You can choose a different voice
        by selecting an option from the dropdown menu.
      </p>
    </div>
  );
};
