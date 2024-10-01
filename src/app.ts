const encode = (msg: string, shift: number): string => {
    const lMsg = msg.toLowerCase();
    const validChars = 'abcdefghijklmnopqrstuvwxyz'.split('');    
    const isValid = lMsg.split('').every(char => validChars.includes(char));

    if (!isValid) return '';

    return lMsg
        .split('')
        .map(char => {
            const index = validChars.indexOf(char);
            const newIndex = ((index + shift) % validChars.length + validChars.length) % validChars.length;
            return validChars[newIndex];
        })
        .join('');
};

export default encode;
