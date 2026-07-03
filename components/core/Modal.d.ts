import React from 'react';

export interface ModalProps {
  open: boolean;
  onClose?: () => void;
  /** Max card width in px. @default 960 */
  maxWidth?: number;
  children?: React.ReactNode;
}

/** Glass-backdrop dialog with rounded white card and a close button that spins 90° on hover. */
export function Modal(props: ModalProps): JSX.Element | null;
