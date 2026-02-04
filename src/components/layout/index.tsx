import React, { PropsWithChildren } from 'react';
import ContrastCursor from '@/components/animations/cursor/contrastCursor';
import { clsx } from 'clsx';

type Props = {
  title: string;
  center?: boolean;
};

export default function Layout({
  children,
  title,
  center
}: PropsWithChildren<Props>) {
  const isLongTitle = title.length > 50;
  
  return (
    <div className=" mt-36 px-8 py-16 sm:py-20">
      <h1
        className={clsx(
          'pb-14 text-3xl font-medium break-words leading-tight',
          isLongTitle 
            ? 'lg:text-5xl xl:text-6xl' 
            : 'lg:text-[10rem]',
          center ? 'items-center text-center' : ''
        )}
      >
        {title}
      </h1>
      {children} <ContrastCursor isActive={false} text={''} />
    </div>
  );
}
