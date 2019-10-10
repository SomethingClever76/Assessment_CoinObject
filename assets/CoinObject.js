// An object is created and labeled "coin".
// It contains 1 property ('state') and 
// 3 methods/functions ('flip', 'toString' and 'toHTML').
const Coin = {
    state: 0,
    flip: function () {
        // 1. Randomly set your coin object's "state" property to be either 
        //    0 or 1: use "this.state" to access the "state" property on this object.
        if (Math.random() > .5) {
            this.state = 0;
        } else {
            this.state = 1;
        }
    },
    toString: function () {
        // 2. Return the string "Heads" or "Tails", depending on whether
        //    "this.state" is 0 or 1.
        if (this.state === 0) {
            return "Heads" + " ";
        } else {
            return "Tails" + " ";
        }
    },
    toHTML: function () {
        const image = document.createElement('img');
        // 3. Set the properties of this image element to show either face-up
        //    or face-down, depending on whether this.state is 0 or 1.
        if (this.state === 0) {
            image.src = "./assets/images/quarterHeads.png"
            // the following syntax was copied from a website.
            // Eric showed a different way to type the same info-
            // compare the if statement to the else statement and
            // notice the differences.
            image.setAttribute("width", "128");
            image.setAttribute("height", "128");
            // optional - set alt text for image
            // image.setAttribute("alt", "Heads-up coin");
        } else {
            image.src = "./assets/images/quarterTails.png"
            image.width = "128";
            image.height = "128";
            image.alt = "Tails-up coin";
        }
        return image;
    }
};
// Observe the closing curly brace and semi-colon -
// We're now outside of the object, back in the global scope.
// Inside the object, we were able to use 'this' to refer to the
// object itself. Outside of the object, we have to refer to it 
// by its name, 'Coin'

function display20Flips() {
    const results = [];
    // 4. Use a loop to flip the coin 20 times, each time displaying the result 
    // of the flip as a string on the page.  After your loop completes, return an array with 
    // the result of each flip.
    for (var i = 0; i < 20; i++) {
        Coin.flip();
        document.write(Coin.toString());
        results.push(Coin.toString());
    } 
    return results;
}
function display20Images() {
    const results = [];
    // 5. Use a loop to flip the coin 20 times, and display the results of each 
    // flip as an image on the page.  After your loop completes, return an array with result 
    // of each flip.
    for (var i = 0; i < 20; i++) {
        Coin.flip();
        document.querySelector('body').appendChild(Coin.toHTML());
        results.push(Coin.toHTML());
    }
    return results;
}

// extra code to insert a break between the text results and 
// the image results
let lineBreak = document.createElement("div")
lineBreak.style.marginBottom = "50px"

display20Flips();
document.querySelector('body').appendChild(lineBreak);
display20Images();