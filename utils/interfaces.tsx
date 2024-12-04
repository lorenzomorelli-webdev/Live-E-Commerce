export enum ProductCategory {
  Vintage = "Vintage",
  Premium = "Premium",
  Standard = "Standard",
  Special = "Special",
}

 export function mapApiTagToEnum(tag: string): ProductCategory{
  const tagMapping: { [key: string]: ProductCategory } = {
      "Vintage": ProductCategory.Vintage,
      "Premium": ProductCategory.Premium,
      "Standard": ProductCategory.Standard,
      "Special": ProductCategory.Special,
  };
  return tagMapping[tag]
}

export interface AllProduct {
  id: number;
  name: String;
  price: number;
  image: String;
  tag: ProductCategory;
}
