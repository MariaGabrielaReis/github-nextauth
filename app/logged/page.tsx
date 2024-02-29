import Image from "next/image";

import decoration2 from "@/app/assets/decoration2.png";
import { FaArrowCircleRight } from "react-icons/fa";

export default function LoggedPage() {
  return (
    <main className="md:px-28 px-8 relative min-h-screen container mx-auto">
      <Image
        src={decoration2}
        alt="Decoração do fundo"
        width={380}
        className="absolute invisible xl:visible right-20 bottom-14"
      />

      <header className="text-center py-6 md:py-12">
        <Image
          src="https://i.pravatar.cc/100?img=20"
          alt="Avatar"
          width={100}
          height={100}
          className="rounded-full mx-auto"
        />
        <h1 className="md:text-5xl text-3xl mt-4">
          Boas vindas, <span className="font-medium">Fulano de Tal</span>
        </h1>
        <h3 className="md:text-2xl text-lg font-extralight mt-4 text-neutral-600">
          Que tal analisarmos seu GitHub?
        </h3>
      </header>

      <section className="max-w-xl mb-8">
        <hr />

        <ItemButton label="Meus Repositórios (X)" />
        <ItemButton label="Meus Gists (X)" />
        <ItemButton label=" Meus Seguidores (X)" />
      </section>

      <button className="bg-black text-white px-10 py-2 font-light text-lg rounded-md">
        Logout
      </button>
    </main>
  );
}

function ItemButton({ label }: { label: string }) {
  return (
    <>
      <button className="flex items-center justify-between text-lg md:text-xl py-5 w-full hover:font-medium group">
        {label} <FaArrowCircleRight className="-rotate-45 text-blue-400" />
      </button>
      <hr />
    </>
  );
}
