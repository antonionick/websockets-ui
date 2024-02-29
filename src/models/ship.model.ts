export type ShipType = 'small' | 'medium' | 'large' | 'huge';

export interface IShip {
  position: IShipPosition;
  direction: boolean;
  length: number;
  type: ShipType;
}

export interface IShipPosition {
  x: number;
  y: number;
}
