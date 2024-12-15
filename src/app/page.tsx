import ClientInfo from "../_components/client-info";
import ServerInfo from "../_components/server-info";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="text-center">
        <h1 className="text-7xl font-bold">Test Production Build </h1>
        <h2 className="text-2xl">Nextjs Server</h2>
      </div>
      <a href="https://codefluss.com" target="_blank" className="underline text-2xl">Powered by Codefluss</a>
    <div className="flex mx-auto gap-10">
      <ServerInfo />
      <ClientInfo />
    </div>
    </div>
  );
}
