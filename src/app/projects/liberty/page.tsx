'use client';
import ProjectHero from '@/app/projects/project/hero';
import PageScrollParallax from '@/components/pageScrollParallax';
import Picture1 from '../../../../public/images/liberty/liberty-2.jpg';
import Picture2 from '../../../../public/images/liberty/liberty-1.jpg';
import Picture3 from '../../../../public/images/liberty/liberty-3.jpg';
import React from 'react';
import { assetUrl } from '@/lib/basePath';
import ResearchBlocks, { ResearchBlock } from '@/components/researchBlocks';
import Credits, { CreditEntry } from '@/components/credits';

export default function LibertyProject() {
  const researchAssets: ResearchBlock[] = [
    { type: 'image', src: assetUrl('/images/liberty/glass-drawing.jpg') },
    {
        type: 'text',
        content:
          'The highlight of the project was working with the camera-robot on the set. ',
    },
    { type: 'image', src: assetUrl('/images/liberty/dark-room.jpg') },

  ];

  const credits: CreditEntry[] = [
    { role: 'Client', name: 'Radio Free Europe/Radio Liberty' },
    { role: 'Marketing Director', name: 'Luka Ghughunishvili' },
    { role: 'Agency', name: 'Leavingstone' },
    { role: 'Creative Chairman', name: 'Levan Lepsveridze' },
    { role: 'Creative Directors', name: 'Mari Sukhishvili, Beqa Adamashvili' },
    { role: 'Account Directors', name: 'Zizi Nasrashvili, Ekaterine Ebanoidze' },
    { role: 'Account Manager', name: 'Lana Bachaliashvili' },
    { role: 'Head of Design', name: 'Matasi Sulakauri' },
    { role: 'Design Team', name: 'Giorgi Jinoridze, Nikita Mchedlishvili' },
    { role: 'Producer', name: 'Tamta Navrozasvili' },
    { role: 'Production & Post-Production', name: 'LF&T' },
    { role: 'Director', name: 'Vakho Chikvaidze, Irakli Bedukadze' },
    { role: 'DOP', name: 'Vigen Vartanov (Biba)' },
    { role: 'Production Manager', name: 'Levan Parulava' },
    {
      role: 'Grip Staff',
      name: 'Mikheil Saganelidze, Beka Dvalishvili, Davit Samkharadze, Mikheil Gvalis',
    },
    { role: 'Cameraman/Playback', name: 'Khatia Khalvashi, Ninia Tsabadze' },
    { role: 'CGI', name: 'George Korganov' },
    { role: 'Editing', name: 'Vakho Chikvaidze, Irakli Bedukadze' },
    { role: 'Color Correction', name: 'Vigen Vartanov (Biba)' },
    { role: 'Music, sound design and voice over', name: 'Avira sound' },
    { role: 'Catering', name: 'Belgian Waffle' },
  ];
  const myRole =
  'Radio Free Europe/Radio Liberty is an American state-funded media organization broadcasting news and analyses in 24 countries. ' +
  'The goal of the campaign was to communicate that Radio Liberty provides unbiased, factual reporting without being too complicated. ' +
  'The challenge was to create a video minimal in design and impactful in narrative. However, the biggest challenge was the scale of the project, developing a campaign for 23 countries.';

  const introduction = 
  'Deliverables: \n' +
  '* Creative Concept \n' +
  '* Main Video: A 30-60 second video. \n' +
  '* Key Visual: A striking, minimalist visual that can stand alone in print and digital advertising.\n' +
  '* Adapted Videos: The main video should be adapted for 23 countries and 26 languages.';

  return (
    <div className="bg-foreground">
      <ProjectHero
        description={myRole}
        media={'https://www.youtube.com/embed/UCOYTSDSiAM'}
        isImage={false}
        title={'Radio Free Europe/Radio Liberty'}
      />
      <PageScrollParallax
        title={<i>“Clear Facts in a Complex World”</i>}
        body={introduction}
        staticImgs={[Picture1, Picture2, Picture3]}
      />
      <div>
        <ResearchBlocks blocks={researchAssets} />
      </div>
      <Credits
        image={assetUrl('/images/liberty/robot-arm.jpg')}
        credits={credits}
      />
    </div>
  );
}
