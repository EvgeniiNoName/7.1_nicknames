import Validator from '../app'

const validator = new Validator();

test.each([
  [1.1, "use09r"],
  [1.2, "num-ber"],
  [1.3, "da_sh"],
])("Тест №%s: Корректный никнейм %s",
(number, nickName) => {  
  expect(validator.validateUsername(nickName)).toBe(true);
});

test.each([
  [2.1, "Фаина"],
  [2.2, "@number"],
  [2.3, "da@sh"],
  [2.4, "!fds!"],
])("Тест №%s: Никнейм %s содержит недопустипые символы", (number, nickName) => {  
  expect(() => validator.validateUsername(nickName)).toThrow('Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)');
});

test.each([
  [3.1, "use0903r"],
  [3.2, "num4556ber"],
])("Тест №%s: Никнейм %s содержит более 3 цифр подряд", (number, nickName) => {  
  expect(() => validator.validateUsername(nickName)).toThrow('Имя не должно содержать подряд более трёх цифр');
});

test.each([
  [4.1, "_use09r"],
  [4.2, "9num-ber"],
  [4.3, "-da_sh"],
  [4.4, "use09r_"],
  [4.5, "num-ber9"],
  [4.6, "da_sh-"],
])("Тест №%s: Никнейм %s начинается и заканчивается цифрами, символами подчёркивания или тире", (number, nickName) => {  
  expect(() => validator.validateUsername(nickName)).toThrow('Имя не должно начинаться и заканчиваться цифрами, символами подчёркивания или тире');
});

