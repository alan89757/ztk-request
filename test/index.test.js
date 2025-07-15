const { camelCase, capitalize, truncate } = require('../index');

describe('String Utils', () => {
    describe('camelCase', () => {
        test('converts snake_case to camelCase', () => {
            expect(camelCase('hello_world')).toBe('helloWorld');
        });

        test('converts kebab-case to camelCase', () => {
            expect(camelCase('hello-world')).toBe('helloWorld');
        });

        test('handles multiple separators', () => {
            expect(camelCase('foo_bar-baz')).toBe('fooBarBaz');
        });
    });

    describe('capitalize', () => {
        test('capitalizes the first letter', () => {
            expect(capitalize('hello')).toBe('Hello');
        });

        test('leaves other letters unchanged', () => {
            expect(capitalize('HELLO')).toBe('HELLO');
        });

        test('handles empty string', () => {
            expect(capitalize('')).toBe('');
        });
    });

    describe('truncate', () => {
        test('does not truncate if within max length', () => {
            expect(truncate('Hello', 10)).toBe('Hello');
        });

        test('truncates and adds ellipsis', () => {
            expect(truncate('Hello, world!', 5)).toBe('Hello...');
        });

        test('uses custom ellipsis', () => {
            expect(truncate('Long text', 4, '---')).toBe('Long---');
        });
    });
});    