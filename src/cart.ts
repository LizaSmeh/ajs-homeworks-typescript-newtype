import Buyable from "./domain/buyable";
export default class Cart {
    private _items: Buyable[] =[];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[]{
        return[...this._items];
    }

    getTotalCost(): number {
        return this._items.reduce((accum: number, current: Buyable) => accum + current.price, 0);
    }

    getTotalCostDiscount(discount: number): number {
        const totalCost = this.getTotalCost();
        return totalCost - (totalCost * (discount/100));
    }

    removeCart(id: number): void {
        this._items = this._items.filter((item: Buyable) => item.id !== id);
    }

    
}