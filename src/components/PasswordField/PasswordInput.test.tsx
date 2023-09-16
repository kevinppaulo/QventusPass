import { fireEvent, render, screen } from "@testing-library/react";
import Password from ".";
import {
    containsConsecutiveCharacters,
    containsNumerals,
    containsSpecialCharacters,
    containsUppercaseLetter,
} from "./validations/functions";


interface TestValidation {
    title: string;
    validation: (password: string) => boolean;
    dataTestId: string;
}

describe('Interacts with the password field and test its validations', function () {
    const validations: TestValidation[] = [
        { title: "Has a number 0-9", validation: containsNumerals, dataTestId: 'test-numerals' },
        { title: "Has a special character", validation: containsSpecialCharacters, dataTestId: 'test-special' },
        { title: "Has uppercase letter", validation: containsUppercaseLetter, dataTestId: 'test-uppercase' },
        { title: "Has no consecutive characters", validation: containsConsecutiveCharacters, dataTestId: 'test-consecutive' },
    ];

    const testPassword = (password: string, expectedResults: { dataTestId: string, expectedContent: string }[]) => {
        const passwordField = screen.getByPlaceholderText("Start typing here") as HTMLInputElement;

        fireEvent.change(passwordField, { target: { value: password } });

        for (const { dataTestId, expectedContent } of expectedResults) {
            const testElement = screen.getByTestId(dataTestId);
            expect(testElement).toHaveTextContent(expectedContent);
        }
    };

    beforeEach(function () {
        render(<Password validations={validations} />);
    });

    it('Password Qv3n7u5_P4$$w0rd should pass', () => {
        testPassword('Qv3n7u5_P4$$w0rd', [
            { dataTestId: 'test-numerals', expectedContent: '✔' },
            { dataTestId: 'test-special', expectedContent: '✔' },
            { dataTestId: 'test-uppercase', expectedContent: '✔' },
            { dataTestId: 'test-consecutive', expectedContent: '✔' },
        ]);
    });

    it('Password Test123 should fail on special characters and consecutive characters', () => {
        testPassword('Test123', [
            { dataTestId: 'test-numerals', expectedContent: '✔' },
            { dataTestId: 'test-special', expectedContent: 'x' },
            { dataTestId: 'test-uppercase', expectedContent: '✔' },
            { dataTestId: 'test-consecutive', expectedContent: 'x' },
        ]);
    });


    it('Password with only lowercase letters should fail on uppercase letter validation', () => {
        testPassword('lowercasepassword', [
            { dataTestId: 'test-numerals', expectedContent: 'x' },
            { dataTestId: 'test-special', expectedContent: 'x' },
            { dataTestId: 'test-uppercase', expectedContent: 'x' },
            { dataTestId: 'test-consecutive', expectedContent: '✔' },
        ]);
    });

    it('Password with only uppercase letters should fail on number and special character validation', () => {
        testPassword('UPPERCASEPASSWORD', [
            { dataTestId: 'test-numerals', expectedContent: 'x' },
            { dataTestId: 'test-special', expectedContent: 'x' },
            { dataTestId: 'test-uppercase', expectedContent: '✔' },
            { dataTestId: 'test-consecutive', expectedContent: '✔' },
        ]);
    });

    it('Password with only special characters all other validations', () => {
        testPassword('@#$%^&*!', [
            { dataTestId: 'test-numerals', expectedContent: 'x' },
            { dataTestId: 'test-special', expectedContent: '✔' },
            { dataTestId: 'test-uppercase', expectedContent: 'x' },
            { dataTestId: 'test-consecutive', expectedContent: 'x' },
        ]);
    });

    it('Empty password should fail on all validations', () => {
        testPassword('', [
            { dataTestId: 'test-numerals', expectedContent: 'x' },
            { dataTestId: 'test-special', expectedContent: 'x' },
            { dataTestId: 'test-uppercase', expectedContent: 'x' },
            { dataTestId: 'test-consecutive', expectedContent: 'x' },
        ]);
    });

    it('Password "aA1!bB2@cC3" should pass all validations', () => {
        testPassword('aA1!bB2@cC3', [
            { dataTestId: 'test-numerals', expectedContent: '✔' },
            { dataTestId: 'test-special', expectedContent: '✔' },
            { dataTestId: 'test-uppercase', expectedContent: '✔' },
            { dataTestId: 'test-consecutive', expectedContent: '✔' },
        ]);
    });


});
