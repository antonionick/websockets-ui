export interface IGameModel {
  gameId: string;
  players: IGamePlayerModel[];
}

export interface IGamePlayerModel {
  playerId: number;
  playerName: string;
}
