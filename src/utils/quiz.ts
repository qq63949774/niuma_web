import { fallbackByPrimary, resultProfiles } from '../data/results';
import type { DimensionKey, DimensionScores, QuizQuestion } from '../types/quiz';

const dimensionOrder: DimensionKey[] = ['endure', 'internal', 'rebel', 'slack'];

export function getScoreBoard(questions: QuizQuestion[], answers: (number | null)[]): DimensionScores {
  const initialScores: DimensionScores = {
    endure: 0,
    internal: 0,
    rebel: 0,
    slack: 0,
  };

  return questions.reduce((scores, question, questionIndex) => {
    const selectedOptionIndex = answers[questionIndex];

    if (selectedOptionIndex === null) {
      return scores;
    }

    const selectedOption = question.options[selectedOptionIndex];

    if (!selectedOption) {
      return scores;
    }

    for (const dimension of dimensionOrder) {
      scores[dimension] += selectedOption.scores[dimension] ?? 0;
    }

    return scores;
  }, initialScores);
}

export function getSortedDimensions(scoreBoard: DimensionScores): DimensionKey[] {
  return [...dimensionOrder].sort((left, right) => {
    const scoreDifference = scoreBoard[right] - scoreBoard[left];

    if (scoreDifference !== 0) {
      return scoreDifference;
    }

    return dimensionOrder.indexOf(left) - dimensionOrder.indexOf(right);
  });
}

export function getResultType(scoreBoard: DimensionScores) {
  const [primary, secondary] = getSortedDimensions(scoreBoard);

  const exactMatch = resultProfiles.find((profile) => {
    if (profile.rule.primary !== primary) {
      return false;
    }

    if (!profile.rule.secondary) {
      return true;
    }

    return profile.rule.secondary === secondary;
  });

  if (exactMatch) {
    return exactMatch;
  }

  return resultProfiles.find((profile) => profile.typeKey === fallbackByPrimary[primary]) ?? resultProfiles[0];
}

export function getScorePercent(scoreBoard: DimensionScores, dimension: DimensionKey) {
  const total = Object.values(scoreBoard).reduce((sum, score) => sum + score, 0);

  if (total === 0) {
    return 0;
  }

  return Math.round((scoreBoard[dimension] / total) * 100);
}
