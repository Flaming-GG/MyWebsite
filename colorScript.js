function ChangeColor() {
    const colors = ["#FFFFFF", "#000000", "##31e8d6"];
    const RandomColor = colors[Math.floor(Math.random() * colors.length)]

    document.body.style.backgroundColor = RandomColor
}
