// This is template for another cipher. You need to implement decrypt and crypt functions, change name and add this object into ./index.js
export default {
    name: 'Caesar',
    enabled: false,
    decrypt: function (code) {
        return 'Encrypted in Ceasar';
    },
    crypt: function (text) {
        return 'Crypted in Ceasar';
    }
}