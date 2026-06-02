'use client';
import { JSX, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { clsx } from 'clsx';

gsap.registerPlugin(ScrollTrigger);
export default function TextGradient({
  phrase,
  colour,
  fontSize = 'text-[24px] sm:text-[50px]'
}: {
  phrase: string;
  colour: string;
  fontSize?: string;
}) {
  const isHex = colour?.startsWith('#');
  let refs = useRef<HTMLSpanElement[]>([]);
  const container = useRef(null);
  const body = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, []);

  const createAnimation = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: '-160%',
        end: `+=${window.innerHeight / 1.5}`
      },
      opacity: 1,
      ease: 'none',
      stagger: 0.1
    });
  };

  const splitWords = (phrase: string) => {
    let body: JSX.Element[] = [];
    phrase.split(' ').forEach((word, i) => {
      const letters = splitLetters(word);
      body.push(
        <p
          className={clsx(
            'm-0 mr-4 inline-block whitespace-nowrap p-0 font-semibold',
            fontSize
          )}
          key={word + '_' + i}
        >
          {letters}
        </p>
      );
    });
    return body;
  };

  const splitLetters = (word: string) => {
    let letters: JSX.Element[] = [];
    word.split('').forEach((letter, i) => {
      letters.push(
        <span
          className="opacity-40"
          key={letter + '_' + i}
          ref={(el: HTMLSpanElement) => {
            refs.current?.push(el);
          }}
        >
          {letter}
        </span>
      );
    });
    return letters;
  };

  return (
    <main
      ref={container}
      style={isHex ? { color: colour } : undefined}
      className={clsx(
        'align-end mb-[20vh] flex h-[50vh] justify-center sm:pt-[10vh]',
        !colour && 'text-background mix-blend-difference',
        colour && !isHex && `text-${colour}`
      )}
    >
      <div ref={body} className="flex w-[90%] flex-wrap">
        {splitWords(phrase)}
      </div>
    </main>
  );
}
