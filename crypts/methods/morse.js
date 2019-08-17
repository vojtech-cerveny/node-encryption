const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", " ", "\n", ""];
const symbols = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", "-----", ".----", "..---", "...--", "....-", ".....", "-....", "--...", "---..", "----.", "^", "\n", ""];

export default {
    name: 'Morse',
    enabled: true,
    changeWord: function (word, init, result) {
        let normalizedWord = word.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        if (init.indexOf(normalizedWord) > -1) {
            return result[init.indexOf(normalizedWord)];
        } else {
            return "?";
        }
    },
    decrypt: function (morsecode) {
        return morsecode
            .split("  ")
            .map(word => word
                .split(" ")
                .map(char => this.changeWord(char, symbols, letters))
                .join(""))
            .join(" ");
    },
    crypt: function (text) {
        return text
            .toUpperCase()
            .split(" ")
            .map(word => word
                .split("")
                .map(char => this.changeWord(char, letters, symbols))
                .join(" "))
            .join("  ");
    },
}
