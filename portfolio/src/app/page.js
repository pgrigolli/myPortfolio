"use client"

import Image from "next/image";
import Navbar from "../components/Navbar";
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { useState } from "react";

export default function Home() {
  const [copied, setCopied] = useState(false)

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("pedrogrigolli30@gmail.com")
    .then(() => {
      setCopied(true);
      alert("Email copiado para a área de transferência.")
      setTimeout(() => setCopied(false), 2000)
    })
    .catch(err => {
      console.error('Failed to copy: ', err)
    })
  }




  return (
    <>
      <div className="">
        <Navbar />
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
            >


            </Image>
          </div>
        </div>
        <div id="new-section" className="pt-16 p-4 min-h-screen bg-gray-800 text-white">
          <h2 className="text-2xl font-bold mb-4">Nova Seção</h2>
          <p>Conteúdo da nova seção...</p>
        </div>
      </div>
    </>
  );
}
