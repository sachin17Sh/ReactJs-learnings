function Greeting() {

    let currHour = new Date();
    currHour = currHour.getHours();
    let greet = {};
    let stylecolor = {
        color:"pink"
    }
    if (currHour >= 1 && currHour < 12) {
        greet = "Good morning";
        stylecolor.color = "green";
    } else if (currHour >= 12 && currHour < 16) {
        greet = "Good Afternoon";
        stylecolor.color = "orange";
    } else if (currHour >= 16 && currHour <= 22) {
        greet = "Good Evening";
        stylecolor.color = "yellow";
    } else {
        greet = "Good Night";
        stylecolor.color = "black";
    }

    return (
        <div className="main">
            <h1>Hello Bro, <span style={stylecolor}>{greet}</span></h1>
        </div>
    );
}

export default Greeting;
