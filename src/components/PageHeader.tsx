'use client';

import { Fragment } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function PageHeader({ title }: { title: string }) {
  const pathname = usePathname();
  const segments = pathname.split('/').filter((item) => item !== '');

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">{title}</div>
      <ul className="flex items-center gap-x-3">
        <li className="">
          <Link href={'/'}>Главная</Link>
        </li>
        {segments.length > 0 && ' / '}
        {segments.map((link, index) => {
          let href = `/${segments.slice(0, index + 1).join('/')}`;
          let itemClasses = pathname === href ? `` : '';
          let itemLink = link;
          return (
            <Fragment key={index}>
              <li className="">
                <Link href={href}>{itemLink}</Link>
              </li>
              {segments.length !== index + 1 && ' / '}
            </Fragment>
          );
        })}
      </ul>
    </div>
  );
}
