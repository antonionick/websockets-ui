export interface IGameModel {
  gameId: number;
  players: IGamePlayerModel[];
}

export interface IGamePlayerModel {
  playerId: number;
  playerName: string;
}
