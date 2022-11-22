export default function StyledHeader({ text, gradient = true }: { text: string, gradient?: boolean }) {
  return (
    <div className={(gradient ? "core-color-gradient " : "") + " text-2xl md:text-5xl"}>
      {text}
    </div>
  );
}
