const CONTRACT_ADDRESS = '0x8eEA4B1552ad01835b09fB85b9c1252Fc0d11bb5';
const transformCharacterData = (characterData) => {
    return {
      name: characterData.name,
      imageURI: characterData.imageURI,
      hp: characterData.hp.toNumber(),
      maxHp: characterData.maxHp.toNumber(),
      attackDamage: characterData.attackDamage.toNumber(),
    };
  };
export { CONTRACT_ADDRESS, transformCharacterData };