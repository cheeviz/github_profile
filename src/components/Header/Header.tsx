interface Props {
  text: String;
}

export function Header({ text }: Props) {
  return (
    <header className="w-full bg-light-black p-3">
      <h1 className="text-white text-center text-4xl font-bold uppercase">{text}</h1>
    </header>
  );
}