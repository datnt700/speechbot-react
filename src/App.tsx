import { useEffect, useState } from 'react';
import './App.scss';
import heroImage from './assets/hero-image-text-to-speech.png';
import logo from './assets/text-to-speech-logo.svg';
import { InputField } from './components/InputField';
import { VoiceSelect } from './components/VoiceSelect';
import { SpeedSelect } from './components/SpeedSelect';

const pitch = ['0.5x', '0.75x', '1x', '1.5x'];

function App() {
  const [text, setText] = useState<string>('');
  const [language, setLanguage] = useState<string>('fr-FR');
  const [name, setName] = useState<string>('Thomas');
  const [selectedPitch, setSelectedPitch] = useState<string | null>(null);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[] | null>(null);

  const handleTextarea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    setText(value);
  };

  const handleName = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setName(e.target.value);
  };

  const handleLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };
  const handlePitchSelection = (i: string) => {
    setSelectedPitch(i);
  };

  const loadVoices = () => {
    const synth = window.speechSynthesis;
    const availableVoices = synth.getVoices();
    if (availableVoices.length > 0) {
      setVoices(availableVoices);
    }
  };
  useEffect(() => {
    loadVoices();

    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }, []);

  const handleClick = () => {
    if (!text || !voices) return;

    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);

    const selectedVoice = voices?.find(
      (voice) => voice.lang === language && voice.name === name
    );
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }

    const pitchNumber = selectedPitch?.split('x');
    if (pitchNumber) {
      utterance.pitch = parseFloat(pitchNumber[0]);
    }

    synth.speak(utterance);
  };

  return (
    <div className="container">
      <section className="left-side">
        <img className="hero-image" src={heroImage} alt="heroImage" />
      </section>
      <section className="right-side">
        <div className="header">
          <p className="name">Speechebot</p>
          <img className="logo" src={logo} alt="logo" />
        </div>
        <div className="main">
          <InputField clickFunction={handleTextarea} />
          <div className="setting">
            <h4 className="title">Setting</h4>
            <VoiceSelect
              voices={voices}
              handleLanguage={handleLanguage}
              handleName={handleName}
            />
            <SpeedSelect
              pitch={pitch}
              selectedPitch={selectedPitch}
              handlePitchSelection={handlePitchSelection}
            />
          </div>
          <button className="btn" onClick={handleClick}>
            Text to Speech
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
