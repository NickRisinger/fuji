export interface ImgFile {
  id: number;
  fileId: number;
  typeId: number;
  modelId: number;
  order: number;
  createdAt: number;
  updatedAt: number;
  file: File;
}

export interface File {
  id: number;
  tempName: string;
  name: string;
  size: number;
  isPublic: boolean;
  ownerId: number;
  createdAt: number;
  updatedAt: number;
  publicUrl: null | string;
  url: null | string;
}

export interface IAddress {
  city: string;
  house: string;
  okato: string;
  oktmo: string;
  value: string;
  qc_geo: string;
  region: string;
  street: string;
  country: string;
  fias_id: string;
  geo_lat: string;
  geo_lon: string;
  kladr_id: string;
  city_type: string;
  fias_level: string;
  geoname_id: string;
  house_type: string;
  tax_office: string;
  postal_code: string;
  region_type: string;
  street_type: string;
  city_fias_id: string;
  city_kladr_id: string;
  house_fias_id: string;
  capital_marker: string;
  city_type_full: string;
  city_with_type: string;
  house_kladr_id: string;
  region_fias_id: string;
  street_fias_id: string;
  yandex_address: string;
  house_type_full: string;
  region_iso_code: string;
  region_kladr_id: string;
  street_kladr_id: string;
  country_iso_code: string;
  federal_district: string;
  region_type_full: string;
  region_with_type: string;
  street_type_full: string;
  street_with_type: string;
  tax_office_legal: string;
  fias_actuality_state: string;
}

export interface IEstateObject {
  id: number;
  externalId: null;
  title: string;
  description: string;
  phone: null;
  serviceInform: string;
  categoryId: number;
  realtorId: number;
  contractTypeId: number;
  price: number;
  deposit: null;
  commission: number;
  isAuction: boolean;
  sourceXmlId: null;
  createdAt: number;
  updatedAt: number;
  beginCooperationAt: number;
  address: IAddress;
  isAllowFeed: boolean;
  import: null;
  isDeleted: boolean;
  //   estateObjectData: EstateObjectData;
  agencyId: number;
  geom: string;
  operationId: number;
  archivedAt: null;
  docs: null;
  sourceId: number;
  errs: null;
  stepId: number;
  avito_version: null;
  cian_version: null;
  domclick_version: null;
  m2_version: null;
  price_per_square_meter: number;
  is_consent_advertising: boolean;
  creatorId: number;
  isShowAllAgencies: boolean;
  vkLink: null;
  sourceUrl: string[];
  inSelection: boolean;
  postponedToDate: null;
  archivingReasonId: null;
  contactPersons: null;
  isDealSupport: boolean;
  isExtraDeal: boolean;
  hasFirstFeed: boolean;
  trafficLight: number;
  contractorIds: number[];
  bidCollationCount: number;
  intersectionCount: number;
  formattedTitle: string;
  docFiles: any[];
  imgFiles: ImgFile[];
  getAllowFeedRequiredIds: number[];
  priceForSquare: number;
  //   contractors: Contractor[];
  //   realtor: Realtor;
  favorite: boolean;
  deals: any[];
  isObjectReady: boolean;
}