describe('farenheit-to-celcius', () => {
    test('canary verifies test tools', () => {
        expect(true).toEqual(true);
    });

    test('32 degrees in farenheit is 0 in C', () => {
        expect(farenheitToCelcius(32)).toEqual(0);
    });

    test('212 degrees in farenheit is 100 in C', () => {
        expect(farenheitToCelcius(212)).toEqual(100);
    });
});

function farenheitToCelcius(far){
    return (far - 32) * 5 / 9;
}
