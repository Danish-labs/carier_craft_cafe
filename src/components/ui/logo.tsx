
interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'gradient';
  animate?: boolean;
}

export const Logo = ({ className = "", variant = 'light', animate = false }: LogoProps) => {
  return (
    <div className={`relative ${className} ${animate ? 'animate-glow' : ''}`}>
      <svg
        viewBox="0 0 100 100"
        className={`w-full h-full ${animate ? 'hover:scale-105 transition-transform duration-300' : ''}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Flame */}
        <path
          d="M50 20 L35 40 L65 40 Z"
          fill={variant === 'gradient' ? '#FFA21F' : '#FF6B00'}
          className={animate ? "animate-pulse" : ""}
        />
        {/* Handle */}
        <rect
          x="45"
          y="40"
          width="10"
          height="30"
          fill={variant === 'dark' ? '#12122B' : '#000000'}
        />
        {/* Wings */}
        <path
          d="M20 40 L80 40 L50 60 Z"
          fill={variant === 'dark' ? '#12122B' : '#000000'}
        />
      </svg>
    </div>
  );

  return (
    <div className={`relative ${className} ${animate ? 'animate-glow' : ''}`}>
      <img 
        src={`/images/logo-${variant}.svg`}
        alt="Career Craft Cafe Logo" 
        className={`w-full h-full ${animate ? 'hover:scale-105 transition-transform duration-300' : ''}`}
      />
    </div>
  );
};