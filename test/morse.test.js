let morse = require('../crypts/algorithms/morse');

beforeAll(() => morse = morse.default);

test('prop "name" returns correct value', () => {
    expect(morse.name).toBe("Morse");
})

describe('crypt', () => {
    test('Crypt empty string', () => {
        expect(morse.crypt("")).toBe("");
    })
    test('Crypt string " "', () => {
        expect(morse.crypt(" ")).toBe("  ");
    })

    test('Crypt "SOFT"', () => {
        expect(morse.crypt("SOFT")).toBe("... --- ..-. -");
    })

    test('Crypt czech accent "ěščřžýááíé"', () => {
        expect(morse.crypt("ěščřžýááíé")).toBe(". ... -.-. .-. --.. -.-- .- .- .. .");
    })

    test('Crypt special chars', () => {
        expect(morse.crypt("/*-+")).toBe("? ? ? ?");
    })

    test('Crypt upperCase letters', () => {
        expect(morse.crypt("ABCDEFGHIJKLMNOPQRSTUVWXYZ"))
            .toBe(".- -... -.-. -.. . ..-. --. .... .. .--- -.- .-.. -- -. --- .--. --.- .-. ... - ..- ...- .-- -..- -.-- --..");
    })

    test('Crypt lowerCase letters', () => {
        expect(morse.crypt("abcdefghijklmnopqrstuvwxyz"))
            .toBe(".- -... -.-. -.. . ..-. --. .... .. .--- -.- .-.. -- -. --- .--. --.- .-. ... - ..- ...- .-- -..- -.-- --..");
    })

    test('Crypt numbers 1234567890', () => {
        expect(morse.crypt("1234567890")).toBe(".---- ..--- ...-- ....- ..... -.... --... ---.. ----. -----")
    })
})

describe('decrypt', () => {
    test('Decrypt empty string', () => {
        expect(morse.decrypt("")).toBe("");
    })

    test('Decrypt string " "', () => {
        expect(morse.decrypt(" ")).toBe("");
    })

    test('Decrypt string "    "', () => {
        expect(morse.decrypt("    ")).toBe("  ");
    })

    test('Decrypt "... --- ..-. -"', () => {
        expect(morse.decrypt("... --- ..-. -")).toBe("SOFT");
    })

    test('Decrypt text with space as last char', () => {
        expect(morse.decrypt("... --- ..-. - ")).toBe("SOFT");
    })
    test('Decrypt non morse code', () => {
        expect(morse.decrypt("Hello")).toBe("?")
    })
})
