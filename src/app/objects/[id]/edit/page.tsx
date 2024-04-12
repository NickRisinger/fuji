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

async function getObject(id: string) {
  const res = await fetch(
    `https://api.crm.staging.arbatdeport.life/v2/estate-object/${id}`,
    {
      method: 'GET',
      headers: { 'X-Api-Key': 'IoOFarIAxjFRLgjJSYONgd6Y7gx50epd' },
    },
  );

  const data = (await res.json()) as unknown as IObject;

  return data;
}

export default async function Page({ params }: { params: { id: string } }) {
  const data = await getObject(params.id);

  return (
    <div className="">
      <div className="">Object: {params.id}</div>
      <div className="">
        <div className="">
          <label htmlFor="title" className="flex flex-col">
            <span>Заголовок</span>
            <input id="title" type="text" />
          </label>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}
