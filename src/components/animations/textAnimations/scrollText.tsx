import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MutableRefObject, useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

// Line 1: Hey, I am Lana,
const word1 = 'Hey,';
const word2 = 'I';
const word3 = 'am';
const word4 = 'Lana,';
// Line 2: and I am obsessed with creativity
const word5 = 'and';
const word6 = 'I';
const word7 = 'am';
const word8 = 'obsessed';
const word9 = 'with';
const word10 = 'creativity';

function WordSpacer() {
  return <div className="w-2 shrink-0 xs:w-4 sm:w-6" aria-hidden />;
}

function getRandomSpeed() {
  const randomDecimal = Math.random();
  return 0.8 + randomDecimal * (1.5 - 0.8); // Increased speed range
}
function getRandomRotation() {
  return Math.random() * 60 - 30; // Random rotation between -30 and 30 degrees
}

const animateLettersOnScroll = (containerRef: MutableRefObject<any>) => {
  const lettersContainer = containerRef.current;
  const letterElements = lettersContainer?.querySelectorAll('.letter');

  letterElements.forEach((letter: Element, index: number) => {
    gsap.to(letter, {
      y: (i, el) =>
        (1 - parseFloat(el.getAttribute('data-speed'))) *
        ScrollTrigger.maxScroll(window),
      ease: 'power2.out',
      duration: 0.8,
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        invalidateOnRefresh: true,
        scrub: 0.5
      },
      rotation: getRandomRotation()
    });
  });
};

function LetterDisplay({ word }: { word: string }) {
  return word.split('').map((letter, index) => (
    <div
      key={index}
      className="letter text-4xl font-semibold xs:text-[56px] xs:leading-none md:text-[72px] lg:text-[96px] xl:text-[128px] "
      data-speed={getRandomSpeed()}
    >
      {letter}
    </div>
  ));
}

export function LetterCollision() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    animateLettersOnScroll(containerRef);
  }, []);

  return (
    <div ref={containerRef} className="ml-8 scroll-smooth">
      <div className="-mt-28 mb-36 flex h-screen flex-col justify-end lg:mb-24">
        <div className="flex flex-wrap p-0">
          <LetterDisplay word={word1} />
          <WordSpacer />
          <LetterDisplay word={word2} />
          <WordSpacer />
          <LetterDisplay word={word3} />
          <WordSpacer />
          <LetterDisplay word={word4} />
        </div>
        <div className="flex flex-wrap">
          <LetterDisplay word={word5} />
          <WordSpacer />
          <LetterDisplay word={word6} />
          <WordSpacer />
          <LetterDisplay word={word7} />
          <WordSpacer />
          <LetterDisplay word={word8} />
          <WordSpacer />
          <LetterDisplay word={word9} />
          <WordSpacer />
          <LetterDisplay word={word10} />
        </div>
      </div>
    </div>
  );
}
