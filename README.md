# React 19 useEffect Cleanup Issue

This repository demonstrates a subtle issue I encountered in React 19 related to the useEffect hook's cleanup function not being reliably called when a component unmounts.  The example showcases a simple counter component where the cleanup function should log 'Component unmounted' to the console when the component is removed from the DOM. However, under certain conditions (such as rapid component updates or switching between routes), this log message might not appear, indicating a potential issue in how React 19 manages cleanup functions in high-frequency scenarios.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.
4. Observe the console logs.  Try rapidly clicking and unmounting the component to see if the cleanup message consistently appears.