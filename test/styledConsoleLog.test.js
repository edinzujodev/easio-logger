// tests/styledConsoleLog.test.js

const log = require('../src/styledConsoleLog');

describe('Styled Console Log', () => {
    beforeEach(() => {
        console.log = jest.fn();
    });

    it('should log error messages in red', () => {
        log.error.log('This is an error');
        expect(console.log).toHaveBeenCalledWith('%cThis is an error', 'color: red');
    });

    it('should log success messages in green', () => {
        log.success.log('This is a success');
        expect(console.log).toHaveBeenCalledWith('%cThis is a success', 'color: green');
    });

    it('should log bold messages', () => {
        log.bold.log('This is bold');
        expect(console.log).toHaveBeenCalledWith('%cThis is bold', 'font-weight: bold');
    });

    it('should log italic messages', () => {
        log.italic.log('This is italic');
        expect(console.log).toHaveBeenCalledWith('%cThis is italic', 'font-style: italic');
    });

    it('should log big messages', () => {
        log.big.log('This is big');
        expect(console.log).toHaveBeenCalledWith('%cThis is big', 'font-size: 20px');
    });

    it('should log warning messages in yellow', () => {
        log.warning.log('This is a warning');
        expect(console.log).toHaveBeenCalledWith('%cThis is a warning', 'color: yellow');
    });

    it('should log info messages in blue', () => {
        log.info.log('This is info');
        expect(console.log).toHaveBeenCalledWith('%cThis is info', 'color: blue');
    });

    it('should log underlined messages', () => {
        log.underline.log('This is underlined');
        expect(console.log).toHaveBeenCalledWith('%cThis is underlined', 'text-decoration: underline');
    });

    it('should log strikethrough messages', () => {
        log.strikethrough.log('This is strikethrough');
        expect(console.log).toHaveBeenCalledWith('%cThis is strikethrough', 'text-decoration: line-through');
    });

    it('should log small messages', () => {
        log.small.log('This is small');
        expect(console.log).toHaveBeenCalledWith('%cThis is small', 'font-size: 10px');
    });  

    it('should log messages with a shadow', () => {
        log.shadow.log('This has a shadow');
        expect(console.log).toHaveBeenCalledWith('%cThis has a shadow', 'text-shadow: 2px 2px 2px rgba(0,0,0,0.3)');
    });

    it('should log uppercase messages', () => {
        log.uppercase.log('THIS IS UPPERCASE');
        expect(console.log).toHaveBeenCalledWith('%cTHIS IS UPPERCASE', 'text-transform: uppercase');
    });

    it('should allow chaining styles', () => {
        log.error.bold.underline.log('This is an error, bold, and underlined');
        expect(console.log).toHaveBeenCalledWith('%cThis is an error, bold, and underlined', 'color: red; font-weight: bold; text-decoration: underline');
    });
});