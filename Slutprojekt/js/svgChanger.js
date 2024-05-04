const svgs = [
    './svg/rust-logo.svg',
    './svg/rust-analyzer.svg',
    './svg/bevy.svg'
];
const titles = [
    'Rust',
    'rust-analyzer',
    'Bevy'
];
const texts = [
    `Rust is a multi-paradigm, general-purpose programming language that emphasizes performance, type safety, and concurrency.
    It enforces memory safety, meaning that all references point to valid memory, without a garbage collector.

    Rust has a strong community and ecosystem, with excellent documentation, tooling, and a friendly compiler with useful error messages.
    It is used by hundreds of companies around the world for fast, low-resource, cross-platform solutions, including major software like Firefox, Dropbox, and Cloudflare.

    Rust is free and open-source software, released under the Apache 2.0 and MIT Licenses.`,

    `rust-analyzer is a modular compiler frontend for the Rust language. It is a part of a larger rls-2.0 effort to create excellent IDE support for Rust.

    rust-analyzer operates as a library for semantic analysis of Rust code, allowing it to provide features like code completion and "goto definition" for various code editors, including VS Code, Emacs, and Vim, by implementing the LSP (Language Server Protocol)

    rust-analyzer is free and open-source software, released under the Apache 2.0 and MIT Licenses.`,


    `Bevy is a data-driven game engine built in Rust, designed to be simple, modular, and fast.

    It offers a complete 2D and 3D feature set, making it suitable for creating games, visualizations, user interfaces, and other graphical applications.

    Bevy's architecture is based on the Entity Component System (ECS) paradigm, which allows for a data-oriented design that is both efficient and flexible.
    It emphasizes productivity by aiming for quick compile times, with the "fast compiles" configuration promising compile times of 0.8-3.0 seconds, significantly faster than other popular Rust game engines.

    Bevy is free and open-source software, released under the Apache 2.0 and MIT Licenses.`
];
let currentIndex = 0;
let leftAudioIndex = 0;
let rightAudioIndex = 0;
let lastArrowPressed = null;

document.getElementById('leftArrow').addEventListener('click', function() {
    const leftArrow = document.getElementById('leftArrow');
    const rightArrow = document.getElementById('rightArrow');
    const theSVGs = document.getElementById('theSVGs');
    const theTitles = document.getElementById('theTitles');
    const theTexts = document.getElementById('theTexts');

    // Disable both arrows during the transition
    leftArrow.disabled = true;
    rightArrow.disabled = true;

    // Fade out the current SVG and text
    theSVGs.style.opacity = '0';
    theTitles.style.opacity = '0';
    theTexts.style.opacity = '0';

    setTimeout(() => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = svgs.length - 1;
        }
        theSVGs.src = svgs[currentIndex];
        theTitles.innerText = titles[currentIndex];
        theTexts.innerText = texts[currentIndex];

        // Fade in the new SVG and text
        theSVGs.style.opacity = '1';
        theTitles.style.opacity = '1';
        theTexts.style.opacity = '1';

        // Re-enable both arrows after the transition
        leftArrow.disabled = false;
        rightArrow.disabled = false;
    }, 500); // This delay should match the duration of the fade-out transition
});

document.getElementById('rightArrow').addEventListener('click', function() {
    const leftArrow = document.getElementById('leftArrow');
    const rightArrow = document.getElementById('rightArrow');
    const theSVGs = document.getElementById('theSVGs');
    const theTitles = document.getElementById('theTitles');
    const theTexts = document.getElementById('theTexts');

    // Disable both arrows during the transition
    leftArrow.disabled = true;
    rightArrow.disabled = true;

    // Fade out the current SVG and text
    theSVGs.style.opacity = '0';
    theTitles.style.opacity = '0';
    theTexts.style.opacity = '0';

    setTimeout(() => {
        currentIndex++;
        if (currentIndex >= svgs.length) {
            currentIndex = 0;
        }
        theSVGs.src = svgs[currentIndex];
        theTitles.innerText = titles[currentIndex];
        theTexts.innerText = texts[currentIndex];

        // Fade in the new SVG and text
        theSVGs.style.opacity = '1';
        theTitles.style.opacity = '1';
        theTexts.style.opacity = '1';

        // Re-enable both arrows after the transition
        leftArrow.disabled = false;
        rightArrow.disabled = false;
    }, 500); // This delay should match the duration of the fade-out transition
});