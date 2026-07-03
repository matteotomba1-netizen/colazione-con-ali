import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default "pill" */
  variant?: 'pill' | 'ghost' | 'warm';
  /** @default "md" */
  size?: 'sm' | 'md';
  /** Show the trailing up-right arrow glyph. @default false */
  arrow?: boolean;
  /** Use light treatment for placement on dark backgrounds (ghost only). @default false */
  onDark?: boolean;
  children?: React.ReactNode;
}

/**
 * Pill button — the core CTA of Colazione con Ali.
 * @startingPoint section="Core" subtitle="Pill, ghost & sunrise-gradient buttons" viewport="700x150"
 */
export function Button(props: ButtonProps): JSX.Element;
