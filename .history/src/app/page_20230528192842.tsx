import { User} from 'lucide-react'

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* Left*/}
      <div className=" border-white/10 bg-cover relative flex flex-col items-start justify-between overflow-hidden border-r bg-[url(../assets/bg-stars.svg)] px-28 py-16">
        {/* Blur*/}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />

        {/* Stripes*/}
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />

        <a href="" className="flex items-center gap-3 text-left">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
                <User className="h-5 w-5 text-g"/>
          </div>
        </a>
      </div>

      {/* Right*/}
      <div className="bg-cover bg-cover flex flex-col bg-[url(../assets/bg-stars.svg)] p-16">
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
