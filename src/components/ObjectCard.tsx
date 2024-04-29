import Link from 'next/link';
import { Suspense } from 'react';
import ObjectActions from './ObjectActions';
import Image from 'next/image';
import type { IEstateObject } from '~/types/object';

interface ITimeline {
  id: number;
  modelClass:
    | 'EstateObject'
    | 'Bid'
    | 'Deal'
    | 'Mortgage'
    | 'Task'
    | 'CallList';
  modelId: number;
  nodeType: 1 | 2 | 3;
  createdAt: number;
  updatedAt: number;
  comment: string;
  created_by: number;
  visibility_type: 1 | 2 | 3;
  creator: string;
}

async function getLastComment(objectId: number) {
  const res = await fetch(
    `https://api.crm.staging.arbatdeport.life/v2/timeline/get-last-node?modelId=${objectId}&className=EstateObject&nodeType=1`,
    {
      method: 'GET',
      headers: { 'X-Api-Key': 'IoOFarIAxjFRLgjJSYONgd6Y7gx50epd' },
    },
  );

  const data = (await res.json()) as unknown as ITimeline;

  return data;
}

async function Comment({ objectId }: { objectId: number }) {
  const data = await getLastComment(objectId);

  return data && <div className="">{data.comment}</div>;
}

export default function ObjectCard({ object }: { object: IEstateObject }) {
  const images: any[] = object.imgFiles
    .filter((item) => item.file.isPublic)
    .map((item) => ({ name: item.file.name, url: item.file.publicUrl }));

  return (
    <div key={object.id} className="flex gap-x-5 bg-white p-6">
      <div className="relative h-[220px] w-[354px] shrink-0 rounded-2xl bg-[#F1F3F7]">
        {images.length ? (
          <Image
            className="h-full w-full object-contain"
            src={images[0].url}
            alt={object.title}
            width={354}
            height={220}
            quality={100}
            priority
          />
        ) : (
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M69.518 24.2833C63.9855 19.7412 56.0145 19.7412 50.482 24.2833L23.6546 46.3082C21.341 48.2077 20 51.0437 20 54.0371V89.9999C20 95.5228 24.4772 99.9999 30 99.9999H90C95.5229 99.9999 100 95.5228 100 89.9999V54.0371C100 51.0437 98.659 48.2077 96.3454 46.3082L69.518 24.2833ZM44.1366 16.5544C53.3575 8.98415 66.6425 8.98416 75.8634 16.5544L102.691 38.5793C107.318 42.3782 110 48.0502 110 54.0371V89.9999C110 101.046 101.046 110 90 110H30C18.9543 110 10 101.046 10 89.9999V54.0371C10 48.0502 12.682 42.3782 17.3093 38.5793L44.1366 16.5544Z"
                fill="#BFDBFE"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M40 80C40 71.7157 46.7157 65 55 65H65C73.2843 65 80 71.7157 80 80V105H70V80C70 77.2386 67.7614 75 65 75H55C52.2386 75 50 77.2386 50 80V105H40V80Z"
                fill="#BFDBFE"
              />
            </svg>
          </div>
        )}
        <div className="absolute left-[10px] top-[10px] rounded-full bg-white px-[14px] py-[6px]">
          <span className="text-sm font-bold text-[#282B2E]">{object.id}</span>
        </div>
        <div className="absolute bottom-3 right-3 text-white">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.57184 3.29212C7.23816 3.06502 7.93573 3 8.55259 3C10.0173 3 11.1217 3.62533 12.0001 4.25297C12.8856 3.62051 13.9825 2.99999 15.4645 3C16.1234 3 16.7973 3.09209 17.4504 3.30936C21.4399 4.60164 22.7249 8.89691 21.6111 12.4252L21.6064 12.44L21.6012 12.4548C20.9848 14.2143 19.9769 15.8214 18.6544 17.1361L18.6487 17.1417L18.643 17.1473C16.7962 18.9253 14.7223 20.5314 12.5144 21.8572L11.9932 22.1702L11.4754 21.8514C9.2723 20.4952 7.23758 18.9322 5.36838 17.1397L5.36067 17.1323L5.35312 17.1248C4.04202 15.8126 3.0341 14.2173 2.40852 12.4594L2.40329 12.4447L2.39852 12.4299C1.26317 8.89388 2.5547 4.60375 6.57184 3.29212ZM8.55259 5C8.05927 5 7.59871 5.05434 7.21279 5.18664L7.20536 5.18919L7.19789 5.19162C4.50974 6.0662 3.40868 9.01153 4.29808 11.8038C4.82368 13.2738 5.66692 14.607 6.76049 15.7037C8.375 17.251 10.1216 18.6183 12.0053 19.8229C13.8827 18.6436 15.6547 17.2472 17.2499 15.7122C18.3492 14.6176 19.1913 13.2777 19.7085 11.8084C20.5855 9.00771 19.4772 6.06631 16.831 5.211L16.822 5.20812L16.822 5.20808C16.3984 5.06675 15.9399 5 15.4645 5C14.3737 4.99999 13.6196 5.52498 12.6046 6.29612L11.9986 6.75645L11.3935 6.29517C10.3945 5.53381 9.62392 5 8.55259 5Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-col">
        <Link href={`/objects/${object.id}`} prefetch>
          {object.title}
        </Link>
        <span>{object.price}</span>
        <span>{object.address.value}</span>
        <span>{object.description}</span>
        <span>{object.id}</span>
      </div>
      <div className="flex flex-col justify-center gap-y-5">
        <div className="h-10 w-10 rounded-full bg-[#EAEDF1]"></div>
        <div className="h-10 w-10 rounded-full bg-[#EAEDF1]"></div>
        <div className="h-10 w-10 rounded-full bg-[#EAEDF1]"></div>
      </div>
      <div className="flex flex-col gap-y-5">
        <ObjectActions objectId={object.id} />
        <Suspense fallback={<div>Loading...</div>}>
          <Comment objectId={object.id} />
        </Suspense>
      </div>
    </div>
  );
}
