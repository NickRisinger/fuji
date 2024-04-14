'use client';

import { useForm, SubmitHandler } from 'react-hook-form';

interface IObjectForm {
  title: string;
  address: {
    value: string;
  };
}

export default function ObjectForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IObjectForm>();

  const onSubmit: SubmitHandler<IObjectForm> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="test" {...register('title')} />
      <input defaultValue="test" {...register('title')} />
      <input defaultValue="test" {...register('address.value')} />
    </form>
  );
}
