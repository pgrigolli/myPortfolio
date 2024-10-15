"use client";

import Image from "next/image";
import { FaInstagram, FaLinkedin, FaEnvelope, FaReact, FaNodeJs, FaGithub, FaJava, FaGit } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [copied, setCopied] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("pedrogrigolli30@gmail.com")
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        alert("Email copiado para a área de transferência.")
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <>
      <div> 
        <nav className="flex justify-start bg-mainBlue p-4 fixed top-0 w-full pl-10">
          <ul className="flex space-x-10">
            <li><Link href="/" className="text-white">Home</Link></li>
            <li><Link href="#about-me" className="text-white">Sobre mim</Link></li> {/* Navegação suave para a seção */}
            <li><Link href="#my-projects" className="text-white">Meus projetos</Link></li>
          </ul>
        </nav>
        <div className="pt-16 grid grid-cols-2 gap-4 p-4 min-h-screen items-center">
          <div className="max-w-4xl mx-auto p-6 rounded-lg shadow-md flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold text-white mb-4 text-center">
              Olá, eu sou <span className="text-mainBlue">Pedro Grigolli</span>
            </h1>
            <p className="text-lg text-white mb-4 text-center">
              Estudante de Ciência da Computação na UTFPR e aspirante a desenvolvedor
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.instagram.com/otaldogrigo/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-white text-2xl" />
              </a>
              <button onClick={copyEmailToClipboard} className="focus:outline-none">
                <FaEnvelope className="text-white text-2xl" />
              </button>
              <a href="https://www.linkedin.com/in/pedro-grigolli-88a0692b2/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-white text-2xl" />
              </a>
              <a href="https://github.com/pgrigolli" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-white text-2xl" />
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="https://github.com/pgrigolli.png"
              alt="Foto de Pedro Grigolli"
              width={400}
              height={500}
              className="rounded-full"
            />
          </div>
        </div>
        <div id="about-me" className="pt-16 p-4 min-h-screen text-white">

          <div className="grid grid-cols-2 gap-4 p-4 h-full">
            <div className="flex justify-items items-center">
              <div className="pt-15 ">
                <h2 className="text-4xl pb-5">Sobre mim</h2>
                <p className="text-lg">
                  Graduado no Colégio Marista de Maringá, comecei meus estudos em Ciência da Computação na UTFPR-Campo Mourão. 
                  Hoje no quarto período, me concentro no estudo de backend, não me limitando à tecnologias. 
                </p>
                <p className="pt-10 text-lg">
                  Atualmente, estou na posição de Trainee na Haken Empresa Junior de Computação, na área de Projetos.
                </p>
                <div className="flex justify-center items-center pt-20">
                  <a href="https://www.instagram.com/hakenej/" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/LogotipoBranco.png"
                    alt="Logo da HakenEJ"
                    width={200}
                    height={200}
                  >

                  </Image>
                  </a>
                </div>
              </div>

            </div>
            <div className="flex flex-col items-center pt-20">
              <h2 className="text-4xl font-bold mb-4 pb-5">Tecnologias:</h2>
              <div className="grid grid-cols-3 gap-8">
                <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer" title="Node.Js">
                  <FaNodeJs className="text-6xl" />
                </a>
                <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer" title="ReactJS">
                  <FaReact className="text-6xl" />
                </a>
                <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" title="TailwindCSS">
                  <SiTailwindcss className="text-6xl" />
                </a>
                <a href="https://www.java.com" target="_blank" rel="noopener noreferrer" title="Java">
                  <FaJava className="text-6xl" />
                </a>
                <a href="https://git-scm.com" target="_blank" rel="noopener noreferrer" title="Git">
                  <FaGit className="text-6xl" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" title="Github">
                  <FaGithub className="text-6xl" />
                </a>
              </div>
            </div>
          </div>

        </div>
        <div id="my-projects" className="pt-16 p-4 min-h-screen text-white pl-10 pr-10">
          <h1 className="text-2xl font-bold mb-4">Meus Projetos</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
            <a href="https://github.com/CountBoxess" target="_blank" rel="noopener noreferrer" className="block">
              <div className="bg-mainBlue border border-blue-600 rounded-lg h-80 shadow-lg flex flex-col justify-start p-6">
                <h3 className="text-xl font-semibold">CountBoxes</h3>
                <p className="mt-2">Uma aplicação para contar e gerenciar caixas durante o carregamento e descarregamento de produtos.</p>
                <Image
                src={"/CountBoxesLogoRetangular.jpeg"}
                alt="Logo do Countboxes"
                width={400}
                height={150}
                className="mx-auto border-4 border-black border-w rounded-lg mt-4"
                ></Image>
              </div>
            </a>
            <div className="bg-gray-700 border border-gray-600 rounded-lg h-80 p-6 shadow-lg flex flex-col justify-start">
              <h3 className="text-xl font-semibold">Projetos em Desenvolvimento</h3>
              <p className="mt-2">Outros projetos em desevolvimento.</p>
            </div>
          </div>
        </div>


      </div>
    </>
  );
}
