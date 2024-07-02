import nonno from '../imgs/nonno.jpeg'
function About(){
    return(
        <div>
            <h2>About</h2>
                <p>Founded in 1974 by Angelo Ammendolia. 
                <br></br> Taken over by his 6 children and currently run by his two sons, Domenic and Carlo.
                <br></br> 
            </p>
            <img src={nonno} alt="Angelo and Elena"/>
        </div>
    )
}

export default About;