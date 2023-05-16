export interface ICardListProps {
  hide?: boolean;
  products?: any[];
}

interface ImageAttrData {
  data: {
    0: {
      id: number;
      attributes: {
        url: string;
      };
    } | null;
  };
}

interface GenderAttrData {
  data: {
    id: number;
  };
}

export interface AttrFromData {
  id: number;
  attributes: {
    name: string;
    price: number;
    images: ImageAttrData;
    gender: GenderAttrData;
    teamName: string;
  };
}
