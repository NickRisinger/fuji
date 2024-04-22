'use client';

import dynamic from 'next/dynamic';

const Map = dynamic(() => import('./Map'), {
  ssr: false,
});

export default function WrapperMap() {
  return <Map coordinates={{ lat: 57.767918, lng: 40.926894 }} />;
}
