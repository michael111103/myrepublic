import React from "react";

type IconProps = {
  className?: string;
  style?: React.CSSProperties;
};

/* ─── Existing Icons (unchanged) ─── */

export const WifiIcon = ({ className = "w-6 h-6", style }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none">
    <path d="M12 20.5C12.8284 20.5 13.5 19.8284 13.5 19C13.5 18.1716 12.8284 17.5 12 17.5C11.1716 17.5 10.5 18.1716 10.5 19C10.5 19.8284 11.1716 20.5 12 20.5Z" fill="currentColor"/>
    <path d="M8.5 15.5C9.5 14.1 10.65 13.5 12 13.5C13.35 13.5 14.5 14.1 15.5 15.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M5 12C6.8 9.8 9.2 8.5 12 8.5C14.8 8.5 17.2 9.8 19 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M2 8.5C4.8 5.5 8.2 3.5 12 3.5C15.8 3.5 19.2 5.5 22 8.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

export const RocketIcon = ({ className = "w-6 h-6", style }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none">
    <path d="M12 2C12 2 8 6 8 12C8 14.5 9 16.8 10.8 18.5L12 20L13.2 18.5C15 16.8 16 14.5 16 12C16 6 12 2 12 2Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="11" r="2" fill="currentColor"/>
    <path d="M8 18L5 21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M16 18L19 21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M10 20L10 22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M14 20L14 22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

export const SpeedIcon = ({ className = "w-6 h-6", style }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="13" r="8" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M12 13L9 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M5.5 13H6.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M17.5 13H18.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M12 6V7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M7.5 7.5L8.2 8.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M16.5 7.5L15.8 8.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <circle cx="12" cy="13" r="1.5" fill="currentColor"/>
  </svg>
);

export const ShieldIcon = ({ className = "w-6 h-6", style }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none">
    <path d="M12 2L4 6V12C4 16.4 7.4 20.5 12 22C16.6 20.5 20 16.4 20 12V6L12 2Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const PhoneIcon = ({ className = "w-6 h-6", style }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none">
    <path d="M6.6 10.8C7.8 13.2 9.8 15.2 12.2 16.4L14.2 14.4C14.5 14.1 14.9 14 15.2 14.2C16.2 14.6 17.3 14.8 18.5 14.8C19 14.8 19.5 15.2 19.5 15.8V18.5C19.5 19 19 19.5 18.5 19.5C10.2 19.5 3.5 12.8 3.5 4.5C3.5 4 3.9 3.5 4.5 3.5H7.2C7.8 3.5 8.2 4 8.2 4.5C8.2 5.7 8.4 6.8 8.8 7.8C8.9 8.1 8.8 8.5 8.6 8.8L6.6 10.8Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const WhatsAppIcon = ({ className = "w-6 h-6", style }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export const TvIcon = ({ className = "w-6 h-6", style }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none">
    <rect x="2" y="4" width="20" height="14" rx="2" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M8 20H16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M12 18V20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <circle cx="12" cy="11" r="3" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M9.5 8.5L7 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M14.5 8.5L17 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const GameIcon = ({ className = "w-6 h-6", style }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none">
    <path d="M6 12H18M12 6V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <rect x="2" y="7" width="20" height="10" rx="5" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.8"/>
    <circle cx="17" cy="12" r="1" fill="currentColor"/>
    <circle cx="15" cy="10" r="1" fill="currentColor"/>
  </svg>
);

export const StreamIcon = ({ className = "w-6 h-6", style }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none">
    <path d="M5 3L19 12L5 21V3Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19 6C20.5 7.5 21.5 9.6 21.5 12C21.5 14.4 20.5 16.5 19 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M16 8.5C17 9.5 17.5 10.7 17.5 12C17.5 13.3 17 14.5 16 15.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

export const CheckIcon = ({ className = "w-5 h-5", style }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="9" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M6.5 10.5L8.5 12.5L13.5 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ArrowRightIcon = ({ className = "w-5 h-5", style }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 20 20" fill="none">
    <path d="M4 10H16M11 5L16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const LocationIcon = ({ className = "w-5 h-5", style }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 20 20" fill="none">
    <path d="M10 2C7.2 2 5 4.2 5 7C5 11 10 18 10 18C10 18 15 11 15 7C15 4.2 12.8 2 10 2Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="10" cy="7" r="2" fill="currentColor"/>
  </svg>
);

export const TiktokIcon = ({ className = "w-5 h-5", style }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.19 8.19 0 004.79 1.52V6.75a4.85 4.85 0 01-1.02-.06z"/>
  </svg>
);

export const InstagramIcon = ({ className = "w-5 h-5", style }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="2" y="2" width="20" height="20" rx="5"/>
    <circle cx="12" cy="12" r="5"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" strokeWidth="0"/>
  </svg>
);

export const FacebookIcon = ({ className = "w-5 h-5", style }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.514c-1.491 0-1.956.93-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
  </svg>
);

/* ─── New Icons for Artikel & Admin ─── */

export const ImageIcon = ({ className = "w-6 h-6", style }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="14" rx="2.5"/>
    <circle cx="8.5" cy="10" r="1.5"/>
    <path d="M21 17l-5.2-5.2a1 1 0 00-1.4 0L9 17M9 17l-1.6-1.6a1 1 0 00-1.4 0L3 18.5"/>
  </svg>
);

export const HeadingIcon = ({ className = "w-5 h-5", style }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    {/* H shape */}
    <path d="M4 5v14M4 12h8M12 5v14" strokeWidth="2.5"/>
    {/* "1" subscript */}
    <path d="M17 8v11" strokeWidth="1.75"/>
    <path d="M15.5 9.5L17 8" strokeWidth="1.75"/>
  </svg>
);

export const SubheadingIcon = ({ className = "w-5 h-5", style }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
    {/* Smaller H shape */}
    <path d="M4 6v12M4 12h7M11 6v12" strokeWidth="2"/>
    {/* "2" subscript */}
    <path d="M15.5 10.5a2 2 0 113.5 1.3l-3.5 4.2h4" strokeWidth="1.75"/>
  </svg>
);

export const ParagraphIcon = ({ className = "w-5 h-5", style }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
    <path d="M4 6h16"/>
    <path d="M4 10h16"/>
    <path d="M4 14h10"/>
    <path d="M4 18h13"/>
  </svg>
);

export const DocumentEmptyIcon = ({ className = "w-6 h-6", style }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
    <path d="M14 2v6h6"/>
    <path d="M9 13h6" strokeDasharray="2 2"/>
    <path d="M9 17h4" strokeDasharray="2 2"/>
  </svg>
);

export const NewspaperIcon = ({ className = "w-6 h-6", style }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z"/>
    <rect x="7" y="7" width="4" height="4" rx="0.5"/>
    <path d="M13 7h4M13 11h4M7 15h10M7 18h7"/>
  </svg>
);

export const SatelliteIcon = ({ className = "w-6 h-6", style }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.9 4.9l14.2 14.2"/>
    <path d="M9.7 9.7a5 5 0 006.6 6.6"/>
    <path d="M7.1 7.1a9 9 0 0010 9.9"/>
    <circle cx="4.5" cy="19.5" r="2.5"/>
    <path d="M7 17l-2.5 2.5"/>
  </svg>
);

export const ArrowUpIcon = ({ className = "w-4 h-4", style }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 19V5M5 12l7-7 7 7"/>
  </svg>
);

export const ArrowDownIcon = ({ className = "w-4 h-4", style }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5v14M5 12l7 7 7-7"/>
  </svg>
);

export const XIcon = ({ className = "w-4 h-4", style }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <path d="M18 6L6 18M6 6l12 12"/>
  </svg>
);

export const TrashIcon = ({ className = "w-4 h-4", style }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6h18M8 6V4a1 1 0 011-1h6a1 1 0 011 1v2M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/>
    <path d="M10 11v6M14 11v6"/>
  </svg>
);

export const PencilIcon = ({ className = "w-4 h-4", style }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/>
    <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
  </svg>
);

export const EyeIcon = ({ className = "w-4 h-4", style }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

export const PlusIcon = ({ className = "w-4 h-4", style }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <path d="M12 5v14M5 12h14"/>
  </svg>
);

export const LogoutIcon = ({ className = "w-4 h-4", style }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9"/>
  </svg>
);

export const ExternalLinkIcon = ({ className = "w-4 h-4", style }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
  </svg>
);

export const NotFoundIcon = ({ className = "w-6 h-6", style }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/>
    <path d="M21 21l-4.35-4.35"/>
    <path d="M8.5 8.5l5 5M13.5 8.5l-5 5"/>
  </svg>
);

export const PublishedDotIcon = ({ className = "w-3 h-3", style }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 12 12" fill="currentColor">
    <circle cx="6" cy="6" r="5"/>
  </svg>
);

export const DraftDotIcon = ({ className = "w-3 h-3", style }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="6" cy="6" r="4.5"/>
  </svg>
);

export const ImagePlaceholderIcon = ({ className = "w-6 h-6", style }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="3"/>
    <circle cx="8.5" cy="8.5" r="1.5"/>
    <path d="M21 15l-5-5L5 21"/>
  </svg>
);
