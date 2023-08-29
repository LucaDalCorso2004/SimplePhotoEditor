export function Slider(onChange) {
  return (
    <input
      type="range"
      min="0"
      max="100"
      defaultValue="100"
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
