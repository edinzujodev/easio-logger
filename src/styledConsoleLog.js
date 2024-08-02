// src/styledConsoleLog.js

const styles = {
    error: 'color: #E87D75',
    success: 'color: #1DCC7E',
    bold: 'font-weight: bold',
    italic: 'font-style: italic',
    big: 'font-size: 20px',
    warning: 'color: #F2CF92',
    info: 'color: #7BBEE8',
    underline: 'text-decoration: underline',
    strikethrough: 'text-decoration: line-through',
    small: 'font-size: 10px',
    blueBackground: 'background-color: #7BBEE8; color: white',
    greenBackground: 'background-color: #1DCC7E; color: white',
    redBackground: 'background-color: #E87D75; color: white',
    shadow: 'text-shadow: 2px 2px 2px rgba(0,0,0,0.3)',
    uppercase: 'text-transform: uppercase'
};

const createLogger = () => {
    let appliedStyles = [];

    const handler = {
        get(target, prop) {
            if (prop in styles) {
                appliedStyles.push(styles[prop]);
                return new Proxy(() => {}, handler); // Return a new proxy for further chaining
            } else if (prop === 'log') {
                return (message) => {
                    const styleString = appliedStyles.join('; ');
                    console.log(`%c${message}`, styleString);
                    appliedStyles = []; // Reset styles after logging
                };
            } else {
                throw new Error(`Unknown style: ${prop}`);
            }
        },
        apply(target, thisArg, argumentsList) {
            if (typeof target === 'function') {
                const [message] = argumentsList;
                const styleString = appliedStyles.join('; ');
                console.log(`%c${message}`, styleString);
                appliedStyles = []; // Reset styles after logging
            }
        }
    };

    const log = new Proxy(() => {}, handler);
    return log;
};

const log = createLogger();

module.exports = log;