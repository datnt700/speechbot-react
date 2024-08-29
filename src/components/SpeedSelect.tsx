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
    <div className="speed">
      <span className="name">Speed</span>
      <div className="number">
        {pitch.map((i) => (
          <span
            className={selectedPitch === i ? 'active' : ''}
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
