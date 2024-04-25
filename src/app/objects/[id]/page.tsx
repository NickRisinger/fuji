import Image from 'next/image';
import WrapperMap from '~/components/WrapperMap';

interface ImgFile {
  id: number;
  fileId: number;
  typeId: number;
  modelId: number;
  order: number;
  createdAt: number;
  updatedAt: number;
  file: {
    id: number;
    tempName: string;
    name: string;
    extension: string;
    mimeType: string;
    size: number;
    isPublic: boolean;
    ownerId: number;
    createdAt: number;
    updatedAt: number;
    publicUrl: null | string;
    url: null | string;
  };
}

interface IObject {
  id: number;
  title: string;
  description: string;
  price: number;
  address: {
    value: string;
  };
  createdAt: number;
  updatedAt: number;
  agencyId: number;
  categoryId: number;
  realtorId: number;
  contractTypeId: null;

  imgFiles: ImgFile[];

  realtor: any;
  contractors: any[];
}

async function getObject(id: string) {
  const res = await fetch(
    `https://api.crm.staging.arbatdeport.life/v2/estate-object/${id}?expand=contractors,realtor`,
    {
      method: 'GET',
      headers: { 'X-Api-Key': 'IoOFarIAxjFRLgjJSYONgd6Y7gx50epd' },
    },
  );

  const data = (await res.json()) as unknown as IObject;

  return data;
}

function UserCard({
  type,
  name,
  phone,
  action,
}: {
  type: string;
  name: string;
  photo?: string;
  phone?: string;
  action?: any;
}) {
  return (
    <div className="">
      <div className=""></div>
      <div className="">
        <span className="">{type}</span>
        <div className="">
          <span className="">{name}</span>
          <span className="">{phone}</span>
        </div>
        {action && action}
      </div>
    </div>
  );
}

export default async function ObjectPage({
  params,
}: {
  params: { id: string };
}) {
  const object = await getObject(params.id);

  return (
    <div className="">
      <div className="">Object: {params.id}</div>
      <div className="flex gap-x-5">
        <div className="flex basis-2/3 flex-col gap-y-5">
          <div className="bg-[#ffffff] p-8">
            <div className="h-[440px] rounded-3xl">
              {object.imgFiles[1].file.publicUrl && (
                <Image
                  className="h-full w-full object-contain"
                  src={object.imgFiles[1].file.publicUrl}
                  alt={object.imgFiles[1].file.name}
                  width={500}
                  height={500}
                  quality={100}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              )}
            </div>
          </div>
          <div className="bg-[#ffffff] p-8">
            <h2 className="text-lg font-bold">Описание</h2>
            <div className="mt-6">
              <p className="">{object.description}</p>
            </div>
          </div>
          <div className="bg-[#ffffff] p-8">
            <h2 className="text-lg font-bold">Характеристики</h2>
            <div className="mt-6">
              <p className="">{object.description}</p>
            </div>
          </div>
          <div className="bg-[#ffffff] p-8">
            <h2 className="text-lg font-bold">Служебная информация</h2>
            <div className="mt-6">
              <p className="">{object.description}</p>
            </div>
          </div>
          <div className="bg-[#ffffff] p-8">
            <div className="h-[400px]">
              <WrapperMap />
            </div>
          </div>
        </div>
        <div className="flex basis-1/3 flex-col gap-y-5">
          <div className="bg-[#ffffff] p-8">
            <div className="flex gap-x-2">
              <button className="">Действия</button>
              <button className="">Покупатели: 20</button>
              <button className="">Документы</button>
            </div>
            <div className="">
              <div className="">
                <span className="">{object.price}</span>
                <span className="">{object.price}</span>
              </div>
              <div className="">
                <span>{object.address.value}</span>
                <button>На карте</button>
              </div>
            </div>
            <hr />
            <div className=""></div>
            <hr />
            <div className="">
              <UserCard
                type="Риелтор"
                name={object.realtor.nameAndInitials}
                phone={object.realtor.phone}
              />
            </div>
            <hr />
            <div className="">
              {object.contractors.map((contractor) => (
                <UserCard
                  key={contractor.id}
                  type="Продавец"
                  name={contractor.name}
                  phone={contractor.contractorPhones[0].phoneNumber}
                />
              ))}
            </div>
          </div>
          <div className="h-10 bg-[#ffffff]"></div>
          <div className="h-10 bg-[#ffffff]"></div>
          <div className="h-10 bg-[#ffffff]"></div>
        </div>
        {/* <pre>{JSON.stringify(object, null, 2)}</pre> */}
      </div>
      <div className="">Похожие объекты</div>
    </div>
  );
}
