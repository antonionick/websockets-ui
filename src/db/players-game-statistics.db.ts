const playerNameToWinsCountMap = new Map<string, number>();

export const playersGameStatisticsDatabase = {
  getPlayerWinsCount(playerName: string): number {
    return playerNameToWinsCountMap.get(playerName) ?? 0;
  },
};
