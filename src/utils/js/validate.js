function isValidPassword(input) {
  const validRegex = /^[a-zA-Z0-9~@!$%^&*()[\]{}:;"',./?<>+\-=|_ ]{4,16}$/g;
  return validRegex.test(input);
}

function isValidEmail(input) {
  const validRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/g;
  return validRegex.test(input);
}

function isValidUserName(input) {
  const validRegex = /^[\w\d@._-]{4,64}$/g;
  return validRegex.test(input);
}

export default {
  isValidPassword,
  isValidEmail,
  isValidUserName,
};