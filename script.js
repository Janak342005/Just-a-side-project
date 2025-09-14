var wrongOne = document.getElementById("two");
var wrongTwo = document.getElementById("five");
var wrongThre = document.getElementById("three");
var answer = document.getElementById("four");

answer.addEventListener("click", function() {
    var img = document.querySelector("img");
    img.src =  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqtHmQGhetwKOGGRZisgIMTSgo5SxIn5Qplw&s"
    img.style.filter = "blur(0px)";
});

wrongTwo.addEventListener("click", function() {
    var img = document.querySelector("img");
    img.src = "https://i.ytimg.com/vi/ufIlqnt8Bhw/oar2.jpg?sqp=-oaymwEiCJwEENAFSFqQAgHyq4qpAxEIARUAAAAAJQAAyEI9AICiQw==&rs=AOn4CLBu6ywjO4VCZW_GPwL1HcBMa4sisg";
    img.style.filter = "blur(0px)";
})

wrongOne.addEventListener("click", function() {
    var img = document.querySelector("img");
    img.src = "https://www.shutterstock.com/image-photo/young-romantic-boyfriend-lover-trendy-260nw-2157008671.jpg";
    img.style.filter = "blur(0px)";
})

wrongThre.addEventListener("click", function() {
    var img = document.querySelector("img");
    img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPWLHZc1tugesKrGa3Yi2MABHq4eEH2viE48YwAPj9mTTG534aCzF1HNzbG2DV5h8wjJM&usqp=CAU";
    img.style.filter = "blur(0px)";
})

