const header = document.querySelectorAll('h2');

for (let i = 0; i < header.length; i++) {
    header[i].style.color = "lightblue";
}


/* const header = document.getElementsByTagName("h2");
for (let i = 0; i < header.length; i++) {
    header[i].style.color = "lightblue";
} */


document.getElementById("Backpacks").style.backgroundColor = 'tomato ';


let radius = document.getElementsByClassName('card');
for (let i = 0; i < radius.length; i++) {
    radius[i].style.borderRadius = "30px";
}


let textField = document.getElementById('input-text');
const btn = document.getElementById('desable-btn');
textField.addEventListener('keyup', function (event) {
    if (event.target.value == "email") {
        btn.removeAttribute('disabled');
    } else {
        btn.setAttribute('disabled',true);
    }

})

let section = document.getElementById('Subscribe');
section.addEventListener('dblclick', function () {
    section.style.backgroundColor = "black";
    section.style.color="white"
})


const hoverChange = document.getElementById('hoverChange');

hoverChange.addEventListener('mouseover', function () {
    hoverChange.src = "img/bags/bag-2.png";
})
hoverChange.addEventListener('mouseout', function () {
    hoverChange.src = "img/bags/bag-1.png";
})


let removebtn = document.querySelectorAll(".removebutton");
for (let btn of removebtn) {
    btn.addEventListener('click', function () {
        btn.style.display = "none";
    })
}

/* let removebtn = document.querySelectorAll(".removebutton");
for (let btn of removebtn) {
    btn.addEventListener('click', function (event) {
        
        event.target.parentNode.removeChild(event.target);
        
    })
} */