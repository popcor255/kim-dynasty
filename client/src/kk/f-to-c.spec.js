const fahrenheitToCelcius = (fahrenheit) => {

    if (typeof fahrenheit !== 'number'){
        console.log('error');
        throw new Error('Not a Number');
    }

    return (fahrenheit - 32) * 5 / 9;
}

describe('f-to-c', () => {
    test('canary verifies test tools', () => {
        expect(true).toEqual(true);
    });

    test('32 degrees F is 0 degrees C', () => {
        expect(fahrenheitToCelcius(32)).toEqual(0);
    });

    test('212 degrees F is 100 degrees C', () => {
        expect(fahrenheitToCelcius(212)).toEqual(100);
    });

    test('when the value is not a number then throw an exception', () => {
        expect(() => {
            fahrenheitToCelcius('test');
        }).toThrow(new Error('Not a Number'));
    });
});