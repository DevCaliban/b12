export default function Logo({ className = "h-10" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 280 50"
      fill="none"
      className={className}
    >
      {/* Parcel Icon */}
      <g transform="translate(0, 5)">
        <path
          d="M20 12L4 21V39L20 48L36 39V21L20 12Z"
          fill="#DC2626"
          opacity="0.9"
        />
        <path d="M20 12L36 21L20 30L4 21L20 12Z" fill="#EF4444" />
        <path d="M20 30V48" stroke="white" strokeWidth="1.5" />
        <path d="M20 12V30" stroke="white" strokeWidth="1" opacity="0.5" />
        <circle cx="20" cy="5" r="4" fill="#DC2626" />
        <circle cx="20" cy="5" r="1.5" fill="white" />
        <path d="M20 9L17.5 5H22.5L20 9Z" fill="#DC2626" />
      </g>
      {/* B12 */}
      <text
        x="46"
        y="36"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="800"
        fontSize="28"
        fill="#DC2626"
      >
        B12
      </text>
      {/* parcelHub */}
      <text
        x="100"
        y="36"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="600"
        fontSize="28"
        fill="#374151"
      >
        parcel
      </text>
      <text
        x="194"
        y="36"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="800"
        fontSize="28"
        fill="#374151"
      >
        Hub
      </text>
    </svg>
  );
}
