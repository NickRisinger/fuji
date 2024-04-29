import PageHeader from '~/components/PageHeader';
import ObjectCard from '~/components/ObjectCard';
import type { IEstateObject } from '~/types/object';
import Pagination from '~/components/Pagination';

async function getObjects(params: any) {
  const res = await fetch(
    'https://api.crm.staging.arbatdeport.life/v2/estate-object',
    {
      method: 'POST',
      body: JSON.stringify(params),
      headers: { 'X-Api-Key': 'IoOFarIAxjFRLgjJSYONgd6Y7gx50epd' },
      cache: 'no-store',
    },
  );

  const pagination = {
    totalCount: Number(res.headers.get('x-pagination-total-count')),
    pageCount: Number(res.headers.get('x-pagination-page-count')),
    currentPage: Number(res.headers.get('x-pagination-current-page')),
    perPage: Number(res.headers.get('x-pagination-per-page')),
  };

  const data = (await res.json()) as unknown as IEstateObject[];

  return { data, pagination };
}

export default async function ObjectsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { data: objects, pagination } = await getObjects(searchParams);
  return (
    <>
      <PageHeader title="test" />

      <div className="flex flex-col gap-y-5">
        {objects.map((object) => (
          <ObjectCard key={object.id} object={object} />
        ))}
        <Pagination {...pagination} />
      </div>
    </>
  );
}
