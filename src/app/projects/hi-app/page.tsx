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
    { type: 'text', content: 'Add your text here.' },
    { type: 'image', src: assetUrl('/images/bike.png') },
  ];

  const phrase =
    'By 2050, there will be more plastic than fish in the ocean by weight. ' +
    'Approximately 100,000 marine mammals and 1 million seabirds die each year' +
    ' from plastic pollution. Only about 9% of all plastic waste ever produced has been recycled.';

  const heroText =
    'Sustainable solutions for the lifecycle of baby care products. [2018 university project]';
  const introduction = `
    As a design engineer, I tackled the environmental impact of single-use plastics in baby care packaging by designing StackeRs, an innovative solution that reduces waste and provides value to end-users. Leveraging my skills in design thinking, 3D modeling (CAD), and sustainable design principles, I developed a packaging concept that transforms into a set of versatile, safe building blocks post-use.

    Through iterative prototyping and material exploration, I refined the design for optimal functionality and manufacturability, opting for 95% recycled plastics. I also devised a closed-loop system for collection and recycling of the blocks.\n

    StackeRs demonstrate my ability to apply a user-centric, sustainability-focused approach to product design, combining research, creativity, and technical skills to address real-world challenges. This project highlights my proficiency in:\n\n

    - Design thinking and problem-solving
    - 3D modeling and rapid prototyping
    - Material selection and sustainable design principles
    - Iterative design and testing
    - Designing for manufacturability and end-of-life
  `;

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
        title={'StackeRs'}
        body={introduction}
        word={''}
        staticImgs={[Picture2, Picture3, Picture1]}
      />
      <div className="h-10 w-full p-24"></div>
      <ResearchBlocks blocks={researchImages} textClassName="text-foreground" />
    </div>
  );
}
