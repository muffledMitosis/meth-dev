export default function StyledHeader({ text }: { text: string }) {
  return (
    <div className="styled_header text-5xl">
      {text}
    </div>
  );
}
