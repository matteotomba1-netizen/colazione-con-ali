import React from 'react';

export interface PillProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Color of the leading meta-dot (e.g. var(--coral)). Omit for no dot. */
  dotColor?: string;
  children?: React.ReactNode;
}

/** Meta chip with optional color dot — recipe time/portions/kcal. */
export function Pill(props: PillProps): JSX.Element;
