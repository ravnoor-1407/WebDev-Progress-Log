const figlet = require('figlet');

// Print "Hello World!" in ASCII art
figlet('Hello World!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
});

// Print "Myself" in ASCII art
figlet('Myself', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
});

// Print "Ravnoor" in ASCII art
figlet('Ravnoor', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
});