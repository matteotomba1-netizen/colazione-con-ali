import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** "dark" = glass overlay for imagery; "plain" = muted inline label. @default "dark" */
  tone?: 'dark' | 'plain';
  children?: React.ReactNode;
}

/** Mono UPPERCASE category label / section number. */
export function Badge(props: BadgeProps): JSX.Element;
