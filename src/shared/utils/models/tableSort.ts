export enum Order {
  asc = 'asc',
  desc = 'desc'
}

export interface HeadCell<T> {
  id: keyof T;
  disablePadding: boolean;
  label: string;
  numeric: boolean;
}
