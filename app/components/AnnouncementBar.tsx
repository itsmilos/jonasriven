export default function AnnouncementBar() {
  const items = [
    "100% SAFE PURCHASE",
    "GUARANTEED REFUND",
    "100% SAFE PURCHASE",
    "GUARANTEED REFUND",
    "100% SAFE PURCHASE",
    "GUARANTEED REFUND",
    "100% SAFE PURCHASE",
    "GUARANTEED REFUND",
    "100% SAFE PURCHASE",
    "GUARANTEED REFUND",
  ];

  return (
    <div className="relative z-[100] h-10 w-full overflow-hidden border-b border-[#C6A15B]/15 bg-[#080807]">
      <div className="flex h-full w-max animate-marquee">
        <div className="flex h-full shrink-0 items-center">
          {items.map((item) => (
            <div key={item} className="flex items-center">
              <span className="px-8 text-[9px] font-semibold uppercase tracking-[0.28em] text-[#C6A15B]">
                {item}
              </span>

              <span className="text-[8px] text-[#80652F]">✦</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
