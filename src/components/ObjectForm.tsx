'use client';

import {
  FormProvider,
  useForm,
  SubmitHandler,
  useFormContext,
} from 'react-hook-form';

interface IObjectForm {
  title: string;
  description: string;
  address: {
    value: string;
  };
  categoryId: number;
  operationId: number;
  price: number;
  commissionPercent: number;
  commission: number;

  estateObjectData: {
    totalArea: number;
    livingArea: number;
    kitchenArea: number;
    roomType: string;
    apartmentNumber: number;
    cadastralNumber: string;
    repairCondition: string;
    shareAmount: string;
    balconyType: string;
    bathroomUnit: string;
    heatedFloor: string;
    ceilingHeight: number;
    viewFromWindow: string;
    isMortgageAvailable: string;
  };
}

export default function ObjectForm({
  defaultValues,
}: {
  defaultValues?: Partial<IObjectForm>;
}) {
  const methods = useForm<IObjectForm>({
    defaultValues,
  });

  const onSubmit: SubmitHandler<IObjectForm> = (data) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="w-full">
        <div className="flex flex-col gap-y-3">
          <input
            {...methods.register('title', { required: true, maxLength: 33 })}
            placeholder="Не указано"
          />
          <textarea
            {...methods.register('description', { required: true })}
            placeholder="Не указано"
          />
          <input
            {...methods.register('address.value', { required: true })}
            placeholder="Не указано"
          />
        </div>

        <div className="grid grid-cols-3 gap-3">
          <select
            {...methods.register('categoryId', {
              required: true,
              valueAsNumber: true,
            })}
          >
            <option value="1">Комнаты</option>
            <option value="2">Квартиры</option>
            <option value="3">Дома, дачи, коттеджи</option>
            <option value="4">Коммерческая</option>
            <option value="5">Земельные участки</option>
            <option value="6">Гаражи и машиноместа</option>
            <option value="7">Новостройки</option>
          </select>
          <select
            {...methods.register('operationId', {
              required: true,
              valueAsNumber: true,
            })}
          >
            <option value="1">Продажа</option>
            <option value="2">Аренда</option>
          </select>

          <input
            {...methods.register('price', {
              required: true,
              valueAsNumber: true,
              pattern: /[A-Za-z]{3}/,
            })}
            placeholder="Не указано"
          />
          <input
            type="number"
            {...methods.register('commissionPercent', {
              required: true,
              valueAsNumber: true,
              pattern: /^-?[0-9]+(\.[0-9]+)?$/,
            })}
            placeholder="Не указано"
          />
          <input
            type="number"
            {...methods.register('commission', {
              required: true,
              valueAsNumber: true,
              pattern: /^-?[0-9]+(\.[0-9]+)?$/,
            })}
            placeholder="Не указано"
          />
        </div>
        <ApartamentFields />
      </form>
    </FormProvider>
  );
}

function ApartamentFields() {
  const { register } = useFormContext();

  return (
    <div className="grid grid-cols-3 gap-x-5">
      <div className="flex flex-col gap-y-3">
        <span className="font-semibold">Категория недвижимости</span>
      </div>
      <div className="flex flex-col gap-y-3">
        <span className="font-semibold">Дом</span>
      </div>
      <div className="flex flex-col gap-y-3">
        <span className="font-semibold">Территория / Особые условия</span>
      </div>
    </div>
  );
}
