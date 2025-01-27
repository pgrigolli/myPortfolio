"use client";

import Image from "next/image";
import { FaInstagram, FaLinkedin, FaEnvelope, FaReact, FaNodeJs, FaGithub, FaJava, FaGit } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Home() {

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);
  const [copied, setCopied] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("pedrogrigolli30@gmail.com")
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        alert("Email copied to clipboard.")
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <>
      <div> 
        <Navbar>
        </Navbar>
        <div className="pt-16 grid grid-cols-2 gap-4 p-4 min-h-screen items-center">
          <div className="max-w-4xl mx-auto p-6 rounded-lg shadow-md flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold text-white mb-4 text-center">
              Hello, I am <span className="text-mainBlue">Pedro Grigolli</span>
            </h1>
            <p className="text-lg text-white mb-4 text-center">
              Computer Science student at UTFPR and aspiring programmer
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

          <div className="flex flex-col md:flex-row gap-4 p-4 h-full">
            <div className="flex flex-col justify-center items-center md:items-start md:w-1/2">
              <div>
                <h2 className="text-4xl pb-5">About me</h2>
                <p className="text-lg">
                    Graduated from Colégio Marista de Maringá, I began my studies in Computer Science at UTFPR-Campo Mourão.
                  Currently in the fourth semester of my studies, I focus on studying backend development, while not limiting myself to specific technologies 
                </p>
                <p className="pt-10 text-lg">
                  Currently, I am a Developer and Project Manager at Haken Junior Enterprise.
                </p> 
                <div className="flex justify-center items-center pt-40">
                  <a href="https://www.instagram.com/hakenej/" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/LogotipoBranco.png"
                    alt="Logo da HakenEJ"
                    width={350}
                    height={350}
                    className="hidden md:block"
                  >

                  </Image>
                  </a>
                </div>
              </div>

            </div>
            <div className="flex flex-col items-center md:w-1/2 md:pt-80">
              <h2 className="text-4xl font-bold mb-4 pb-5">Skills:</h2>
              <div className="grid grid-cols-3 gap-6">
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
          <h1 className="text-2xl font-bold mb-4">My projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
            <a href="https://github.com/CountBoxess" target="_blank" rel="noopener noreferrer" className="block">
              <div className="bg-mainBlue border border-blue-600 rounded-lg h-80 shadow-lg flex flex-col justify-start p-6">
                <h3 className="text-xl font-semibold">CountBoxes</h3>
                <p className="mt-2">An application to count and manage boxes during the loading and unloading of products.</p>
                <Image
                src={"/CountBoxesLogoRetangular.jpeg"}
                alt="CountBoxes logo"
                width={400}
                height={150}
                className="mx-auto border-4 border-black border-w rounded-lg mt-4"
                ></Image>
              </div>
            </a>
            <div className="bg-gray-700 border border-gray-600 rounded-lg h-80 p-6 shadow-lg flex flex-col justify-start">
              <h3 className="text-xl font-semibold">Working on other projects</h3>
              <p className="mt-2">Developing other projects</p>
            </div>
          </div>
        </div>


      </div>
    </>
  );
}
