import JSConfetti from "js-confetti";
import { faker } from "@faker-js/faker";

const jsConfetti = new JSConfetti();

const boton = document.querySelector("#confetti");

boton.addEventListener("click", () => {
  jsConfetti.addConfetti({
    emojis: ['🔥','🚀','🍕'],
    emojiSize: 20
  });
});

const createRandomUser = () => {
  return {
    userId: faker.string.uuid(),
    product: faker.commerce.product(),
    product2: faker.commerce.price(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
    otraCosa: faker.internet.color()
  };
}

// console.log(createRandomUser())

const users = faker.helpers.multiple(createRandomUser, {
  count: 100
})

console.log(users)