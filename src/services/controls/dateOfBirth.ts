import {
  format,
  isValid,
  getDate,
  getYear,
  getMonth,
  isFuture,
  getDaysInMonth,
  intervalToDuration,
} from 'date-fns';
import { isEmpty, isNumeric } from 'validator';

// Types
import {
  DefaultConfig,
  FormatDateRequest,
  FormatDateResponse,
  ValidateDayRequest,
  BindInitialStateRequest,
  ValidateFullDateRequest,
  ValidateFullDateResponse,
  BindInitialStateResponse,
} from '../../types/validation/dateOfBirth';
import { SimpleDateFormats } from '../../types/utils/date';

// Services
import { manipulateContent } from '../utils/resource';

// Static Content
import validationContent from '../../content/validation.json';

export const DateFormat: SimpleDateFormats = 'yyyy-MM-dd';

export const formatDate = ({
  day,
  year,
  month,
  ruleSet,
  validationMessages,
}: FormatDateRequest): FormatDateResponse => {
  const dayMessage = validateDay({
    value: day,
    year: year,
    month: month,
    ruleSet: ruleSet,
    validationMessages: validationMessages,
  });

  const monthMessage = validateMonth({
    value: month,
    ruleSet: ruleSet,
    validationMessages: validationMessages,
  });

  const yearMessage = validateYear({
    value: year,
    ruleSet: ruleSet,
    validationMessages: validationMessages,
  });

  if (dayMessage || monthMessage || yearMessage) {
    return {
      date: '',
      age: undefined,
      errorMessages: {
        day: dayMessage,
        year: yearMessage,
        month: monthMessage,
        miscellaneous: undefined,
      },
    };
  }

  const { age, date, message } = validateDate({
    day: day,
    year: year,
    month: month,
    ruleSet: ruleSet,
    validationMessages: validationMessages,
  });

  if (message) {
    return {
      date: '',
      age: undefined,
      errorMessages: {
        day: undefined,
        year: undefined,
        month: undefined,
        miscellaneous: message,
      },
    };
  }

  return {
    age: age,
    date: date ?? '',
  };
};

export const isValidValue = (value: string) =>
  isNumeric(value) && value !== '0' && value !== '00';

export const validateDay = ({
  year,
  value,
  month,
  ruleSet,
  validationMessages,
}: ValidateDayRequest): string | undefined => {
  if (!ruleSet?.required && isEmpty(value)) {
    return undefined;
  }

  if (ruleSet?.required && isEmpty(value)) {
    return (
      validationMessages.dayRequired ??
      validationContent['validation-day-required']
    );
  }

  if (!isValidValue(value)) {
    return (
      validationMessages.dayNotNumeric ??
      validationContent['validation-day-not-numeric']
    );
  }

  const day = Number(value);

  if (isEmpty(month) && (day < 1 || day > 31)) {
    return manipulateContent({
      replacements: { '{{EndDay}}': '31' },
      content:
        validationMessages.dayBetween ??
        validationContent['validation-day-between'],
    });
  }

  if (!isEmpty(month) && !isEmpty(year)) {
    const availableDays = getDaysInMonth(
      new Date(Number(year), Number(month) - 1),
    );

    if (day > availableDays) {
      return manipulateContent({
        replacements: { '{{EndDay}}': availableDays.toString() },
        content:
          validationMessages.dayBetween ??
          validationContent['validation-day-between'],
      });
    }
  }

  return undefined;
};

export const validateMonth = ({
  value,
  ruleSet,
  validationMessages,
}: DefaultConfig): string | undefined => {
  if (!ruleSet?.required && isEmpty(value)) {
    return undefined;
  }

  if (ruleSet?.required && isEmpty(value)) {
    return (
      validationMessages.monthRequired ??
      validationContent['validation-month-required']
    );
  }

  if (!isValidValue(value)) {
    return (
      validationMessages.monthNotNumeric ??
      validationContent['validation-month-not-numeric']
    );
  }

  const month = Number(value);

  if (month < 1 || month > 12) {
    return (
      validationMessages.monthBetween ??
      validationContent['validation-month-between']
    );
  }

  return undefined;
};

export const validateYear = ({
  value,
  ruleSet,
  validationMessages,
}: DefaultConfig): string | undefined => {
  if (!ruleSet?.required && isEmpty(value)) {
    return undefined;
  }

  if (ruleSet?.required && isEmpty(value)) {
    return (
      validationMessages.yearRequired ??
      validationContent['validation-year-required']
    );
  }

  if (!isNumeric(value)) {
    return (
      validationMessages.yearNotNumeric ??
      validationContent['validation-year-not-numeric']
    );
  }

  const year = Number(value);
  const earliestPossibleYear = 1900;

  if (year < earliestPossibleYear) {
    return manipulateContent({
      replacements: { '{{Year}}': earliestPossibleYear.toString() },
      content:
        validationMessages.yearToEarly ??
        validationContent['validation-year-to-early'],
    });
  }

  return undefined;
};

export const validateDate = ({
  day,
  year,
  month,
  ruleSet,
  validationMessages,
}: ValidateFullDateRequest): ValidateFullDateResponse => {
  // Purpose  : If the content is marked as not required but some of the fields have been
  //            completed then we need to render a message asking the user to complete the
  //            form element.
  if (!ruleSet?.required && (isEmpty(day) || isEmpty(year) || isEmpty(month))) {
    if (isEmpty(day) && (!isEmpty(year) || !isEmpty(month))) {
      // TODO : Ensure these pull from the overrides
      return {
        message:
          validationMessages.missingFields ??
          validationContent['validation-missing-fields'],
      };
    }

    if (isEmpty(month) && (!isEmpty(day) || !isEmpty(year))) {
      return {
        message:
          validationMessages.missingFields ??
          validationContent['validation-missing-fields'],
      };
    }

    if (isEmpty(year) && (!isEmpty(day) || !isEmpty(month))) {
      return {
        message:
          validationMessages.missingFields ??
          validationContent['validation-missing-fields'],
      };
    }

    return { message: undefined };
  }

  const date = new Date(Number(year), Number(month) - 1, Number(day));

  if (!isValid(date)) {
    return {
      message:
        validationMessages.invalidDate ??
        validationContent['validation-invalid-date'],
    };
  }

  if (isFuture(date)) {
    return {
      message:
        validationMessages.dateInFuture ??
        validationContent['validation-date-in-future'],
    };
  }

  const duration = intervalToDuration({
    start: date,
    end: new Date(),
  });

  const years = duration?.years ?? 0;

  if (ruleSet?.minAge && ruleSet?.minAge > years) {
    return {
      message: manipulateContent({
        replacements: { '{{Age}}': ruleSet.minAge.toString() },
        content:
          validationMessages.minimumAge ??
          validationContent['validation-minimum-age'],
      }),
    };
  }

  return {
    age: years,
    date: format(date, DateFormat),
  };
};

export const bindInitialState = ({
  value,
  ruleSet,
  validationMessages,
}: BindInitialStateRequest): BindInitialStateResponse => {
  const asDate = new Date(value);
  const isDateValid = isValid(asDate);

  if (!isDateValid) {
    return {
      day: '',
      date: '',
      year: '',
      month: '',
      age: undefined,
      isValid: ruleSet?.required ? false : true,
    };
  }

  const year = `${getYear(asDate)}`;
  const day = `${getDate(asDate)}`.padStart(2, '0');
  const month = `${getMonth(asDate) + 1}`.padStart(2, '0');

  const { age, date, errorMessages } = formatDate({
    day: day,
    year: year,
    month: month,
    ruleSet: ruleSet,
    validationMessages: validationMessages,
  });

  return {
    age: age,
    date: date,
    isValid: !errorMessages,
    day: !errorMessages?.day ? day : '',
    year: !errorMessages?.year ? year : '',
    month: !errorMessages?.month ? month : '',
  };
};
