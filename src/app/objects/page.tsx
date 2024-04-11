interface IObject {
  id: number;
}

async function getObjects() {
  const res = await fetch(
    'https://api.crm.staging.arbatdeport.life/v2/estate-object',
    {
      method: 'POST',
      headers: { 'X-Api-Key': 'IoOFarIAxjFRLgjJSYONgd6Y7gx50epd' },
    },
  );

  const data = (await res.json()) as unknown as IObject[];

  return data;
}

export default async function Objects() {
  const objects = await getObjects();
  return (
    <>
      <div className="flex flex-col gap-y-5">
        {objects.map((object) => (
          <div key={object.id} className="flex gap-x-5 bg-white p-6">
            <div className="h-[220px] w-[354px] rounded-2xl bg-[#F1F3F7]"></div>
            {object.id}
          </div>
        ))}
      </div>
    </>
  );
}
