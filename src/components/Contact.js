import insta from "../imgs/insta.png"
import facebook from "../imgs/facebook.png"

function Contact(){
    return(
        <div>
            <h2>Contact</h2>
            <p>Follow us on: <br></br></p>
            <a href="https://www.instagram.com/angelosgardencentre/?hl=en">
                <img src={insta} alt="Instagram"/>
            </a>
            <a href="https://www.facebook.com/angelosgardencentre/">
                <img src={facebook} alt="FaceBook"/>
            </a>

            
        </div>

    )
}

export default Contact;