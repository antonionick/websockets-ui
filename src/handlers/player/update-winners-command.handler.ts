import { playersDatabase } from '../../db/players.db.js';
import { playersGameStatisticsDatabase } from '../../db/players-game-statistics.db.js';

export interface IWinnerDataModel {
  name: string;
  wins: number;
}

export const updateWinnersCommandHandler = (): IWinnerDataModel[] => {
  const playersNames = playersDatabase.getAllPlayersNames();

  const winnersData: IWinnerDataModel[] = playersNames
    .map((playerName) => ({
      name: playerName,
      wins: playersGameStatisticsDatabase.getPlayerWinsCount(playerName),
    }))
    .sort((a: IWinnerDataModel, b: IWinnerDataModel) => a.wins - b.wins);

  return winnersData;
};
