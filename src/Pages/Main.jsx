import '../static/Main.css'


function Main(){
    const styles = {
        h1: {
            fontFamily: 'Star Jedi, Arial',
            fontSize: "70px",
            color: 'yellow',
            textAlign: "center"
        }
    }
    return (
        <h1 style={styles.h1}>Star Wars Info</h1>
    )
    }

export default Main;