export interface TabItem {
  id: string;
  label: string;
  /** Optional mono count badge, e.g. "11" or "04". */
  count?: string | number;
}

export interface TabsProps {
  items: TabItem[];
  /** Selected tab id. */
  value: string;
  onChange?: (id: string) => void;
}

/**
 * Segmented pill tab switcher with mono counts (Le Colazioni / Le Corse).
 * @startingPoint section="Core" subtitle="Segmented pill tabs with counts" viewport="700x90"
 */
export function Tabs(props: TabsProps): JSX.Element;
