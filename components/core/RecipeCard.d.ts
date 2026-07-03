import React from 'react';

export interface RecipeCardProps {
  /** Mono UPPERCASE eyebrow label, e.g. "Overnight · Proteica". */
  label?: string;
  /** Recipe title. */
  title: string;
  /** Meta line under the title, e.g. "12 min · ~420 kcal". */
  meta?: string;
  /** Top-left category badge. @default "Ricetta" */
  badge?: string;
  /** Image URL. If omitted, a gradient fill is shown. */
  image?: string;
  /** Gradient fill key when no image. @default "warm" */
  gradient?: 'warm' | 'peach' | 'cool' | 'sky' | 'berry' | 'cream';
  /** Text shown over the gradient fill (defaults to title). */
  fillText?: string;
  onClick?: () => void;
}

/**
 * Signature recipe card — image/gradient media, glass badge, heart like, hover lift + arrow rotate.
 * @startingPoint section="Core" subtitle="Recipe card with hover lift & arrow rotate" viewport="320x340"
 */
export function RecipeCard(props: RecipeCardProps): JSX.Element;
