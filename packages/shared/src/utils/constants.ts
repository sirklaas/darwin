export const GAME_CONFIG = {
  initialGenesPurchase: 2500,
  initialGenesCost: 25, // EUR
  encounterCost: 100,
  winnerGeneReward: 75,
  loserGenePenalty: 100,
  maxLevel: 10,
  levelCapacities: {
    1: 1024,
    2: 512,
    3: 256,
    4: 128,
    5: 64,
    6: 32,
    7: 16,
    8: 8,
    9: 4,
    10: 2,
  },
} as const;
