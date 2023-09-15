export function containsNumerals(password: string) {
  return /[0-9]/.test(password);
}

export function containsSpecialCharacters(password: string) {
  return /[!@#$%^&*]/.test(password);
}

export function containsUppercaseLetter(password: string) {
  return /[A-Z]/.test(password);
}

/**
 * Returns true if the password has no consecutive characters
 * for example: lorem123 fails because '123' are consecutive
 * another example: abcde fails because every character is in
 * consecutive order.
 */
export function containsConsecutiveCharacters(password: string): boolean {
  for (let i = 0; i < password.length - 1; i++) {
    const currentChar = password[i];
    const nextChar = password[i + 1];

    if (nextChar.charCodeAt(0) - currentChar.charCodeAt(0) === 1) {
      return false;
    }
  }

  return password.length > 0;
}
