

export default function Keyboard({maybeLetters}){



    return(
        <div className="keyboard">
            <div className="row-one keyboard-row">
                {maybeLetters.includes("q") ? <div className="yellow-square single-key">q</div> : <div className="single-key">q</div>}
                {maybeLetters.includes("w") ? <div className="yellow-square single-key">w</div> : <div className="single-key">w</div>}
                {maybeLetters.includes("e") ? <div className="yellow-square single-key">e</div> : <div className="single-key">e</div>}
                {maybeLetters.includes("r") ? <div className="yellow-square single-key">r</div> : <div className="single-key">r</div>}
                {maybeLetters.includes("t") ? <div className="yellow-square single-key">t</div> : <div className="single-key">t</div>}
                {maybeLetters.includes("y") ? <div className="yellow-square single-key">y</div> : <div className="single-key">y</div>}
                {maybeLetters.includes("u") ? <div className="yellow-square single-key">u</div> : <div className="single-key">u</div>}
                {maybeLetters.includes("i") ? <div className="yellow-square single-key">i</div> : <div className="single-key">i</div>}
                {maybeLetters.includes("o") ? <div className="yellow-square single-key">o</div> : <div className="single-key">o</div>}
                {maybeLetters.includes("p") ? <div className="yellow-square single-key">p</div> : <div className="single-key">p</div>}
            </div>

            <div className="row-two keyboard-row">
                {maybeLetters.includes("a") ? <div className="yellow-square single-key">a</div> : <div className="single-key">a</div>}
                {maybeLetters.includes("s") ? <div className="yellow-square single-key">s</div> : <div className="single-key">s</div>}
                {maybeLetters.includes("d") ? <div className="yellow-square single-key">d</div> : <div className="single-key">d</div>}
                {maybeLetters.includes("f") ? <div className="yellow-square single-key">f</div> : <div className="single-key">f</div>}
                {maybeLetters.includes("g") ? <div className="yellow-square single-key">g</div> : <div className="single-key">g</div>}
                {maybeLetters.includes("h") ? <div className="yellow-square single-key">h</div> : <div className="single-key">h</div>}
                {maybeLetters.includes("j") ? <div className="yellow-square single-key">j</div> : <div className="single-key">j</div>}
                {maybeLetters.includes("k") ? <div className="yellow-square single-key">k</div> : <div className="single-key">k</div>}
                {maybeLetters.includes("l") ? <div className="yellow-square single-key">l</div> : <div className="single-key">l</div>}
            </div>

            <div className="row-three keyboard-row">
                {maybeLetters.includes("z") ? <div className="yellow-square single-key">z</div> : <div className="single-key">z</div>}
                {maybeLetters.includes("x") ? <div className="yellow-square single-key">x</div> : <div className="single-key">x</div>}
                {maybeLetters.includes("c") ? <div className="yellow-square single-key">c</div> : <div className="single-key">c</div>}
                {maybeLetters.includes("v") ? <div className="yellow-square single-key">v</div> : <div className="single-key">v</div>}
                {maybeLetters.includes("b") ? <div className="yellow-square single-key">b</div> : <div className="single-key">b</div>}
                {maybeLetters.includes("n") ? <div className="yellow-square single-key">n</div> : <div className="single-key">n</div>}
                {maybeLetters.includes("m") ? <div className="yellow-square single-key">m</div> : <div className="single-key">m</div>}

            </div>
        </div>
    )
}