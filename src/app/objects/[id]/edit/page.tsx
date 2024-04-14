interface IObjectForm {
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

  const data = (await res.json()) as unknown as IObjectForm;

  return data;
}

export default async function Page({ params }: { params: { id: string } }) {
  const data = await getObject(params.id);

  return (
    <div className="">
      <div className="">Object: {params.id}</div>
      <div className="flex gap-x-5">
        <div className="flex flex-col">
          <div className="">
            <div className="">
              <input type="text" placeholder="Заголовок" />
              <input type="text" placeholder="Описание" />
              <input type="text" placeholder="Адрес" />
            </div>
            <div className="flex gap-x-6">
              <label htmlFor="">
                <input type="checkbox" placeholder="Описание" />
                <span>Эксклюзив</span>
              </label>
              <label htmlFor="">
                <input type="checkbox" placeholder="Описание" />
                <span>Согласие на рекламу</span>
              </label>
              <label htmlFor="">
                <input type="checkbox" placeholder="Описание" />
                <span>Сопровождение</span>
              </label>
            </div>
          </div>
          <hr />
          <div className=""></div>
          <hr />
          <div className=""></div>
          <hr />
          <div className=""></div>
          <hr />
          <div className=""></div>
          <hr />
          <div className=""></div>
          <hr />
          <div className=""></div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}
