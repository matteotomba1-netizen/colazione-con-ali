Centered dialog over a blurred dark backdrop; rounded (20px) white card that rises in with spring easing. Close button (top-right circle) inverts to black and rotates 90° on hover. Closes on backdrop click or Escape. Used for full recipe detail views and the "Vedi su Instagram" prompt.

```jsx
const [open, setOpen] = React.useState(false);
<Modal open={open} onClose={() => setOpen(false)}>
  <div style={{ padding: '40px 48px 48px' }}>…recipe detail…</div>
</Modal>
```
