const { config } = require("dotenv");

const { NODE_ENV } = process.env;

if (NODE_ENV === "production") {
  config();
}

const { SECRET_SIGNING_KEY = "dev-secret" } = process.env;

const URL_REGEX = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;

const INVALID_AUTH_CREDENTIALS = "Неправильные почта или пароль";
const INVALID_EMAIL_FORMAT = "Некорректный email";
const USER_NOT_FOUND = "Пользователь с указанным идентификатором не найден";
const INCORRECT_USER_DATA = "Переданы некорректные данные пользователя";
const INCORRECT_UPDATE_USER_DATA = "Переданы некорректные данные при обновлении профиля";
const INCORRECT_MOVIE_DATA = "Переданы некорректные данные при добавлении фильма";
const MOVIE_NOT_FOUND = "Фильм с указанным идентификатором не найден";
const NO_RIGHTS_TO_DELETE_MOVIE = "У вас недостаточно прав на удаление данного фильма";
const EMAIL_ALREADY_REGISTERED = "Пользователь с таким email уже зарегистрирован";
const INCORRECT_ADD_USER_DATA = "Переданы некорректные данные при создании пользователя";
const UNAUTHORIZED_ACCESS = "Необходима авторизация";
const INCORRECT_URL_FORMAT = "Некорректный формат ссылки";
const INTERNAL_SERVER_ERROR = "Ошибка сервера";

module.exports = {
  SECRET_SIGNING_KEY,
  URL_REGEX,
  INCORRECT_URL_FORMAT,
  INVALID_AUTH_CREDENTIALS,
  USER_NOT_FOUND,
  INCORRECT_USER_DATA,
  INCORRECT_UPDATE_USER_DATA,
  INCORRECT_MOVIE_DATA,
  MOVIE_NOT_FOUND,
  NO_RIGHTS_TO_DELETE_MOVIE,
  EMAIL_ALREADY_REGISTERED,
  INCORRECT_ADD_USER_DATA,
  UNAUTHORIZED_ACCESS,
  INTERNAL_SERVER_ERROR,
  INVALID_EMAIL_FORMAT,
};
