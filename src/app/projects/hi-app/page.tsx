'use client';

import React, { useEffect } from 'react';
import Lenis from 'lenis';
import ProjectHero from '@/app/projects/project/hero';
import Picture1 from '../../../../public/images/hi-app/hiapp-1.jpg';
import Picture2 from '../../../../public/images/hi-app/hiapp-2.jpg';
import Picture3 from '../../../../public/images/hi-app/hiapp-3.jpg';
import PageScrollParallax from '@/components/pageScrollParallax';
import TextGradient from '@/components/animations/textAnimations/textGradient';
import ResearchBlocks, { ResearchBlock } from '@/components/researchBlocks';
import { assetUrl } from '@/lib/basePath';

export default function TandemProject() {
  const researchImages: ResearchBlock[] = [
    { type: 'image', src: assetUrl('/images/bike.png') },
    {
      type: 'text',
      content:
        'The highlight of the project was the post-production process. It was the most challenging stage, bringing together animation, illustration, and music to create a cool visual world for the campaign.',
    },
    { type: 'image', src: assetUrl('/images/bike.png') },
  ];

  const phrase =
    'To bring the world of Hi App to life, we collaborated with talented artists who created original music and custom illustrations for the campaign.';

  const heroText =
    'Hi App is a digital banking application by TBC Bank created specifically for school students and the Gen Z audience. ' +
    'The goal of the campaign was to introduce Hi App as a banking experience that feels relevant, creative, and easy to connect with for a younger generation. ' +
    'The challenge was to create a campaign that could speak authentically to Gen Z while balancing entertainment with clear communication.';

  const introduction =
    '- Creative Concept\n' +
    '- Master Video\n' +
    '- Four Key Visuals for OOH\n' +
    '- Social Media Plan';

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div>
      <ProjectHero
        description={heroText}
        media={'https://www.youtube.com/embed/bJpoOmqqb7E'}
        isImage={false}
        title={'Hi App'}
      />
      <TextGradient phrase={phrase} colour={'primary'} />
      <PageScrollParallax
        title={'Deliverables'}
        body={introduction}
        word={''}
        staticImgs={[Picture2, Picture3, Picture1]}
      />
      <div className="h-10 w-full p-24"></div>
      <ResearchBlocks blocks={researchImages} textClassName="text-foreground" />
    </div>
  );
}
