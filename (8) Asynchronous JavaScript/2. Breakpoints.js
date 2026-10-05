// Breakpoints in JavaScript
// A breakpoint is a debugging tool provided by browsers and IDEs (like Chrome DevTools or VS Code).

// When execution reaches a breakpoint:
// • JavaScript pauses.
// • You can inspect variables and their values.
// • You can view the Call Stack.
// • You can execute the code one line at a time.
// • You can identify and fix bugs more easily.
// After inspection, you can resume execution

function one() {
    return 1;
}

function two() {
    return one() + one();
}

function three() {
    let result = two() + one();
    console.log(result);
}

three();

/*
How to Add a Breakpoint (Chrome DevTools)
1. Open your webpage.
2. Press F12 or Right Click → Inspect.
3. Open the Sources tab.
4. Open your JavaScript file.
5. Click the line number where you want execution to pause.
6. Refresh or run the program.

When execution reaches that line, it will pause automatically
*/