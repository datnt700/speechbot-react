import styles from './SpeedSelect.module.scss';

interface Props {
  pitch: string[];
  selectedPitch: string | null;
  handlePitchSelection: (i: string) => void;
}

export const SpeedSelect = ({
  pitch,
  selectedPitch,
  handlePitchSelection,
}: Props) => {
  return (
    <div className={styles.speed}>
      <span className={styles.name}>Speed</span>
      <div className={styles.number}>
        {pitch.map((i) => (
          <span
            className={selectedPitch === i ? styles.active : ''}
            key={i}
            onClick={() => handlePitchSelection(i)}
          >
            {i}
          </span>
        ))}
      </div>
    </div>
  );
};
