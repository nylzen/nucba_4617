import Typewriter from 'typewriter-effect/dist/core';

const typewriterSpan = document.querySelector('.typewriter')

const typewriter = new Typewriter(typewriterSpan, {
  // loop: true,
  delay: 75,
})

export const typewriterInit = () => {
  // console.log(typewriterSpan)
  // console.log(typewriter)
  typewriter
  .pauseFor(1000) // Pausar antes de iniciar el texto
  .typeString('Crypto') // Escribe el texto
  .pauseFor(1000) // Pausar antes de iniciar el texto
  .deleteChars(6)
  .typeString('Tecnología')
  .pauseFor(1000)
  .deleteChars(5)
  .typeString('Messi')
  .pauseFor(1000)
  .start()
}