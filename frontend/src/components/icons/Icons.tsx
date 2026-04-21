import type { ImgHTMLAttributes, SVGProps } from 'react';

export function KhaineIcon(props: ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img src={`${import.meta.env.BASE_URL}icons/khaine.png`} alt="" aria-hidden="true" style={{ objectFit: 'contain' }} {...props} />
  );
}

export function SkullIcon(props: ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img src={`${import.meta.env.BASE_URL}icons/skull_gold.png`} alt="" aria-hidden="true" style={{ objectFit: 'contain' }} {...props} />
  );
}

export function DaggerIcon(props: ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img src={`${import.meta.env.BASE_URL}icons/dagger.png`} alt="" aria-hidden="true" style={{ objectFit: 'contain' }} {...props} />
  );
}

export function SubmitIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M12 5v14M5 12h14"/>
    </svg>
  );
}
