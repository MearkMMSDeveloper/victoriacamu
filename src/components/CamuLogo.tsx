import camuIcon from "@/assets/camu-icon.png";

interface CamuLogoProps {
  textColor?: "white" | "black";
  iconHeight?: string;
}

const CamuLogo = ({ textColor = "white", iconHeight = "h-[60px]" }: CamuLogoProps) => {
  return (
    <div className="flex items-center gap-1">
      <img
        src={camuIcon}
        alt="CamU"
        className={`${iconHeight} w-auto object-contain`}
      />
      <span
        className={`font-sans text-[1.6em] font-semibold tracking-tight transition-colors duration-500 ${
          textColor === "white" ? "text-white" : "text-foreground"
        }`}
      >
        CamU
      </span>
    </div>
  );
};

export default CamuLogo;
