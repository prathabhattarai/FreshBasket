import { useNavigate } from "react-router-dom";

export default function Notfound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute -top-5 -right-24 w-96 h-96 rounded-full bg-green-400/10 pointer-events-none" />
      <div className="absolute -bottom-2 -left-20 w-80 h-80 rounded-full bg-green-300/10 pointer-events-none" />

      {/* Card — smaller */}
      <div className="relative z-10 bg-white rounded-2xl px-8 pt-8 pb-8 w-full max-w-sm text-center shadow-[0_2px_40px_rgba(34,197,94,0.10),0_1px_8px_rgba(0,0,0,0.06)]">

        {/* Basket SVG */}
        <div className="flex justify-center mb-2">
          <svg viewBox="0 0 160 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-28 h-24">
            <path d="M20 60 L140 60 L128 120 H32 L20 60Z" fill="#dcfce7" stroke="#22c55e" strokeWidth="4" strokeLinejoin="round" />
            <line x1="55" y1="60" x2="48" y2="120" stroke="#86efac" strokeWidth="2" />
            <line x1="80" y1="60" x2="80" y2="120" stroke="#86efac" strokeWidth="2" />
            <line x1="105" y1="60" x2="112" y2="120" stroke="#86efac" strokeWidth="2" />
            <line x1="22" y1="82" x2="138" y2="82" stroke="#86efac" strokeWidth="2" />
            <line x1="25" y1="102" x2="135" y2="102" stroke="#86efac" strokeWidth="2" />
            <path d="M50 60 Q80 20 110 60" stroke="#22c55e" strokeWidth="5" strokeLinecap="round" fill="none" />
            <text x="64" y="55" fontSize="38" fill="#16a34a" fontWeight="bold" fontFamily="sans-serif">?</text>
            <ellipse cx="126" cy="44" rx="7" ry="12" fill="#4ade80" transform="rotate(-30 126 44)" />
            <ellipse cx="34" cy="40" rx="6" ry="10" fill="#4ade80" transform="rotate(20 34 40)" />
          </svg>
        </div>

        {/* 404 */}
        <div className="text-7xl font-extrabold text-green-500 leading-none tracking-tighter mb-2 drop-shadow-[0_2px_0_#bbf7d0]">
          404
        </div>

        {/* Headline */}
        <h1 className="text-base font-bold text-green-900 mb-2">
          This page is out of stock!
        </h1>

        {/* Sub */}
        <p className="text-xs text-gray-500 leading-relaxed mb-6">
          Looks like the page you're looking for has gone missing from our shelves.
          Let's get you back to something fresh.
        </p>

        {/* Button */}
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-semibold text-sm w-full py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-[0_4px_14px_rgba(34,197,94,0.3)] hover:shadow-[0_8px_24px_rgba(34,197,94,0.4)] cursor-pointer"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          Go Back to Home
        </button>
      </div>
    </div>
  );
}