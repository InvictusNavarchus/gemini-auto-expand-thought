# Gemini Auto Expand Show Thinking

A userscript that automatically expands the "Show thinking" panel in Google Gemini chat when it appears, providing seamless access to AI reasoning without manual interaction.

## 🚀 Features

- **Automatic Expansion**: Instantly expands "Show thinking" panels as they appear in Gemini conversations
- **Intelligent Detection**: Uses DOM mutation observers to detect dynamically loaded content
- **Non-Intrusive**: Lightweight script that runs only when needed
- **Error Handling**: Robust error handling with detailed console logging for debugging
- **Visibility Checks**: Ensures buttons are actually visible before attempting to click them

## 📋 Requirements

- A userscript manager browser extension:
  - [Tampermonkey](https://www.tampermonkey.net/) (Chrome, Firefox, Safari, Edge)
  - [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) (Firefox)
  - [Violentmonkey](https://violentmonkey.github.io/) (Chrome, Firefox, Edge)

## 🔧 Installation

### Method 1: Direct Installation
1. Install a userscript manager (see requirements above)
2. Click this link to install: [gemini-auto-expand-thought.user.js](https://raw.githubusercontent.com/InvictusNavarchus/gemini-auto-expand-thought/master/gemini-auto-expand-thought.user.js)
3. Your userscript manager will prompt you to install the script
4. Click "Install" to confirm

### Method 2: Manual Installation
1. Copy the contents of `gemini-auto-expand-thought.user.js`
2. Open your userscript manager dashboard
3. Create a new script and paste the code
4. Save the script

## 🎯 Usage

Once installed, the script works automatically:

1. Navigate to [Google Gemini](https://gemini.google.com/app)
2. Start a conversation that triggers Gemini's thinking process
3. When "Show thinking" panels appear, they will be automatically expanded
4. No manual interaction required!

## 🔍 How It Works

The script employs two main strategies:

1. **Initial Scan**: Checks for existing "Show thinking" buttons when the page loads
2. **Dynamic Monitoring**: Uses `MutationObserver` to watch for new content and automatically expand thinking panels as they appear

The script specifically targets:
- Elements with the `model-thoughts` tag
- Buttons with `data-test-id="thoughts-header-button"`
- Icons with `data-mat-icon-name="expand_more"` (indicating collapsed state)

## 🛠️ Development

### Project Structure
```
gemini-auto-expand-thought/
├── gemini-auto-expand-thought.user.js  # Main userscript
├── LICENSE                             # MIT License
└── README.md                          # This file
```

### Key Functions
- `clickShowThinkingButton()`: Handles button clicking with visibility checks
- `processNode()`: Processes DOM nodes to find and expand thinking panels
- `MutationObserver`: Monitors DOM changes for dynamic content

## 🐛 Troubleshooting

If the script isn't working:

1. **Check Console**: Open browser dev tools (F12) and look for log messages prefixed with `[Gemini Auto Expand]:`
2. **Verify Installation**: Ensure your userscript manager shows the script as active on `gemini.google.com`
3. **Update Script**: Make sure you have the latest version
4. **Clear Cache**: Try clearing your browser cache and reloading Gemini

## 🤝 Contributing

Contributions are welcome! Please feel free to:

- Report bugs by opening an issue
- Suggest new features
- Submit pull requests

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- [GitHub Repository](https://github.com/InvictusNavarchus/gemini-auto-expand-thought)
- [Download Latest Version](https://raw.githubusercontent.com/InvictusNavarchus/gemini-auto-expand-thought/master/gemini-auto-expand-thought.user.js)
- [Google Gemini](https://gemini.google.com/app)

## ⚡ Version History

- **v0.1.1**: Current version with improved DOM handling and error management
- **v0.1.0**: Initial release

---

*Made with ❤️ for the Gemini community*
