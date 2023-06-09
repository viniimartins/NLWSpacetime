export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      <div className="relative flex flex-col items-start justify-between px-28 py-16">
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translabg-purple-700 opacity-50"></div>
      </div>

      <div className="flex flex-col p-16">
        <div className="justift-center flex flex-1 items-center">
          <p className="w-[360px] text-center leading-relaxed">
            Voce ainda nao registrou nenhuma lembranca, comece a{" "}
            <a href="" className="underline hover:text-gray-50">
              criar agora
            </a>
            !
          </p>
        </div>
      </div>
    </main>
  );
}
