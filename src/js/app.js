export default class Validator {

  validateUsername (userName) {

    // Проверка на допустимые символы (латинские буквы, тире, подчёркивания и цифры)
    if (!/^[a-zA-Z0-9_-]+$/.test(userName)) {      
      throw Error("Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)")
    }
    // Проверка на подряд более трёх цифр
    if (/\d{4,}/.test(userName)) {
      throw new Error("Имя не должно содержать подряд более трёх цифр");
    }
    // Проверка на начало и конец цифрами, символами подчёркивания или тире
    if (/^[\d_-]|[\d_-]$/.test(userName)) {
      throw new Error("Имя не должно начинаться и заканчиваться цифрами, символами подчёркивания или тире");
    }

    return true
  }
}
