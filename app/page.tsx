import Image from "next/image";
import { FaGithub } from "react-icons/fa";

import decoration1 from "@/app/assets/decoration1.svg";

export default function Home() {
  return (
    <main className="text-center md:pt-40 pt-12 px-4 max-w-5xl font-light relative min-h-screen container mx-auto">
      <Image
        src={decoration1}
        alt="Decoração de fundo"
        width={360}
        className="absolute -left-20 -z-10 bottom-0 md:visible invisible"
      />
      <header>
        <h1 className="text-7-xl sm:text-6xl text-4xl bg-neutral-50">
          Desbloqueie o poder da <br />
          <span className="font-medium">Análise do GitHub</span>
        </h1>
        <p className="font-extralight text-neutral-600 md:text-xl mt-6 md:mt-10">
          Eleve o desenvolvimento de software com análises automáticas do
          GitHub, revelando métricas e KPIs inestimáveis para aprimorar a
          entrega e a qualidade do software.
        </p>
      </header>

      <button className="mt-16 bg-black text-white px-6 py-3 flex items-center gap-3 rounded-lg mx-auto">
        <FaGithub /> Login com GitHub
      </button>
    </main>
  );
}
