export default function MediaPipe({ className }) {
  return (
    <svg
      viewBox="0 0 128 128"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="64"
        cy="64"
        r="55"
        fill="none"
        stroke="#00A98F"
        strokeWidth="6"
      />

      <circle cx="45" cy="48" r="9" fill="#00A98F" />
      <circle cx="83" cy="48" r="9" fill="#00A98F" />

      <path
        d="M39 76c8 13 42 13 50 0"
        fill="none"
        stroke="#00A98F"
        strokeWidth="7"
        strokeLinecap="round"
      />

      <path
        d="M29 32 17 21M99 32l12-11M29 96 17 107M99 96l12 11"
        stroke="#00A98F"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}