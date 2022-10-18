const samohlasky = "aeiou";
const spoluhlasky = "qwrtpsdfghjklmnbvxz";
const toTitleCase = (s) =>
  s.substr(0, 1).toUpperCase() + s.substr(1).toLowerCase();

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

function getPartofName(nameLength, isStartWithSpoluhlaska) {
  let name = "";
  for (let a = 0; a < nameLength; a++) {
    if (isStartWithSpoluhlaska) {
      name += spoluhlasky[getRandomInt(0, spoluhlasky.length)];
    } else {
      name += samohlasky[getRandomInt(0, samohlasky.length)];
    }
    isStartWithSpoluhlaska = !isStartWithSpoluhlaska;
  }
  return name;
}

const getName = () => {
  const firstNameLength = getRandomInt(3, 7);
  const lastNameLength = getRandomInt(3, 7);

  let isStartWithSpoluhlaska = getRandomInt(0, 2) > 0;

  let firstName = getPartofName(firstNameLength, isStartWithSpoluhlaska);

  isStartWithSpoluhlaska = getRandomInt(1, 10) > 5;
  let lastName = getPartofName(lastNameLength, isStartWithSpoluhlaska);

  firstName = toTitleCase(firstName);
  lastName = toTitleCase(lastName);
  return `${firstName} ${lastName}`;
};

module.exports = { getName };
