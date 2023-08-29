// eslint-disable-next-line react/prop-types
export function Slider({ handleValueChange }) {
  return (
    <input
      type="range"
      min="0"
      max="100"
      defaultValue="100"
      onChange={(e) => handleValueChange(e.target.value)}
    />
  );
}
