import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

export function PhoneMockup({ src, alt, className = "", priority }: Props) {
  return (
    <div className={`phone-frame ${className}`}>
      <div className="phone-frame__notch" />
      <Image
        src={src}
        alt={alt}
        width={390}
        height={844}
        className="phone-frame__screen"
        sizes="(max-width: 768px) 240px, 280px"
        priority={priority}
      />
    </div>
  );
}
