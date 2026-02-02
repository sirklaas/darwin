export type Environment = 'development' | 'staging' | 'production';

export interface User {
  id: string;
  email: string;
  gameName: string;
  profilePicture: string;
  geneBalance: number;
  currentLevel: number;
  wins: number;
  losses: number;
}

export interface Match {
  id: string;
  player1Id: string;
  player2Id: string;
  level: number;
  status: 'pending' | 'active' | 'completed';
  winner?: string;
  encounterId: string;
  startTime: Date;
  endTime?: Date;
}

export interface Encounter {
  id: string;
  type: string;
  difficulty: number;
  levelRequirement: number;
  config: Record<string, unknown>;
  scoring: Record<string, unknown>;
}
