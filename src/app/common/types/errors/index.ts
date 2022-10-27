export enum RegistrationErrorCode {
  PHONE_NUMBER_ALREADY_EXISTS = 'PHONE_NUMBER_ALREADY_EXISTS',
  EMAIL_ALREADY_EXISTS = 'EMAIL_ALREADY_EXISTS',
  E11000_DUPLICATE_KEY = 'E11000_DUPLICATE_KEY',
}

export enum TokensErrorCode {
  INVALID_TOKEN = 'INVALID_TOKEN',
}

export enum UserErrorCode {
  USER_NOT_FOUND = 'USER_NOT_FOUND',

  IVALID_USER_ID = 'IVALID_USER_ID',
  INVALID_EMAIL_PASSWORD = 'INVALID_EMAIL_PASSWORD',
  INVALID_FIRST_NAME = 'INVALID_FIRST_NAME',
  INVALID_LAST_NAME = 'INVALID_LAST_NAME',
}