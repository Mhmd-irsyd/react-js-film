import { Card, Container, Row, Col, Image } from "react-bootstrap"
import duneImage from "../assets/images/trending/dune.jpg"
import everythingImage from "../assets/images/trending/everything.jpg"
import infiniteImage from "../assets/images/trending/infinite.jpg"
import jokerImage from "../assets/images/trending/joker.jpg"
import lightyearImage from "../assets/images/trending/lightyear.jpg"
import morbiusImage from "../assets/images/trending/morbius.jpg"

const Trending = () => {
    return(
        <div>
            <Container>
                <br/>
                <h1 className="text-white"> TRENDING MOVIES</h1>
                <br/>
                <Row>
                    <Col md={4} className="movieWrapper">
                    <Card className="movieImage">                  
      <Image src= {duneImage} alt="Dune Movies" className="images"/> 
      <div className="bg-dark">
      <div className="p-2 m-1 text-white"> 
        <Card.Title className="text-center">Dune (2021)</Card.Title>
        <Card.Text className="text-left">
          Action, Adventure, Drama, Scien Fiction,Bluray Canada, USA .
        </Card.Text>
        <Card.Text className="text-left">Last updated 5 mins ago</Card.Text>
         </div> 
          </div>
    </Card>
               </Col>
               <Col md={4} className="movieWrapper">
                    <Card className="movieImage">                  
      <Image src= {everythingImage} alt="Dune Movies" className="images"/> 
      <div className="bg-dark">
      <div className="p-2 m-1 text-white"> 
        <Card.Title className="text-center">Everything Everywhere All At Once </Card.Title>
        <Card.Text className="text-left">
          Actiion, Adventure, Comedy, Science Fiction,WEBDL, USA.
        </Card.Text>
        <Card.Text className="text-left">Last updated 7 mins ago</Card.Text>
         </div> 
          </div>
    </Card>
               </Col>
               <Col md={4} className="movieWrapper">
                    <Card className="movieImage">                  
      <Image src= {infiniteImage} alt="Dune Movies" className="images"/> 
      <div className="bg-dark">
      <div className="p-2 m-1 text-white"> 
        <Card.Title className="text-center">Infinite Storm</Card.Title>
        <Card.Text className="text-left">
          Drama,Adventure,Action, Thriller, Australia, USA .
        </Card.Text>
        <Card.Text className="text-left">Last updated 9 mins ago</Card.Text>
         </div> 
          </div>
    </Card>
               </Col>
               <Col md={4} className="movieWrapper" id="trending">
                    <Card className="movieImage">                  
      <Image src= {jokerImage} alt="Dune Movies" className="images"/> 
      <div className="bg-dark">
      <div className="p-2 m-1 text-white"> 
        <Card.Title className="text-center">Joker (2019)</Card.Title>
        <Card.Text className="text-left">
          Crime,,Tragedy,Character Study, Drama, Thriller,USA.
        </Card.Text>
        <Card.Text className="text-left">Last updated 4 mins ago</Card.Text>
         </div> 
          </div>
    </Card>
               </Col>
               <Col md={4} className="movieWrapper">
                    <Card className="movieImage">                  
      <Image src= {lightyearImage} alt="Dune Movies" className="images"/> 
      <div className="bg-dark">
      <div className="p-2 m-1 text-white"> 
        <Card.Title className="text-center">Lightyear (2022)</Card.Title>
        <Card.Text className="text-left">
          Action, Adventure, Drama, Family, Science Fiction, USA .
        </Card.Text>
        <Card.Text className="text-left">Last updated 2 mins ago</Card.Text>
         </div> 
          </div>
    </Card>
               </Col>
               <Col md={4} className="movieWrapper">
                    <Card className="movieImage">                  
      <Image src= {morbiusImage} alt="Dune Movies" className="images"/> 
      <div className="bg-dark">
      <div className="p-2 m-1 text-white"> 
        <Card.Title className="text-center">Morbius (2022)</Card.Title>
        <Card.Text className="text-left">
          Action, Fantasy, Adventure, Science Fiction, USA.
        </Card.Text>
        <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
         </div> 
          </div>
    </Card>
               </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Trending 