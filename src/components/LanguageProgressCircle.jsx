import React from "react";

const LanguageProgressCircle = ({
  percent,
  label,
  color = "#3b82f6",
}) => {
  const angle = (percent / 100) * 360;

  return (
    <div className="relative w-28 h-28 sm:w-36 sm:h-36 lg:w-48 lg:h-48 flex items-center justify-center">
      {/* Viền ngoài hiển thị phần trăm */}
      <div
        className="absolute w-full h-full rounded-full"
        style={{
          background: `conic-gradient(${color} ${angle}deg, #e5e7eb ${angle}deg)`,
          maskImage: "radial-gradient(transparent 52%, black 55%)",
          WebkitMaskImage: "radial-gradient(transparent 52%, black 55%)",
        }}
      />

      {/* Nhãn */}
      <div className="text-center text-sm font-semibold z-10">
        <div>{label}</div>
        <div>{percent}%</div>
      </div>
    </div>
  );
};

export default LanguageProgressCircle;
