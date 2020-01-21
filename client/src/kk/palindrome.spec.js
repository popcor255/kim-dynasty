const palindrome = input => {

    if(input === null){
        throw new Error('Cannot be null');
    }

    if(input.length === 0){
        throw new Error('Cannot be empty string');
    }

    if(input.length === 1){
        return true;
    }

    input = input.replace(/\s/g, '');
    var length = input.length / 2;
    for(var i = 0; i < length; i++){
        if(input.charAt(i) !== input.charAt(input.length - 1 - i)){
            return false;
        }
    }

    return true;
};

describe('palindrome', () => {
    test('a single letter is a palindrome', () => {
        expect(palindrome('a')).toEqual(true);
    });

    test('an empty string throws an error', () => {
        expect(() => {
            palindrome('');
        }).toThrow(new Error('Cannot be empty string'));
    });

    test('\'abba abba\' is a palindrome', () => {
        expect(palindrome('abba abba')).toEqual(true);
    });

    test('\'abba a abba\' is a palindrome', () => {
        expect(palindrome('abba a abba')).toEqual(true);
    });

    test('\'abba bbba\' is not a palindrome', () => {
        expect(palindrome('abba bbba')).toEqual(false);
    });

    test('Null throws an error', () => {
        expect(() => {
            palindrome(null);
        }).toThrow(new Error('Cannot be null'));
    });
});