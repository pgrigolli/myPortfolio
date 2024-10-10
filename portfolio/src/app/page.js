"use client";

import Image from "next/image";
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [copied, setCopied] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("pedrogrigolli30@gmail.com")
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
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
              src="/ImagemPortfolio.jpg"
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
              <div>
                <h2 className="text-4xl pb-5">Sobre mim</h2>
                <p className="text-lg">
                  Graduado no Colégio Marista de Maringá, comecei meus estudos em Ciência da Computação na UTFPR-Campo Mourão. 
                  Hoje no quarto período, me concentro no estudo de backend, não me limitando à tecnologias. 
                </p>
                <p className="pt-10 text-lg">
                  Atualmente, estou na posição de Trainee na Haken Empresa Junior de Computação, na área de Projetos.
                </p>
              </div>

            </div>
            <div className="flex justify-items items-center">
              <div>c</div>
              <div>d</div>
            </div>

          </div>

        </div>
        <div id="my-projects" className="pt-16 p-4 min-h-screen bg-gray-800 text-white">
          <h2 className="text-2xl font-bold mb-4">Meus Projetos</h2>
          <p>Meus Projetinhos</p>
        </div>
      </div>
    </>
  );
}
