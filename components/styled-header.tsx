export default function StyledHeader({ text, gradient = true }: { text: string, gradient?: boolean }) {
  return (
    <div className={(gradient ? "core-color-gradient " : "") + " text-5xl"}>
      {text}
    </div>
  );
}
