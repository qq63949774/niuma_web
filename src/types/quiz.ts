export type DimensionKey = 'endure' | 'internal' | 'rebel' | 'slack';

export type DimensionScores = Record<DimensionKey, number>;

export interface QuizOption {
  id: string;
  text: string;
  scores: Partial<Record<DimensionKey, number>>;
}

export interface QuizQuestion {
  id: string;
  prompt: string;
  options: QuizOption[];
}

export interface ResultType {
  typeKey: string;
  title: string;
  subtitle: string;
  description: string;
  traits: string[];
  advice: string;
}
