// Global type declarations to fix TypeScript issues

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

// Fix for Lucide React icons
declare module 'lucide-react' {
  import { ComponentType } from 'react';
  
  interface IconProps {
    size?: number | string;
    color?: string;
    strokeWidth?: number | string;
    className?: string;
    [key: string]: any;
  }
  
  export const BookOpen: ComponentType<IconProps>;
  export const Menu: ComponentType<IconProps>;
  export const X: ComponentType<IconProps>;
  export const Phone: ComponentType<IconProps>;
  export const Mail: ComponentType<IconProps>;
  export const MapPin: ComponentType<IconProps>;
  export const Clock: ComponentType<IconProps>;
  export const Users: ComponentType<IconProps>;
  export const Star: ComponentType<IconProps>;
  export const ArrowRight: ComponentType<IconProps>;
  export const Award: ComponentType<IconProps>;
  export const Trophy: ComponentType<IconProps>;
  export const Target: ComponentType<IconProps>;
  export const Heart: ComponentType<IconProps>;
  export const GraduationCap: ComponentType<IconProps>;
  export const TrendingUp: ComponentType<IconProps>;
  export const Quote: ComponentType<IconProps>;
  export const ChevronLeft: ComponentType<IconProps>;
  export const ChevronRight: ComponentType<IconProps>;
  export const Instagram: ComponentType<IconProps>;
  export const Facebook: ComponentType<IconProps>;
  export const Twitter: ComponentType<IconProps>;
  export const Search: ComponentType<IconProps>;
  export const Filter: ComponentType<IconProps>;
  export const Send: ComponentType<IconProps>;
  export const CheckCircle: ComponentType<IconProps>;
  export const User: ComponentType<IconProps>;
  export const MessageSquare: ComponentType<IconProps>;
  export const Calendar: ComponentType<IconProps>;
}

// Fix for Framer Motion
declare module 'framer-motion' {
  export const motion: {
    [K in keyof JSX.IntrinsicElements]: React.ComponentType<
      JSX.IntrinsicElements[K] & {
        initial?: any;
        animate?: any;
        exit?: any;
        transition?: any;
        whileHover?: any;
        whileTap?: any;
        whileInView?: any;
        viewport?: any;
        layout?: boolean;
        href?: string;
        [key: string]: any;
      }
    >;
  };
}

export {};