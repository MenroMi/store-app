export interface ICardListProps {
  hide: boolean;
}

export interface AttrFromData {
  id: number;
  attributes: {
    name: string;
    price: number;
    images: {
      data: {
        0: {
          id: number;
          attributes: {
            url: string;
          };
        } | null;
      };
    };
    teamName: string;
  };
}
