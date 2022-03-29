

export default function Keyboard({greenWordValue, maybeLetters, incorrectLetter}){



    return(
        <div className="keyboard">
            <div className="row-one keyboard-row">
            
            {(() => {
                if(greenWordValue.has("q")){
                    return( <div className="green-square single-key">q</div>)
                }else if(maybeLetters.includes("q")){
                    return(<div className="yellow-square single-key">q</div>)
                }else if(incorrectLetter?.has("q")){
                    return (<div className="gray-square single-key">q</div>)
                }else{
                    return <div className="white-square single-key">q</div>
                }  
                })()
                }

            {(() => {
                if(greenWordValue.has("w")){
                    return( <div className="green-square single-key">w</div>)
                }else if(maybeLetters.includes("w")){
                    return(<div className="yellow-square single-key">w</div>)
                }else if(incorrectLetter?.has("w")){
                    return (<div className="gray-square single-key">w</div>)
                }else{
                    return <div className="white-square single-key">w</div>
                }  
                })()
                }

            {(() => {
                if(greenWordValue.has("e")){
                    return( <div className="green-square single-key">e</div>)
                }else if(maybeLetters.includes("e")){
                    return(<div className="yellow-square single-key">e</div>)
                }else if(incorrectLetter?.has("e")){
                    return (<div className="gray-square single-key">e</div>)
                }else{
                    return <div className="white-square single-key">e</div>
                }  
                })()
                }

            {(() => {
                if(greenWordValue.has("r")){
                    return( <div className="green-square single-key">r</div>)
                }else if(maybeLetters.includes("r")){
                    return(<div className="yellow-square single-key">r</div>)
                }else if(incorrectLetter?.has("r")){
                    return (<div className="gray-square single-key">r</div>)
                }else{
                    return <div className="white-square single-key">r</div>
                }  
                })()
                }

            {(() => {
                if(greenWordValue.has("t")){
                    return( <div className="green-square single-key">t</div>)
                }else if(maybeLetters.includes("t")){
                    return(<div className="yellow-square single-key">t</div>)
                }else if(incorrectLetter?.has("t")){
                    return (<div className="gray-square single-key">t</div>)
                }else{
                    return <div className="white-square single-key">t</div>
                }  
                })()
                }

            {(() => {
                if(greenWordValue.has("y")){
                    return( <div className="green-square single-key">y</div>)
                }else if(maybeLetters.includes("y")){
                    return(<div className="yellow-square single-key">y</div>)
                }else if(incorrectLetter?.has("y")){
                    return (<div className="gray-square single-key">y</div>)
                }else{
                    return <div className="white-square single-key">y</div>
                }  
                })()
                }

            {(() => {
                if(greenWordValue.has("u")){
                    return( <div className="green-square single-key">u</div>)
                }else if(maybeLetters.includes("u")){
                    return(<div className="yellow-square single-key">u</div>)
                }else if(incorrectLetter?.has("u")){
                    return (<div className="gray-square single-key">u</div>)
                }else{
                    return <div className="white-square single-key">u</div>
                }  
                })()
                }

            {(() => {
                if(greenWordValue.has("i")){
                    return( <div className="green-square single-key">i</div>)
                }else if(maybeLetters.includes("i")){
                    return(<div className="yellow-square single-key">i</div>)
                }else if(incorrectLetter?.has("i")){
                    return (<div className="gray-square single-key">i</div>)
                }else{
                    return <div className="white-square single-key">i</div>
                }  
                })()
                }

            {(() => {
                if(greenWordValue.has("o")){
                    return( <div className="green-square single-key">o</div>)
                }else if(maybeLetters.includes("o")){
                    return(<div className="yellow-square single-key">o</div>)
                }else if(incorrectLetter?.has("o")){
                    return (<div className="gray-square single-key">o</div>)
                }else{
                    return <div className="white-square single-key">o</div>
                }  
                })()
                }

            {(() => {
                if(greenWordValue.has("p")){
                    return( <div className="green-square single-key">p</div>)
                }else if(maybeLetters.includes("p")){
                    return(<div className="yellow-square single-key">p</div>)
                }else if(incorrectLetter?.has("p")){
                    return (<div className="gray-square single-key">p</div>)
                }else{
                    return <div className="white-square single-key">p</div>
                }  
                })()
                }


                {/* {maybeLetters.includes("q") ? <div className="yellow-square single-key">q</div> : <div className="single-key">q</div>}
                {maybeLetters.includes("w") ? <div className="yellow-square single-key">w</div> : <div className="single-key">w</div>}
                {maybeLetters.includes("e") ? <div className="yellow-square single-key">e</div> : <div className="single-key">e</div>}
                {maybeLetters.includes("r") ? <div className="yellow-square single-key">r</div> : <div className="single-key">r</div>}
                {maybeLetters.includes("t") ? <div className="yellow-square single-key">t</div> : <div className="single-key">t</div>}
                {maybeLetters.includes("y") ? <div className="yellow-square single-key">y</div> : <div className="single-key">y</div>}
                {maybeLetters.includes("u") ? <div className="yellow-square single-key">u</div> : <div className="single-key">u</div>}
                {maybeLetters.includes("i") ? <div className="yellow-square single-key">i</div> : <div className="single-key">i</div>}
                {maybeLetters.includes("o") ? <div className="yellow-square single-key">o</div> : <div className="single-key">o</div>}
                {maybeLetters.includes("p") ? <div className="yellow-square single-key">p</div> : <div className="single-key">p</div>} */}
            </div>

            <div className="row-two keyboard-row">

            {(() => {
                if(greenWordValue.has("a")){
                    return( <div className="green-square single-key">a</div>)
                }else if(maybeLetters.includes("a")){
                    return(<div className="yellow-square single-key">a</div>)
                }else if(incorrectLetter?.has("a")){
                    return (<div className="gray-square single-key">a</div>)
                }else{
                    return <div className="white-square single-key">a</div>
                }  
                })()
                }

            {(() => {
                if(greenWordValue.has("s")){
                    return( <div className="green-square single-key">s</div>)
                }else if(maybeLetters.includes("s")){
                    return(<div className="yellow-square single-key">s</div>)
                }else if(incorrectLetter?.has("s")){
                    return (<div className="gray-square single-key">s</div>)
                }else{
                    return <div className="white-square single-key">s</div>
                }  
                })()
                }

            {(() => {
                if(greenWordValue.has("d")){
                    return( <div className="green-square single-key">d</div>)
                }else if(maybeLetters.includes("d")){
                    return(<div className="yellow-square single-key">d</div>)
                }else if(incorrectLetter?.has("d")){
                    return (<div className="gray-square single-key">d</div>)
                }else{
                    return <div className="white-square single-key">d</div>
                }  
                })()
                }

            {(() => {
                if(greenWordValue.has("f")){
                    return( <div className="green-square single-key">f</div>)
                }else if(maybeLetters.includes("f")){
                    return(<div className="yellow-square single-key">f</div>)
                }else if(incorrectLetter?.has("f")){
                    return (<div className="gray-square single-key">f</div>)
                }else{
                    return <div className="white-square single-key">f</div>
                }  
                })()
                }

            {(() => {
                if(greenWordValue.has("g")){
                    return( <div className="green-square single-key">g</div>)
                }else if(maybeLetters.includes("g")){
                    return(<div className="yellow-square single-key">g</div>)
                }else if(incorrectLetter?.has("g")){
                    return (<div className="gray-square single-key">g</div>)
                }else{
                    return <div className="white-square single-key">g</div>
                }  
                })()
                }

            {(() => {
                if(greenWordValue.has("h")){
                    return( <div className="green-square single-key">h</div>)
                }else if(maybeLetters.includes("h")){
                    return(<div className="yellow-square single-key">h</div>)
                }else if(incorrectLetter?.has("h")){
                    return (<div className="gray-square single-key">h</div>)
                }else{
                    return <div className="white-square single-key">h</div>
                }  
                })()
                }

            {(() => {
                if(greenWordValue.has("j")){
                    return( <div className="green-square single-key">j</div>)
                }else if(maybeLetters.includes("j")){
                    return(<div className="yellow-square single-key">j</div>)
                }else if(incorrectLetter?.has("j")){
                    return (<div className="gray-square single-key">j</div>)
                }else{
                    return <div className="white-square single-key">j</div>
                }  
                })()
                }

            {(() => {
                if(greenWordValue.has("k")){
                    return( <div className="green-square single-key">k</div>)
                }else if(maybeLetters.includes("k")){
                    return(<div className="yellow-square single-key">k</div>)
                }else if(incorrectLetter?.has("k")){
                    return (<div className="gray-square single-key">k</div>)
                }else{
                    return <div className="white-square single-key">k</div>
                }  
                })()
                }

            {(() => {
                if(greenWordValue.has("l")){
                    return( <div className="green-square single-key">l</div>)
                }else if(maybeLetters.includes("l")){
                    return(<div className="yellow-square single-key">l</div>)
                }else if(incorrectLetter?.has("l")){
                    return (<div className="gray-square single-key">l</div>)
                }else{
                    return <div className="white-square single-key">l</div>
                }  
                })()
                }

                {/* {maybeLetters.includes("a") ? <div className="yellow-square single-key">a</div> : <div className="single-key">a</div>}
                {maybeLetters.includes("s") ? <div className="yellow-square single-key">s</div> : <div className="single-key">s</div>}
                {maybeLetters.includes("d") ? <div className="yellow-square single-key">d</div> : <div className="single-key">d</div>}
                {maybeLetters.includes("f") ? <div className="yellow-square single-key">f</div> : <div className="single-key">f</div>}
                {maybeLetters.includes("g") ? <div className="yellow-square single-key">g</div> : <div className="single-key">g</div>}
                {maybeLetters.includes("h") ? <div className="yellow-square single-key">h</div> : <div className="single-key">h</div>}
                {maybeLetters.includes("j") ? <div className="yellow-square single-key">j</div> : <div className="single-key">j</div>}
                {maybeLetters.includes("k") ? <div className="yellow-square single-key">k</div> : <div className="single-key">k</div>}
                {maybeLetters.includes("l") ? <div className="yellow-square single-key">l</div> : <div className="single-key">l</div>} */}
            </div>

            <div className="row-three keyboard-row">

            {(() => {
                if(greenWordValue.has("z")){
                    return( <div className="green-square single-key">z</div>)
                }else if(maybeLetters.includes("z")){
                    return(<div className="yellow-square single-key">z</div>)
                }else if(incorrectLetter?.has("z")){
                    return (<div className="gray-square single-key">z</div>)
                }else{
                    return <div className="white-square single-key">z</div>
                }  
                })()
                }

            {(() => {
                if(greenWordValue.has("x")){
                    return( <div className="green-square single-key">x</div>)
                }else if(maybeLetters.includes("x")){
                    return(<div className="yellow-square single-key">x</div>)
                }else if(incorrectLetter?.has("x")){
                    return (<div className="gray-square single-key">x</div>)
                }else{
                    return <div className="white-square single-key">x</div>
                }  
                })()
                }

            {(() => {
                if(greenWordValue.has("c")){
                    return( <div className="green-square single-key">c</div>)
                }else if(maybeLetters.includes("c")){
                    return(<div className="yellow-square single-key">c</div>)
                }else if(incorrectLetter?.has("c")){
                    return (<div className="gray-square single-key">c</div>)
                }else{
                    return <div className="white-square single-key">c</div>
                }  
                })()
                }

            {(() => {
                if(greenWordValue.has("v")){
                    return( <div className="green-square single-key">v</div>)
                }else if(maybeLetters.includes("v")){
                    return(<div className="yellow-square single-key">v</div>)
                }else if(incorrectLetter?.has("v")){
                    return (<div className="gray-square single-key">v</div>)
                }else{
                    return <div className="white-square single-key">v</div>
                }  
                })()
                }

            {(() => {
                if(greenWordValue.has("b")){
                    return( <div className="green-square single-key">b</div>)
                }else if(maybeLetters.includes("b")){
                    return(<div className="yellow-square single-key">b</div>)
                }else if(incorrectLetter?.has("b")){
                    return (<div className="gray-square single-key">b</div>)
                }else{
                    return <div className="white-square single-key">b</div>
                }  
                })()
                }

            {(() => {
                if(greenWordValue.has("n")){
                    return( <div className="green-square single-key">n</div>)
                }else if(maybeLetters.includes("n")){
                    return(<div className="yellow-square single-key">n</div>)
                }else if(incorrectLetter?.has("n")){
                    return (<div className="gray-square single-key">n</div>)
                }else{
                    return <div className="white-square single-key">n</div>
                }  
                })()
                }

            {(() => {
                if(greenWordValue.has("m")){
                    return( <div className="green-square single-key">m</div>)
                }else if(maybeLetters.includes("m")){
                    return(<div className="yellow-square single-key">m</div>)
                }else if(incorrectLetter?.has("m")){
                    return (<div className="gray-square single-key">m</div>)
                }else{
                    return <div className="white-square single-key">m</div>
                }  
                })()
                }


                {/* {maybeLetters.includes("z") ? <div className="yellow-square single-key">z</div> : <div className="single-key">z</div>}
                {maybeLetters.includes("x") ? <div className="yellow-square single-key">x</div> : <div className="single-key">x</div>}
                {maybeLetters.includes("c") ? <div className="yellow-square single-key">c</div> : <div className="single-key">c</div>}
                {maybeLetters.includes("v") ? <div className="yellow-square single-key">v</div> : <div className="single-key">v</div>}
                {maybeLetters.includes("b") ? <div className="yellow-square single-key">b</div> : <div className="single-key">b</div>}
                {maybeLetters.includes("n") ? <div className="yellow-square single-key">n</div> : <div className="single-key">n</div>}
                {maybeLetters.includes("m") ? <div className="yellow-square single-key">m</div> : <div className="single-key">m</div>} */}

            </div>
        </div>
    )
}