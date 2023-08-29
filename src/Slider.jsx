// eslint-disable-next-line react/prop-types
export function Slider({ handleValueChange, defaultValue, maxValue, minValue }) {
  return (
    <input
      type="range"
      min={minValue}
      max={maxValue}
      defaultValue={defaultValue}
      onChange={(e) => handleValueChange(e.target.value)}
    />
  );
}
