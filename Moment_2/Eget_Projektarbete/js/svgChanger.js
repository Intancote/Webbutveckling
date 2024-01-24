const svgs = [
    './svg/haxe-logo.svg',
    './svg/haxeflixel-logo.svg',
    './svg/openFL-logo.svg',
    './svg/lime-logo.svg'
];
const titles = [
    'Haxe',
    'HaxeFlixel',
    'OpenFL',
    'Lime'
];
const texts = [
    `Haxe is an open source high-level strictly-typed programming language with a fast optimizing cross-compiler.

    Haxe can build cross-platform applications targeting JavaScript, C++, C#, Java, JVM, Python, Lua, PHP, Flash, and allows access to each platform's native capabilities. Haxe has its own VMs (HashLink and NekoVM) but can also run in interpreted mode.

    Code written in Haxe can be compiled to any target Haxe supports.

    Haxe is free and open-source software, released under the MIT License.`,


    `HaxeFlixel is an open-source 2D game engine designed for use with the Open Flash Library and the Haxe Toolkit.
    It is completely free for both personal and commercial use and supports multi-platform development for native targets on mobile and desktop, as well as Flash and HTML5 on web platforms.`,


    `OpenFL empowers creative work on desktop, mobile, and web. It's used for business apps and popular games, handling native, Flash, and HTML5 applications seamlessly.

    Built on the familiar Flash API, OpenFL extends beyond Flash Player. Speed up development with a simple workflow, and use Adobe Animate for art.

    It's a free, open-source platform with strong developer support.
    No licensing fees, and your code stays yours.

    Create games and apps for many platforms: Windows, macOS, Linux, iOS, Android, Flash, AIR, HTML5. Your creativity can reach desktops, tablets, phones, and consoles.`,


    `Lime is a flexible, lightweight layer for Haxe cross-platform developers.
    Lime provides a common foundation on native and dynamic targets for window and application life-cycle management, access to rendering and sound, plus many other useful features for cross-platform development.`
];
let currentIndex = 0;

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