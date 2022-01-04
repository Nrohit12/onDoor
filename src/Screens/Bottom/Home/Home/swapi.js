import {grocItemsName} from '../../../../Assets/itemJson';

export class SelectedItem {
  name: string;
  price: number;
  id: string;
  onDiscount: boolean;
  discountPrice: number;
  quantity: string
  image: string

  constructor({
    name,
    price,
    id,
    onDiscount,
    discountPrice,
    quantity,
    image,
  }: any) {
    this.name = name;
    this.price = price;
    this.id = id;
    this.onDiscount = onDiscount;
    this.discountPrice = discountPrice;
    this.quantity = quantity;
    this.image = image;
  }

  compareName(name: string) {
    return this.name.toLowerCase() === name.toLowerCase().trim();
  }
}

export class SelectedItems extends Array {
  query(query: string) {
    if (!this.name || query === '') return [];
    console.log('hello')
    const regex = new RegExp(`${query.trim()}`, 'i');
    return new SelectedItems(
      ...this.filter(grocItem => {
        
        grocItem.name.search(regex) >= 0;
      }),
    );
  }
}

export const fetchItems = {
  fetchName(): Promise<SelectedItems> {
    const results = grocItemsName;
    return new SelectedItems(
      ...results.map((grocItem: any) => new SelectedItem(grocItem)),
    );
  },
};
