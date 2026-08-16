export default function WebXR({ className }) {
  return (
    <svg
      viewBox="0 0 128 128"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="12"
        y="28"
        width="104"
        height="72"
        rx="12"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
      />

      <path
        d="m34 45 17 22-17 22M94 45 77 67l17 22"
        fill="none"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M62 48v38"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}