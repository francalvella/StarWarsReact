import '../static/Main.css'


function NotFound(){
    const styles = {
        h1: {
            fontFamily: 'Star Jedi, Arial',
            fontSize: "70px",
            color: 'yellow',
            textAlign: "center"
        }
    }
    return (
        <h1 style={styles.h1}>That is a galaxy too far away... Sorry we could not find it</h1>
    )
    }

export default NotFound;