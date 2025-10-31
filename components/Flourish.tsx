type Variant = "rule-dot" | "double-diamond" | "fleur" | "s-curve" | "scroll" | "laurel";

export default function Flourish({ variant = "rule-dot", width = 280 }:
  { variant?: Variant; width?: number }) {
  const render = {
    "rule-dot": (
      <svg viewBox="0 0 240 12" width={width} height={Math.round(width*0.05)} aria-hidden>
        <path d="M10 6 H108" stroke="currentColor" fill="none" strokeWidth="1"/>
        <circle cx="120" cy="6" r="1.2" fill="currentColor"/>
        <path d="M132 6 H230" stroke="currentColor" fill="none" strokeWidth="1"/>
      </svg>
    ),
    "double-diamond": (
      <svg viewBox="0 0 280 16" width={width} height={Math.round(width*0.06)} aria-hidden>
        <path d="M10 5 H114" stroke="currentColor" strokeWidth=".8" fill="none"/>
        <path d="M10 11 H114" stroke="currentColor" strokeWidth=".8" fill="none"/>
        <rect x="134" y="6" width="12" height="12" transform="rotate(45 140 12)" fill="currentColor"/>
        <path d="M166 5 H270" stroke="currentColor" strokeWidth=".8" fill="none"/>
        <path d="M166 11 H270" stroke="currentColor" strokeWidth=".8" fill="none"/>
      </svg>
    ),
    "fleur": (
      <svg viewBox="0 0 300 24" width={width} height={Math.round(width*0.08)} aria-hidden>
        <path d="M10 12 H122" stroke="currentColor" strokeWidth="1" fill="none"/>
        <path d="M178 12 H290" stroke="currentColor" strokeWidth="1" fill="none"/>
        <path d="M150 6c-3 0-6 3-6 6s3 6 6 6 6-3 6-6-3-6-6-6Zm0-4c-2 0-4 2-4 4s2 4 4 4 4-2 4-4-2-4-4-4Z" fill="currentColor"/>
        <path d="M142 12c-5-6-12-7-18-7 6-2 15-1 18 7Zm16 0c5-6 12-7 18-7-6-2-15-1-18 7Z" fill="currentColor"/>
      </svg>
    ),
    "s-curve": (
      <svg viewBox="0 0 260 20" width={width} height={Math.round(width*0.07)} aria-hidden>
        <path d="M10 10 C40 2, 80 2, 110 10 S180 18, 210 10"
          stroke="currentColor" strokeWidth="1" fill="none"/>
      </svg>
    ),
    "scroll": (
      <svg viewBox="0 0 300 20" width={width} height={Math.round(width*0.07)} aria-hidden>
        <path d="M20 10 c25-15 55-15 80 0" stroke="currentColor" strokeWidth="1" fill="none"/>
        <path d="M200 10 c25 15 55 15 80 0" stroke="currentColor" strokeWidth="1" fill="none"/>
        <path d="M110 10 H190" stroke="currentColor" strokeWidth="1" fill="none"/>
      </svg>
    ),
    "laurel": (
      <svg viewBox="0 0 300 24" width={width} height={Math.round(width*0.08)} aria-hidden>
        <path d="M10 12 H120" stroke="currentColor" strokeWidth="1" fill="none"/>
        <path d="M180 12 H290" stroke="currentColor" strokeWidth="1" fill="none"/>
        <path d="M150 12c-8 0-13 7-13 7s9 0 13-7Zm0 0c8 0 13 7 13 7s-9 0-13-7Z" fill="currentColor"/>
      </svg>
    )
  } as const;

  return render[variant];
}