// THIS IS SPECIFIC JAVASCRIPT FILE FOR EACH PAGE - WHICH STORES STORY CONTENT AND CHOICES

var text = [];
text.push('<p>I thrust the bouncing balloons at people at the red light in fancy cars. Many shoo-ed me away. Only a few rolled down their window.</p> <p>I managed to sell some balloons, “5… 10…15…” What came after 15? God only knows.</p>');
// text.push("What should I do?");

// var bg = [];
// bg.push("url('data/chaos1-2.png')");
// bg.push("url('data/mess.jpg')");
// bg.push("url('data/mess.jpg')");
// var bg_cont = document.getElementById("bg_img");


function showChoices() {
    choices.style.display = "block";
    choices.style.opacity = 1;
    anime.timeline({
        easing: "easeInOutSine"
    })
    .add({
        targets: '#phool-intro1',
        opacity: [0, 1],
        direction: "forward",
        // delay: anime.stagger(300),
        delay: 500,
        duration: 1000,
    })
    .add({
        targets: '#phool-intro2',
        opacity: [0, 1],
        direction: "forward",
        // delay: anime.stagger(300),
        delay: 100,
        duration: 1000,
    })
}


/*=======================================================================================*/
/*FOR TEXTBOX ANIMATIONS - OPEN AND CLOSE TETXBOX*/

let i = 0;

var textbox = document.getElementById("phool-textbox-intro");
var textbox_pos = document.getElementById("textbox_cont");
var text_p = document.getElementById("phool-text-intro");
var nextButton = document.getElementById("phool-text-intro-next");
var choices = document.getElementById("phool-choices-intro");

nextButton.style.opacity = 0;
choices.style.opacity = 0;
choices.style.display = "none";

let height = []

for (let j = 0; j < text.length; j++) {
    // if (j == text.length - 1) { // i.e. choices page 
    //     choices.style.display = "block";
    // }
    text_p.innerHTML = text[j];
    height[j] = textbox.offsetHeight;
    height[j] -= 50;
    console.log(height[j]);
}

text_p.innerHTML = text[0];
choices.style.display = "none";
textbox.style.height = "0%";
textbox.style.paddingTop = "0";
textbox.style.paddingBottom = "0";


openWideTextBox();

function openWideTextBox() {
    anime.timeline({
        easing: "easeInOutSine",
    })
    .add({
    targets: textbox,
    width: ["0%", "100%"],
    // height: ["0%", "0%"],
    direction: "forward",
    delay: 100,
    duration: 500,
    complete: ()=> {
        openTextBox();
    }
    });
}

function openTextBox() {
    console.log("textbox opening");

    anime.timeline({
        easing: "easeInOutSine",
    })
    // to open eyes - for text 1
    .add({
    targets: textbox,
    height: ["0%", height[i]+"px"],
    paddingTop: ["0", "35px"],
    paddingBottom: ["0", "35px"],
    direction: "forward",
    delay: 3,
    duration: 500,
    easing: "easeInOutSine",
    complete: ()=> {
        // console.log("print"),
        i++;
        // if (i<text.length) { // show next button on choices
            nextButton.style.display = "block";
            anime.timeline({
                targets: nextButton, // make next button appear
            }).add({
                opacity: [0, 1],
                direction: "forward",
                delay: 300,
                duration: 500,
                easing: "easeInOutSine",
            });
        // }
        // else {
        //     // nextButton.style.display = "none";
        //     showChoices();
        // }
    }
    });
}

nextButton.addEventListener("click", function() {
    if (i == text.length) {
        location.href = "pk-factcheck-4.html";
    }
    else{
        closeTextBox();
    }
})

function closeTextBox() {
    // i++;

    console.log("textbox closed");
    nextButton.style.opacity = 0; // make opacity 0 before closing
    nextButton.style.display = "none";

    anime.timeline({
        easing: "easeInOutSine",
    })
    // to close eyes - for text 1
    .add({
    targets: textbox,
    height: ["0%"],
    paddingTop: ["35px", "0"],
    paddingBottom: ["35px", "0"],
    direction: "forward",
    delay: 3,
    duration: 500,
    complete: ()=>{
        changeInnerText();
        openTextBox();
    }
    });
}

function changeInnerText() {
    if (i<text.length) {
        text_p.innerHTML=text[i];
        // bg_cont.style.backgroundImage = bg[i];
    }
    if (i == 1) {
        textbox.style.background = "rgba(0,0,0,0.75)";
        textbox.style.top = "5%";
    }
}


