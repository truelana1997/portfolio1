'use client';
import ProjectHero from '@/app/projects/project/hero';
import PageScrollParallax from '@/components/pageScrollParallax';
import Picture1 from '../../../../public/images/ravi/ravi-1.jpg';
import Picture3 from '../../../../public/images/ravi/ravi-3.png';
import Picture2 from '../../../../public/images/ravi/ravi-4.png';
import Image from 'next/image';
import React from 'react';
import { assetUrl } from '@/lib/basePath';

export default function M31Project() {
  const researchAssets = [
    assetUrl('/images/ravi/ravi-2.jpg'),
    assetUrl('/images/m31/app.png'),
    assetUrl('/images/m31/packaging.png'),
    assetUrl('/images/m31/research.png'),
    assetUrl('/images/m31/specs.png')
  ];
  const introduction =
    'Niche voices within Gen Z communities who felt authentic and relatable due to their lifestyle. ' +
    'For instance, Sophya is a cat mom. She adopted more than ten cats. She is a genuinely good person. ' +
    'Even though it is hard for older people to understand why we prefer to have pets and raise them as kids. ' +
    'And with this phrase, “First, I’ll raise them” - “Why Not?”, we make a statement. ' +
    'The response exceeded expectations. At one point, it became almost impossible to find RAVI in stores. All this effort was culminated in a reward - shortlist at the AD Black Sea festival.';

  const description = 'Dunno, why not?';
  const myRole = 
    'RAVI beer was created to speak directly to Gen Z in Georgia. The name itself translates to “Dunno”,' +
    'a word you constantly hear from Gen Z. Paired with the slogan “Why Not?”,' +
    'it became the perfect duo to express spontaneity, freedom, and self-expression.' +
    'The Goal - to make Gen Z feel seen, heard, and supported through a beer brand that speaks their language.';

  return (
    <div className="bg-foreground">
      <ProjectHero
        description={myRole}
        media={'https://www.youtube.com/embed/l_1N8uWxzOU'}
        isImage={false}
        title={'Ravi'}
      />
      <PageScrollParallax
        title={'Instead of big names, we chose micro-influencers'}
        body={introduction}
        word={description}
        staticImgs={[Picture1, Picture2, Picture3]}
      />
      <div>
        {researchAssets.map((asset, index) => (
          <Image
            key={index}
            src={asset}
            alt="Project specs"
            width={700}
            height={500}
            quality={100}
            layout="responsive"
          />
        ))}
      </div>
    </div>
  );
}
