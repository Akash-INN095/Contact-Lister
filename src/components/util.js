export function validatePhoneNumber(number) {
    const phoneNumberPattern = /^\d{0,10}$/;
    return phoneNumberPattern.test(number);
  }
  