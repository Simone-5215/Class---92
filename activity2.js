function getScore()
{
    score = localStorage.getItem("score");
    document.getElementById("update").innerHTML = "<h1>Score: " + score + "</h1>";
}

function Back()
{
    window.location = "activity_1.html";
}