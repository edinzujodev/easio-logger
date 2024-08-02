// tests/styledConsoleLog.test.js

const log = require('../src/styledConsoleLog');

describe('Styled Console Log', () => {
    beforeEach(() => {
        console.log = jest.fn(); // Mock console.log
    });

    it('should log error messages in red', () => {
        log.error('This is an error');
        expect(console.log).toHaveBeenCalledWith('%cThis is an error', 'color: #E87D75');
    });

    it('should log success messages in green', () => {
        log.success('This is a success');
        expect(console.log).toHaveBeenCalledWith('%cThis is a success', 'color: #1DCC7E');
    });

    it('should log bold messages', () => {
        log.bold('This is bold');
        expect(console.log).toHaveBeenCalledWith('%cThis is bold', 'font-weight: bold');
    });

    it('should log italic messages', () => {
        log.italic('This is italic');
        expect(console.log).toHaveBeenCalledWith('%cThis is italic', 'font-style: italic');
    });

    it('should log big messages', () => {
        log.big('This is big');
        expect(console.log).toHaveBeenCalledWith('%cThis is big', 'font-size: 20px');
    });

    it('should log warning messages in yellow', () => {
        log.warning('This is a warning');
        expect(console.log).toHaveBeenCalledWith('%cThis is a warning', 'color: #F2CF92');
    });

    it('should log info messages in blue', () => {
        log.info('This is info');
        expect(console.log).toHaveBeenCalledWith('%cThis is info', 'color: #7BBEE8');
    });

    it('should log underlined messages', () => {
        log.underline('This is underlined');
        expect(console.log).toHaveBeenCalledWith('%cThis is underlined', 'text-decoration: underline');
    });

    it('should log strikethrough messages', () => {
        log.strikethrough('This is strikethrough');
        expect(console.log).toHaveBeenCalledWith('%cThis is strikethrough', 'text-decoration: line-through');
    });

    it('should log small messages', () => {
        log.small('This is small');
        expect(console.log).toHaveBeenCalledWith('%cThis is small', 'font-size: 10px');
    });

    it('should log messages with a shadow', () => {
        log.shadow('This has a shadow');
        expect(console.log).toHaveBeenCalledWith('%cThis has a shadow', 'text-shadow: 2px 2px 2px rgba(0,0,0,0.3)');
    });

    it('should log uppercase messages', () => {
        log.uppercase('THIS IS UPPERCASE');
        expect(console.log).toHaveBeenCalledWith('%cTHIS IS UPPERCASE', 'text-transform: uppercase');
    });

    it('should allow chaining styles', () => {
        log.error.bold.underline('This is an error, bold, and underlined');
        expect(console.log).toHaveBeenCalledWith('%cThis is an error, bold, and underlined', 'color: #E87D75; font-weight: bold; text-decoration: underline');
    });

    it('should allow chaining multiple styles', () => {
        log.success.bold.italic.big('This is a success, bold, italic, and big');
        expect(console.log).toHaveBeenCalledWith('%cThis is a success, bold, italic, and big', 'color: #1DCC7E; font-weight: bold; font-style: italic; font-size: 20px');
    });

    it('should handle multiple style applications correctly', () => {
        log.info.underline.shadow.big('This is an info message with underline, shadow, and big');
        expect(console.log).toHaveBeenCalledWith('%cThis is an info message with underline, shadow, and big', 'color: #7BBEE8; text-decoration: underline; text-shadow: 2px 2px 2px rgba(0,0,0,0.3); font-size: 20px');
    });
});