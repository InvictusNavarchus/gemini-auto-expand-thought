// ==UserScript==
// @name         Gemini Auto Expand Show Thinking
// @namespace    https://github.com/InvictusNavarchus/gemini-auto-expand-thought
// @downloadURL  https://raw.githubusercontent.com/InvictusNavarchus/gemini-auto-expand-thought/master/gemini-auto-expand-thought.user.js
// @updateURL    https://raw.githubusercontent.com/InvictusNavarchus/gemini-auto-expand-thought/master/gemini-auto-expand-thought.user.js
// @version      0.1.0
// @description  Automatically expands the "Show thinking" panel in Gemini chat when it appears.
// @author       InvictusNavarchus
// @match        https://gemini.google.com/app/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

    const SCRIPT_PREFIX = '[Gemini Auto Expand]:';

    /**
     * Clicks the "Show thinking" button if it's present and collapsed.
     * @param {HTMLButtonElement} button - The button element to check and click.
     */
    const clickShowThinkingButton = (button) => {
        // Verify the button is intended to "Show thinking" (i.e., it has the 'expand_more' icon)
        const icon = button.querySelector('mat-icon[data-mat-icon-name="expand_more"]');
        if (icon) {
            // Basic visibility check: ensure the element is in the layout
            if (button.offsetParent !== null) {
                console.log(SCRIPT_PREFIX, 'Found collapsed "Show thinking" button. Clicking...', button);
                button.click();
            } else {
                console.log(SCRIPT_PREFIX, 'Found "Show thinking" button, but it is not visible.', button);
            }
        }
    };

    /**
     * Processes a DOM node to find and click "Show thinking" buttons.
     * This function is called for newly added nodes.
     * @param {Node} node - The DOM node to process.
     */
    const processNode = (node) => {
        // Ensure we are dealing with an element node
        if (node.nodeType !== Node.ELEMENT_NODE) {
            return;
        }

        // Collection to hold 'model-thoughts' elements to check
        const panelsToCheck = [];

        // Case 1: The added node itself is a 'model-thoughts' panel
        if (node.matches('model-thoughts')) {
            panelsToCheck.push(node);
        }

        // Case 2: The added node is a container that might have 'model-thoughts' panels as descendants
        // This ensures we find panels even if they are nested within the added node.
        // Using `querySelectorAll` handles this efficiently.
        panelsToCheck.push(...node.querySelectorAll('model-thoughts'));

        // Iterate over unique panels found
        // A Set can be used if duplicates are a concern, but querySelectorAll on a node and the node itself
        // should generally result in distinct elements or a manageable list.
        new Set(panelsToCheck).forEach(panel => {
            const button = panel.querySelector('button[data-test-id="thoughts-header-button"]');
            if (button) {
                clickShowThinkingButton(button);
            }
        });
    };

    // --- Main script execution ---

    // Initial scan: Check for any "Show thinking" buttons already on the page when the script loads.
    // This handles cases where the content is present before the MutationObserver is fully active.
    try {
        document.querySelectorAll('model-thoughts button[data-test-id="thoughts-header-button"]').forEach(clickShowThinkingButton);
    } catch (e) {
        console.error(SCRIPT_PREFIX, 'Error during initial scan:', e);
    }


    // Set up a MutationObserver to watch for dynamically added content.
    const observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') { // We are interested in nodes being added or removed
                mutation.addedNodes.forEach(node => {
                    try {
                        processNode(node);
                    } catch (e) {
                        console.error(SCRIPT_PREFIX, 'Error processing added node:', node, e);
                    }
                });
            }
        }
    });

    // Start observing the document body for additions of child elements and changes in their subtrees.
    // `subtree: true` is important for catching nested additions.
    try {
        observer.observe(document.body, { childList: true, subtree: true });
        console.log(SCRIPT_PREFIX, 'Script loaded and observing DOM changes.');
    } catch (e) {
        console.error(SCRIPT_PREFIX, 'Error starting MutationObserver:', e);
    }

})();
