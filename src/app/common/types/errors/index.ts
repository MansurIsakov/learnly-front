export enum RegistrationErrorCode {
  PHONE_NUMBER_ALREADY_EXISTS = 'PHONE_NUMBER_ALREADY_EXISTS',
  EMAIL_ALREADY_EXISTS = 'EMAIL_ALREADY_EXISTS',
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
  INVALID_LEVEL = 'INVALID_LEVEL',
}

export enum ModuleErrorCode {
  MODULE_NOT_FOUND = 'MODULE_NOT_FOUND',
  USER_ALREADY_HAS_MODULE = 'USER_ALREADY_HAS_MODULE',
  USER_MAX_CREDITS = 'USER_MAX_CREDITS',
  USER_DOES_NOT_HAVE_MODULE = 'USER_DOES_NOT_HAVE_MODULE',

  USER_NO_CREDITS = 'USER_NO_CREDITS',
  USER_ADD_CORE_MODULE = 'USER_ADD_CORE_MODULE',
  USER_ADD_DIFFERENT_LEVEL_MODULE = 'USER_ADD_DIFFERENT_LEVEL_MODULE',
  USER_ADD_DIFFERENT_COURSE_MODULE = 'USER_ADD_DIFFERENT_COURSE_MODULE',
  USER_NO_MODULES = 'USER_NO_MODULES',
  USER_REMOVE_CORE_MODULE = 'USER_REMOVE_CORE_MODULE',
  USER_ALREADY_HAS_MODULES = 'USER_ALREADY_HAS_MODULES',
}

export enum ScheduleErrorCode {
  SCHEDULE_NOT_FOUND = 'SCHEDULE_NOT_FOUND',
  NO_CLASSES_FOUND = 'NO_CLASSES_FOUND',
  CLASS_COLLISION = 'CLASS_COLLISION',
  SCHEDULE_ALREADY_EXISTS = 'SCHEDULE_ALREADY_EXISTS',
  USER_DOES_NOT_HAVE_CLASS = 'USER_DOES_NOT_HAVE_CLASS',
}

export enum ExamErrorCode {
  EXAM_NOT_FOUND = 'EXAM_NOT_FOUND',
  EXAM_ALREADY_EXISTS = 'EXAM_ALREADY_EXISTS',
}

export enum TaskErrorCode {
  TASK_NOT_FOUND = 'TASK_NOT_FOUND',
  TASK_ALREADY_EXISTS = 'TASK_ALREADY_EXISTS',
}
