import React from 'react';

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
    <div className="voice">
      <span className="voice-item name">Voice</span>
      <select className="voice-item select language" onChange={handleLanguage}>
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
      <select className="voice-item select person" onChange={handleName}>
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
