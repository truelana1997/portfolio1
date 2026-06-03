import Image from 'next/image';

export type ResearchBlock =
  | { type: 'image'; src: string }
  | { type: 'text'; content: string };

interface Props {
  blocks: ResearchBlock[];
  textClassName?: string;
}

export default function ResearchBlocks({
  blocks,
  textClassName = 'text-background'
}: Props) {
  return (
    <>
      {blocks.map((block, index) =>
        block.type === 'image' ? (
          <Image
            key={index}
            src={block.src}
            alt="Project specs"
            width={700}
            height={500}
            quality={100}
            layout="responsive"
          />
        ) : (
          <p
            key={index}
            className={`whitespace-pre-line px-8 py-12 text-lg ${textClassName}`}
          >
            {block.content}
          </p>
        )
      )}
    </>
  );
}
