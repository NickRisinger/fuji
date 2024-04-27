'use client';

import Link from 'next/link';
import { useAccess } from '~/contexts/AccessContext';

export default function ObjectCardActions({ objectId }: { objectId: number }) {
  const { permissions } = useAccess();

  return (
    <div className="">
      <div className=""></div>
      <ul className="">
        {permissions.includes('ObjectContractorUpdate') && (
          <li className="">
            <Link href={`/objects/${objectId}/edit`} prefetch>
              Редактировать
            </Link>
          </li>
        )}
        <li className="">Перенести в архив</li>
        <li className="">История</li>
        <li className="">Сменить ID</li>
        <li className="">Пересечения</li>
        <li className="">
          <Link href={`/tasks/create?objectIds=${objectId}`}>
            Добавить задачу
          </Link>
        </li>
        <li className="">
          <Link href={`/deals/create?objectIds=${objectId}`}>
            Начать сделку
          </Link>
        </li>
        <li className="">Добавить комментарий</li>
        <li className="">Скачать договор</li>
        {permissions.includes('ObjectChangeRealtor') && (
          <li className="">Сменить риэлтора</li>
        )}
        <li className="">Ссылка на презентацию</li>
        {permissions.includes('ObjectSourceLinkView') && (
          <li className="">Ссылка на оригинал</li>
        )}
        {permissions.includes('ObjectShareLinkCreate') && (
          <li className="">Ссылка на рекламу</li>
        )}
        {permissions.includes('ObjectModerationIndex') && (
          <li className="">Модерация</li>
        )}
        <li className="">Удалить водяной знак</li>
      </ul>
    </div>
  );
}
