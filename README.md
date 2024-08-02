# Easio Logger

Welcome to **Easio Logger**, coloring system for console log. Sometimes logging can be a bit boring or you just really need that red output msg.
This library allows you to customize your console output with a rich set of styles and chaining capabilities, making it easier to see what's important at a glance.

## 📦 Installation

```bash
npm install easio-logger
```
## 🎨 Available Styles

Here's a list of styles you can apply to your logs:
```bash
- `log.error()`: Logs in red text. ⚠️
- `log.success()`: Logs in green text. ✅
- `log.bold()`: Logs in bold text. 💪
- `log.italic()`: Logs in italic text. ✨
- `log.big()`: Logs in large text. 🔠
- `log.warning()`: Logs in yellow text. ⚠️
- `log.info()`: Logs in blue text. ℹ️
- `log.underline()`: Logs with underlined text. 🔗
- `log.strikethrough()`: Logs with strikethrough text. ❌
- `log.small()`: Logs in small text. 🔡
- `log.blueBackground()`: Logs with a blue background. 💙
- `log.greenBackground()`: Logs with a green background. 💚
- `log.redBackground()`: Logs with a red background. ❤️
- `log.shadow()`: Logs with text shadow. 🌫️
- `log.uppercase()`: Logs in uppercase text. 🔠
```

🛠️ Usage
Here's how you can use the library in your browser console:

### Basic Logging

```
log.error('This is an error message'); // Red text
```
### Chained Logging


```
log.success.bold('This is a success message in bold green'); // Green and bold
```
### Combining Multiple Styles

```
log.warning.italic.big('This is a big italic warning message'); // Yellow, italic, and big
```
