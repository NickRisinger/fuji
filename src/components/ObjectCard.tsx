import { Suspense } from 'react';

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

export default function ObjectCard({ object }: any) {
  return (
    <div key={object.id} className="flex gap-x-5 bg-white p-6">
      <div className="h-[220px] w-[354px] shrink-0 rounded-2xl bg-[#F1F3F7]"></div>
      <div className="flex flex-col">
        <span>{object.title}</span>
        <span>{object.price}</span>
        <span>{object.address.value}</span>
        <span>{object.description}</span>
      </div>
      <div className="flex flex-col justify-center gap-y-5">
        <div className="h-10 w-10 rounded-full bg-[#EAEDF1]"></div>
        <div className="h-10 w-10 rounded-full bg-[#EAEDF1]"></div>
        <div className="h-10 w-10 rounded-full bg-[#EAEDF1]"></div>
      </div>
      <div className="flex flex-col gap-y-5">
        <Suspense fallback={<div>Loading...</div>}>
          <Comment objectId={object.id} />
        </Suspense>
      </div>
    </div>
  );
}
