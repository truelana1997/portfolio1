import Image from 'next/image';

export type CreditEntry = { role: string; name?: string };

interface Props {
  image: string;
  credits: CreditEntry[];
  alt?: string;
}

export default function Credits({ image, credits, alt = 'Credits' }: Props) {
  return (
    <div className="relative w-full">
      <Image
        src={image}
        alt={alt}
        width={1920}
        height={1080}
        quality={100}
        layout="responsive"
      />
      <div className="absolute inset-0 flex items-center justify-start bg-black/70 px-8 md:px-16">
        <dl className="space-y-0.5 text-left text-xs font-light text-white">
          <dt className="mb-2 text-sm font-normal uppercase tracking-widest">
            Credits
          </dt>
          {credits.map((entry, index) =>
            entry.name ? (
              <div key={index} className="flex gap-1">
                <dt>{entry.role}:</dt>
                <dd>{entry.name}</dd>
              </div>
            ) : (
              <dt key={index}>{entry.role}</dt>
            )
          )}
        </dl>
      </div>
    </div>
  );
}
