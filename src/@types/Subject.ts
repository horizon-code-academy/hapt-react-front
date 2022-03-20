export default interface Subject {
  _id?: string;
  label: string;
  field: string;
  nb_hour: number;
  price_hour: number;
  description?: string;
}
