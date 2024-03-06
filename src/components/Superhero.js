import { Card, Container, Row, Col, Image } from "react-bootstrap"
import antmanIMage from "../assets/images/superhero/antman.jpg"
import avengerImage from "../assets/images/superhero/avenger.jpg"
import batmanImage from "../assets/images/superhero/batman.jpg"
import robinhoodImage from "../assets/images/superhero/robinhood.jpg"
import spidermancoverImage from "../assets/images/superhero/spiderman-cover.jpg"
import supermanImage from "../assets/images/superhero/superman.jpg"
const Superhero = () => {
    return(
        <div>
            <Container>
                <br/>
                <h1 className="text-white"> SUPERHERO MOVIES</h1>
                <br/>
                <Row>
                    <Col md={4} className="movieWrapper">
                    <Card className="movieImage">                  
      <Image src= {antmanIMage} alt="Dune Movies" className="images"/> 
      <div className="bg-dark">
      <div className="p-2 m-1 text-white"> 
        <Card.Title className="text-center">ANTMAN</Card.Title>
        <Card.Text className="text-left">
          Action, Adventure, Comedy, science Fiction, Superhero, USA.
        </Card.Text>
        <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
         </div> 
          </div>
          </Card>
               </Col>
               <Col md={4} className="movieWrapper">
                    <Card className="movieImage">                  
      <Image src= {avengerImage} alt="Dune Movies" className="images"/> 
      <div className="bg-dark">
      <div className="p-2 m-1 text-white"> 
        <Card.Title className="text-center">Avenger Endgame (2019)</Card.Title>
        <Card.Text className="text-left">
          Adventure,Superhero, Actiion, Science Fiction, USA .
        </Card.Text>
        <Card.Text className="text-left">Last updated 7 mins ago</Card.Text>
         </div> 
          </div>
    </Card>
               </Col>
               <Col md={4} className="movieWrapper">
                    <Card className="movieImage">                  
      <Image src= {batmanImage} alt="Dune Movies" className="images"/> 
      <div className="bg-dark">
      <div className="p-2 m-1 text-white"> 
        <Card.Title className="text-center">The Dark Knight (2008)</Card.Title>
        <Card.Text className="text-left">
          Action, Crime, Drama, Thriller, United Kingdom, USA.
        </Card.Text>
        <Card.Text className="text-left">Last updated 1 mins ago</Card.Text>
         </div> 
          </div>
    </Card>
               </Col>
               <Col md={4} className="movieWrapper">
                    <Card className="movieImage">                  
      <Image src= {robinhoodImage} alt="Dune Movies" className="images"/> 
      <div className="bg-dark">
      <div className="p-2 m-1 text-white"> 
        <Card.Title className="text-center">ROBINHOOD</Card.Title>
        <Card.Text className="text-left">
          Action, Adventure, Drama, Thriller, Bluray, USA .
        </Card.Text>
        <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
         </div> 
          </div>
    </Card>
               </Col>
               <Col md={4} className="movieWrapper">
                    <Card className="movieImage">                  
      <Image src= {spidermancoverImage} alt="Dune Movies" className="images"/> 
      <div className="bg-dark">
      <div className="p-2 m-1 text-white"> 
        <Card.Title className="text-center">Spider-Man No Way Home</Card.Title>
        <Card.Text className="text-left">
          Action, Comedy, Science Fiction, Romance, Drama, Bluray, USA.
        </Card.Text>
        <Card.Text className="text-left">Last updated 10 mins ago</Card.Text>
         </div> 
          </div>
    </Card>
               </Col>
               <Col md={4} className="movieWrapper" id="superhero">
                    <Card className="movieImage">                  
      <Image src= {supermanImage} alt="Dune Movies" className="images"/> 
      <div className="bg-dark">
      <div className="p-2 m-1 text-white"> 
        <Card.Title className="text-center">Superman Return (2006)</Card.Title>
        <Card.Text className="text-left">
          Action, Adventure, Science Fiction, Bluray, USA.
        </Card.Text>
        <Card.Text className="text-left">Last updated 11 mins ago</Card.Text>
         </div> 
          </div>
    </Card>
               </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Superhero