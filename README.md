# Gemini Auto Expand Show Thinking

![Version](https://img.shields.io/badge/version-0.1.1-blue.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

A userscript that automatically expands the "Show thinking" panel in Google Gemini chat when it appears, providing seamless access to AI reasoning without manual interaction.

## 🚀 Features

- **Automatic Expansion**: Instantly expands "Show thinking" panels as they appear in Gemini conversations
- **Intelligent Detection**: Uses DOM mutation observers to detect dynamically loaded content
- **Non-Intrusive**: Lightweight script that runs only when needed

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

## 🤝 Contributing

Contributions are welcome! Please feel free to:

- Report bugs by opening an issue
- Suggest new features
- Submit pull requests

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
