interface MenuItem {
  title: string;
  icon: string;
  'background-color'?: string;
  'icon-color'?: string;
  path: string;
  visible: boolean;
  mobile?: boolean;
  subMenu?: MenuItem;
}

async function getMenuItems() {
  const res = await fetch(
    'https://api.crm.staging.arbatdeport.life/v2/access/get-menu-items',
    {
      method: 'GET',
      headers: { 'X-Api-Key': 'IoOFarIAxjFRLgjJSYONgd6Y7gx50epd' },
    },
  );

  const data = (await res.json()) as unknown as MenuItem[];

  return data;
}

export default async function Sidebar() {
  const menu = await getMenuItems();

  return <></>;
}
