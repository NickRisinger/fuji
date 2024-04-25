import PageHeader from '~/components/PageHeader';
import ObjectCard from '~/components/ObjectCard';

interface IObject {
  id: number;
  title: string;
  description: string;
  price: number;
  address: {
    value: string;
  };
  createdAt: number;
}

async function getObjects() {
  const res = await fetch(
    'https://api.crm.staging.arbatdeport.life/v2/estate-object',
    {
      method: 'POST',
      headers: { 'X-Api-Key': 'IoOFarIAxjFRLgjJSYONgd6Y7gx50epd' },
      cache: 'no-store',
    },
  );

  const data = (await res.json()) as unknown as IObject[];

  return data;
}

export default async function ObjectsPage() {
  const objects = await getObjects();
  return (
    <>
      <PageHeader title="test" />

      <div className="flex flex-col gap-y-5">
        {objects.map((object) => (
          <ObjectCard key={object.id} object={object} />
        ))}
      </div>
    </>
  );
}
