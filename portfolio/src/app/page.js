import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
    <div className="">
      <Navbar />
      <div className="pt-16 grid grid-cols-2 gap-4 p-4">
        <div className="max-w-4xl mx-auto p-6  rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-white mb-4">Olá, eu sou <span className="text-mainBlue">Pedro Grigolli</span></h1>
          <p className="text-lg text-white mb-4">
            Estudante de Ciência da Computação na UTFPR e aspirante a desenvolvedor
          </p>
          </div>
        <div>mundo</div>




      </div>
    </div>
    </>
  );
}
