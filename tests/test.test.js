describe('Testeando test.js', () => {
    test('Mi primer test de react', () => {
        const message = 'Hola mundo';
        const message2 = message.trim();
        expect(message).toBe(message2);
    });
});