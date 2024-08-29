import styles from './SpeedSelect.module.scss';

export const SpeedSelect = ({
  pitch,
  selectedPitch,
  handlePitchSelection,
}: {
  pitch: string[];
  selectedPitch: string | null;
  handlePitchSelection: (i: string) => void;
}) => {
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
