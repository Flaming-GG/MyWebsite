function ChangeColor() {
    const colors = ["#FFFFFF", "#000000", "#31e8d6"];
    const RandomColor = colors[Math.floor(Math.random() * colors.length)]

    document.body.style.backgroundColor = RandomColor
    if (RandomColor === "#000000")
    {
        document.getElementById("text_01").style.color = "#FFFFFF";
        document.getElementById("title").style.color = "#FFFFFF"
    }
    if (RandomColor === "#FFFFFF" || RandomColor === "#31e8d6")
    {
        document.getElementById("text_01").style.color = "#000000";
    }

    
}
