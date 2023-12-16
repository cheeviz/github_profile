import { IoLogoGithub } from "react-icons/io";
interface Props {
  text: String;
}

export function Header({ text }: Props) {
  return (
    <header className="w-full h-32 bg-blue-800 p-3">
      <div className="flex h-full items-center justify-center">
        <IoLogoGithub className="text-gray-200" size={115} />
      </div>
    </header>
  );
}
