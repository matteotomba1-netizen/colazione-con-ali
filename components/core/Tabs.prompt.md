Segmented pill tab switcher — selected tab is a black pill, others muted; optional mono count per tab. Used for the Colazioni / Corse section toggle.

```jsx
const [tab, setTab] = React.useState('colazioni');
<Tabs
  value={tab}
  onChange={setTab}
  items={[
    { id: 'colazioni', label: 'Le Colazioni', count: '11' },
    { id: 'corse', label: 'Le Corse', count: '04' },
  ]}
/>
```
