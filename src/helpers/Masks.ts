import {isEmpty} from 'lodash';
import moment from 'moment';

const formatStringByPattern = require('format-string-by-pattern');

const turkishCharacter = [
  'ç',
  'ğ',
  'ı',
  'ş',
  'ö',
  'ü',
  'Ö',
  'Ü',
  'Ç',
  'Ğ',
  'Ş',
  'Ğ',
  'İ',
];

const parse = {
  iban: {
    name: 'iban',
    mask: '99 9999 9999 9999 9999 9999 99',
    inputShowMask: 'TR99 9999 9999 9999 9999 9999 99',
    unMask: 'TR999999999999999999999999',
  },
  phone: {
    name: 'phone',
    mask: '(999) 999 9999',
    unMask: '9999999999',
  },
  creditCardNo: {
    name: 'creditCardNo',
    mask: '9999 9999 9999 9999',
    unMask: '9999999999999999',
  },
  creditCardExpirationDate: {
    name: 'creditCardExpirationDate',
    mask: '99 / 99',
    unMask: '99-99',
  },
};

export const parseAuthPhoneNumber = (str: string): string => {
  if (!str) {
    return '';
  }
  const mobilePhone = str.slice(3, str.length);
  return formatStringByPattern(parse.phone.mask, mobilePhone);
};

export const parsePhoneNumber = (str: string): string => {
  if (!str) {
    return '';
  }
  return formatStringByPattern(parse.phone.mask, str);
};

export const formatIbanNo = (str: string): string => {
  if (!str) {
    return '';
  }

  if (str.includes('TR')) {
    return formatStringByPattern(parse.iban.mask, str.split('TR')[1]);
  }
  if (str.length === 30) {
    return formatStringByPattern(parse.iban.mask, str);
  }

  return formatStringByPattern(parse.iban.mask, str);
};

export const checkIbanLength = (str: string) => {
  if (!str) {
    return true;
  }
  const iban = str.replace(/["TR"]/g, '').replace(/[" "]/g, '');

  return iban.length === 24;
};

export const checkCreditCardExpirationDate = (str: string) => {
  if (str.length < 7) {
    return false;
  }

  const unParseStr = str.slice(0, 2) + str.slice(5, 7);
  const nowYear = moment().get('year').toString();
  const nowMonth = moment().get('months').toString();

  if (Number(unParseStr?.slice(0, 2)) > 12) {
    return false;
  }
  if (Number(unParseStr?.slice(2, 4)) < Number(nowYear.slice(2, 4))) {
    return false;
  }
  if (
    Number(unParseStr?.slice(0, 2)) < Number(nowMonth) + 1 &&
    Number(unParseStr?.slice(2, 4)) <= Number(nowYear.slice(2, 4))
  ) {
    return false;
  }

  return /^\d+$/.test(unParseStr);
};

export const checkEMailFormatter = (str: string) => {
  if (!str) {
    return true;
  }

  const isTurkishCharacter = turkishCharacter?.filter(x => str.includes(x));
  if (!isEmpty(isTurkishCharacter)) {
    return false;
  }
  return true;
};

export const formatPriceNumber = (price: string | number) => {
  if (!price) {
    return '';
  }
  const convertedNumber = parseFloat(price.toString());
  return convertedNumber.toLocaleString('tr-TR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export const formatPlateNumber = (str: string): string => {
  if (!str) {
    return '';
  }
  const value = str.replace(/[" "]/g, '');
  return value.toUpperCase();
};

export const checkCreditCardNumber = (str: string) => {
  if (!str) {
    return true;
  }
  if (str.includes(' ')) {
    return !(str.length < 19);
  }
  return !(str.length < 16);
};

export default {parse};
