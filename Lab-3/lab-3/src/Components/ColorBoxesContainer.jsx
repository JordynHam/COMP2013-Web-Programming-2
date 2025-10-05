import ColorBox from "./ColorBox";

export default function ColorBoxesContainer ({colors}) {

    let colorBoxes = [];

    for (let i = 0; i < 25; i++) {
        colorBoxes.push({key: i, color: colors[Math.floor(Math.random() * colors.length)]});
    }
    return <div className="colorBoxes">
        {
            colorBoxes.map((box) => (
                <ColorBox key={box.key + ""} color={box.color} colorList={colors}/>
            ))
        }
    </div>
}