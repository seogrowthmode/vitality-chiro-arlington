export default function GrainOverlay() {
  return (
    <div className="grain">
      <svg width="100%" height="100%">
        <filter id="g">
          <feTurbulence type="fractalNoise" baseFrequency=".75" numOctaves={4} stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#g)" />
      </svg>
    </div>
  );
}
