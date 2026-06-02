'use client';

import React, { useEffect } from 'react';
import Lenis from 'lenis';
import ProjectHero from '@/app/projects/project/hero';
import Image from 'next/image';
import TextGradient from '@/components/animations/textAnimations/textGradient';
import PageScrollParallax from '@/components/pageScrollParallax';
import { assetUrl } from '@/lib/basePath';
import Picture1 from '../../../../public/images/un-women/parallax-1.jpg';
import Picture2 from '../../../../public/images/un-women/parallax-2.jpg';
import Picture3 from '../../../../public/images/un-women/parallax-3.jpg';


export default function AstraProject() {
  useEffect(() => {
    (async () => {
      // @ts-ignore
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  type ResearchBlock =
    | { type: 'image'; src: string }
    | { type: 'text'; content: string };

  const researchImages: ResearchBlock[] = [
    { type: 'image', src: assetUrl('/images/un-women/results.jpg') },
    {
      type: 'text',
      content: 'Deliverables: \n' +
        '* Strategy \n' +
        '* Creative Concept \n' +
        '* Qualitative research (focus groups) \n' +
        '* Social media assets \n' +
        '* Influencers  \n' +
        '* Event activations (Stand-ups) \n' +
        '* Media Plan ',
    },
    { type: 'image', src: assetUrl('/images/un-women/img-1-1.jpg') },
    { type: 'text', content: 'The work involved researching documents and archival materials, resulting in a brilliant creative solution from the art director: using the calligraphy of these female leaders as the primary typographic design, which was supported by the entire team and the client.' },
    { type: 'image', src: assetUrl('/images/un-women/img-3.png') },
  ];

  const credits: { role: string; name?: string }[] = [
    { role: 'Client', name: 'UN Women' },
    { role: 'Agency', name: 'Leavingstone' },
    { role: 'Creative Chairman', name: 'Levan Lepsveridze' },
    { role: 'Creative Director', name: 'Tatia Dolidze' },
    { role: 'Sr. Copywriter', name: 'Tina Jelia, Sophie Ivanishvili' },
    {
      role: 'Art Director',
      name: 'Salome Tinikashvili, Kote Tokhadze, Magda Janjalashvili, Magda Dumbadze',
    },
    {
      role: 'Graphic Designer',
      name: 'Nikita Mtchedlishvili, Eka Vekua, Mari Onavari Barbaqadze',
    },
    { role: 'Motion Designer', name: 'Luka Shvelidze' },
    { role: 'Agency Producer', name: 'Tamta Navrozashvili' },
    { role: 'Researcher', name: 'Esma Mania, Lela Gaprindashvili' },
    { role: 'Research Assistant', name: 'Tornike Kobaladze' },
    { role: 'Account Director', name: 'Ekaterine Ebanoidze, Zizi Nasrashvili' },
    { role: 'Account Lead', name: 'Maiko Gumberidze' },
    {
      role: 'Account Manager',
      name: 'Lana Bachaliashvili, Sopo Davitashvili, Keti Matcharashvili',
    },
    {
      role: 'Administrative Team',
      name: 'Pikria Javashvili, Ana Javakhishvili',
    },
    { role: 'CEO', name: 'Erekle Zurmukhtashvili' },
    { role: 'Head of Digital Advertising Unit', name: 'Anika Gavasheli' },
    { role: 'Senior Digital Advertiser', name: 'Elene Tsurtsumia' },
    { role: 'Music & Sound', name: 'Heima Production' },
    { role: 'Ensemble', name: 'Margaliti' },
    { role: 'Award Entry Manager', name: 'Tatia Darsadze' },
    {
      role: 'Special Thanks',
      name: 'Lamara Abzhandadze, Nana Jorjadze, Salome Kenchiashvili, Natalia Kipshidze and every participant.',
    },
  ];

  const phrase =
    'While we were working on this project, protests erupted against the authoritarian government. Naturally, this became a moment to rethink the campaign. The context had become far more challenging. However, women were and continue to be playing a significant role in the movement. We decided to encourage them and highlight their strength and leadership.';

  const description = 'Change Has a Female Voice';
  const heroText =
    '“Change Has a Female Voice” was the most challenging project for me. Let\'s start from the beginning. The agency received the brief about women in politics. The campaign aimed to empower women to fearlessly participate in politics by reminding them that leadership is part of their DNA. Even in the 12th century, Georgia had a powerful ruler, Tamar, along with many other influential female leaders whose stories are preserved in historical archives. Many of these narratives were suppressed during the Soviet period. Our idea was to resurface these stories and bring them back into the public conversation.';

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="bg-foreground">
      <ProjectHero
        description={heroText}
        media={'https://www.youtube.com/embed/f8-Nv2RPAPo'}
        isImage={false}
        title={'UN Women'}
      />
      <TextGradient
        phrase={phrase}
        colour={'#009CDB'}
        fontSize={'text-[18px] sm:text-[32px]'}
      />
      {researchImages.map((block, index) =>
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
          <p key={index} className="whitespace-pre-line px-8 py-12 text-lg text-white">
            {block.content}
          </p>
        )
      )}
      <PageScrollParallax
        title={'Awards'}
        body={''}
        staticImgs={[Picture1, Picture2, Picture3]}
      />
      <div className="relative w-full">
        <Image
          src={assetUrl('/images/un-women/cover.jpg')}
          alt="Credits"
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
    </div>
  );
}
