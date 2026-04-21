import type { ImgHTMLAttributes } from 'react';

export function KhaineIcon(props: ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img src={`${import.meta.env.BASE_URL}icons/khaine.png`} alt="Khaine Emblem" style={{ objectFit: 'contain' }} {...props} />
  );
}

export function SkullIcon(props: ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img src={`${import.meta.env.BASE_URL}icons/skull_gold.png`} alt="Skull Icon" style={{ objectFit: 'contain' }} {...props} />
  );
}

export function DaggerIcon(props: ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img src={`${import.meta.env.BASE_URL}icons/dagger.png`} alt="Dagger Icon" style={{ objectFit: 'contain' }} {...props} />
  );
}
