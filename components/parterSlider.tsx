"use client";

import Image from "next/image";

const partners1 = [
  { src: '/images/partners/Hankook.webp', alt: "Hankook", width: 135, height: 50},
  // { src: EcoPro, alt: "EcoPro", width: 115, height: 25 },
  { src: '/images/partners/FNS.webp', alt: "Fns", width: 132, height: 42 },
  { src: '/images/partners/HyundaiGlovis.webp', alt: "Hyundai", width: 143, height: 36 },
  { src: '/images/partners/LG.webp', alt: "LG", width: 78, height: 35 },
  { src: '/images/partners/KumhoTire.webp', alt: "Kumho", width: 112, height: 50 },
  { src: '/images/partners/TUJF.webp', alt: "TUJF", width: 64, height: 78 },
  { src: '/images/partners/미래천담.webp', alt: "미래천담", width: 157, height: 39 },
  { src: '/images/partners/Bobaek.webp', alt: "Bobaek", width: 233, height: 67 },
];

const partners2 = [
  { src: '/images/partners/Pantos.webp', alt: "Pantos", width: 128, height: 40 },
  { src: '/images/partners/Posco.webp', alt: "Posco", width: 99, height: 40 },
  { src: '/images/partners/Remco.webp', alt: "Remco", width: 166, height: 21 }, 
  // { src: SK, alt: "SK", width: 64, height:47 },
  { src: '/images/partners/UltiumCam.webp', alt: "Ultium", width: 101, height: 42 },
  { src: '/images/partners/유공ENG.webp', alt: "ENG", width: 171, height: 31 },
  { src: '/images/partners/Daesung.webp', alt: "Daesung", width: 165, height: 42 },
  { src: '/images/partners/dsActimo.webp', alt: "dsActimo", width: 145, height: 33 },
];


export function PartnerSlider() {
  return(
    <>
      <div>
          {partners1.map((partner, index) => (
            <span
              key={index}
              className="flex justify-center content-center h-14 lg:mr-[70px]"
              style={{ width: `${(partner.width ?? 0) + 30}px` }}
            >
              <Image
                className="scrollerImage"
                src={partner.src}
                alt={`Partner Logo ${partner.alt}`}
                width={partner.width}
                height={0}
                style={{ objectFit: 'contain' }}
              />
            </span>
          ))}
        </div>
        <div>
          {partners1.map((partner, index) => (
            <span
              key={index}
              className="flex justify-center content-center h-14 lg:mr-[70px]"
              style={{ width: `${(partner.width ?? 0) + 30}px` }}
            >
              <Image
                className="scrollerImage"
                src={partner.src}
                alt={`Partner Logo ${partner.alt}`}
                width={partner.width}
                height={0}
                style={{ objectFit: 'contain' }}
              />
            </span>
          ))}
        </div>
    </>
  );
}

export function PartnerSlider2OF2() {
  return(
    <>
      <div>
        {partners2.map((partner, index) => (
            <span
              key={index}
              className="flex justify-center content-center h-14 lg:mr-[70px]"
              style={{ width: `${(partner.width ?? 0)+30}px` }} // Set a fixed width for each image container to avoid width fluctuation
            >
              <Image
                className="scrollerImage"
                src={partner.src}
                alt={`Partner Logo ${partner.alt}`}
                width={partner.width} // Use 0 to auto-adjust based on intrinsic size
                height={0} // Automatically adjust height based on aspect ratio
                style={{objectFit: 'contain' }} // Maintain intrinsic behavior
              />
            </span>
          ))}
      </div>
      <div>
        {partners2.map((partner, index) => (
            <span
              key={index}
              className="flex justify-center content-center h-14 lg:mr-[70px]"
              style={{ width: `${(partner.width ?? 0)+30}px` }} // Set a fixed width for each image container to avoid width fluctuation
            >
              <Image
                className="scrollerImage"
                src={partner.src}
                alt={`Partner Logo ${partner.alt}`}
                width={partner.width} // Use 0 to auto-adjust based on intrinsic size
                height={0} // Automatically adjust height based on aspect ratio
                style={{objectFit: 'contain' }} // Maintain intrinsic behavior
              />
            </span>
          ))}
      </div>
    </>
  );
}