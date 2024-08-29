import React from 'react';
import styles from './VoiceSelect.module.scss';

export const VoiceSelect = ({
  voices,
  handleLanguage,
  handleName,
}: {
  voices: SpeechSynthesisVoice[] | null;
  handleLanguage: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleName: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) => {
  return (
    <div className={styles.voice}>
      <span className={`${styles['voice-item']} ${styles.name}`}>Voice</span>
      <select
        className={`${styles['voice-item']} ${styles.select} ${styles.language}`}
        onChange={handleLanguage}
      >
        {voices ? (
          voices.map((voice, index) => (
            <option key={index} value={voice.lang}>
              {voice.lang}
            </option>
          ))
        ) : (
          <option></option>
        )}
      </select>
      <select
        className={`${styles['voice-item']} ${styles.select} ${styles.person}`}
        onChange={handleName}
      >
        {voices ? (
          voices.map((voice, index) => (
            <option key={index} value={voice.name}>
              {voice.name}
            </option>
          ))
        ) : (
          <option></option>
        )}
      </select>
    </div>
  );
};
