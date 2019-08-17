import ciphers from './methods'

/**
 * Decrypt of crypt depence on param. 
 * @param Object{ crypt: {String}, mode:{String}, input:{String}} answers 
 */
export function textTranformation(answers) {
  let output;
  let selectedCipher;

  ciphers.forEach(cipher => {
    if (answers.crypt == cipher.name) {
      selectedCipher = cipher;
    }
  });

  if (answers.mode == "Crypt my text!") {
    output = selectedCipher.crypt(answers.input)
  } else {
    output = selectedCipher.decrypt(answers.input)
  }
  return output;
}

/**
 * returns Array of available cipher
 */
export function cipherNames() {
  let names = [];
  ciphers.forEach(method => {
    let name = { name: method.name };
    if (method.enabled == false) {
      name = {
        ...name,
        disabled: 'Currently disabled'
      }
    }
    names.push(name);
  });
  return names;
};