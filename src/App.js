import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './App.css';
import delivery from "../src/images/Layer 156.png"
import freedelivery from "../src/images/Free Delivery.png"
import line from "../src/images/Line 11.png"
import returnp from "../src/images/Return Policy.png"
import login from "../src/images/Login.png"
import follow from "../src/images/Follow US.png"
import face from "../src/images/Vector.png"
import linkedin from "../src/images/Vector (1).png"
import twitter from "../src/images/Vector (2).png"
import insta from "../src/images/Group 6.png"
import shopkart from "../src/images/ShopKart.png"
import lineshop from "../src/images/Group 16 (1).png"
import wish from "../src/images/WISHLIST (0).png"
import bag from "../src/images/BAG (0).png"
import main from "../src/images/Group 15.png"
import seemore from "../src/images/see.png"
import lineg from "../src/images/Group 17.png"
import arrow2 from "../src/images/Arrow 2.png"
import arrow1 from "../src/images/Arrow 1.png"
import img1 from "../src/images/img1.png"
import img2 from "../src/images/img2.png"
import img3 from "../src/images/img3.png"
import arr from "../src/images/Group 19.png"
import bottom from "../src/images/18.png"
import btn from "../src/images/btn (2).png"
import rec from "../src/images/rec.png"
import Form from 'react-bootstrap/Form';
import line2 from "../src/images/Line 19.png"
import Card from 'react-bootstrap/Card';

function App() {
  return (
    <div >

      <div className="topbar">
        <div className="i1">
          <img src={delivery} />
          <img src={freedelivery} style={{ paddingLeft: "10px" }} />
          <img src={line} style={{ paddingLeft: "10px" }} />
          <img src={returnp} style={{ paddingLeft: "10px" }} />

          <div className="i2">
            <img src={login} />
            <img src={follow} style={{ paddingLeft: "20px" }} />
            <img src={face} style={{ paddingLeft: "10px" }} />
            <img src={linkedin} style={{ paddingLeft: "10px" }} />
            <img src={twitter} style={{ paddingLeft: "10px" }} />
            <img src={insta} style={{ paddingLeft: "10px" }} />
          </div>
        </div>
      </div>

      <div className='shopkart'>
        <img src={shopkart} alt='shopkart' />
        <div className="wish">
          <img src={wish} alt='line' />
          <img src={bag} alt='line' />
        </div>
        <img src={lineshop} alt='line' />

      </div>

      <Navbar bgColor="dark" data-bs-theme="dark" expand="lg" className='navbarr'>


        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link style={{ paddingRight: "5vw", paddingLeft: "3vw" }} href="#home">Home</Nav.Link>
            <Nav.Link style={{ paddingRight: "5vw" }} href="#link">About</Nav.Link>
            <NavDropdown style={{ paddingRight: "5vw" }} title="OUR PRODUCTS" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Electronics</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              jewelery
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">men's clothing</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              women's clothing
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link style={{ paddingRight: "5vw" }} href="#link">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Navbar>

      <div className='poster'>
        <img src={main} alt='main' className='imagemain' />
        <div className="font-container">
          <p className="fresh">
            Fresh
          </p>
          <p className="year">
            2022
          </p>
          <p className="look">
            Look
          </p>
        </div>
        <img src={seemore} alt='seemore' className='seemore' />
      </div>

      <div className="font-container">
        <p className="new">
          New products
        </p>
        <img src={lineg} alt='line' className='lineg' />
        <img src={arrow2} alt='line' className='arrow2' />
        <img src={arrow1} alt='line' className='arrow1' />

      </div>
      <div className='ff'>
        <Card style={{ width: '21rem', position: "absolute", left: "21vw", top: "57vw" }}className="card-customized">
          <Card.Img variant="top" src={img1} />
          <img className='arr' variant="top" src={arr} />
          <Card.Body>
            <Card.Title style={{ fontFamily: 'Syne' }}>FLORIDA JACKET</Card.Title>
            <Card.Text>
              Suffered alteration in some form, bysuffalterattion in some forme, byinjected humor, or randomised
            </Card.Text>
            <p className='price'>$100</p>
          </Card.Body>
        </Card>
        <Card style={{ width: '21rem', position: "absolute", left: "47vw", top: "57vw" }}>
          <Card.Img variant="top" src={img2} />
          <img className='arr' variant="top" src={arr} />
          <Card.Body>
            <Card.Title style={{ fontFamily: 'Syne' }}>FLORIDA JACKET</Card.Title>
            <Card.Text>
              Suffered alteration in some form, bysuffalterattion in some forme, byinjected humor, or randomised
            </Card.Text>
            <p className='price'>$100</p>
          </Card.Body>
        </Card>
        <Card style={{ width: '21rem', position: "absolute", left: "73vw", top: "57vw" }}>
          <Card.Img variant="top" src={img3} />
          <img className='arr' variant="top" src={arr} />
          <Card.Body>
            <Card.Title style={{ fontFamily: 'Syne' }}>FLORIDA JACKET</Card.Title>
            <Card.Text>
              Suffered alteration in some form, bysuffalterattion in some forme, byinjected humor, or randomised
            </Card.Text>
            <p className='price'>$100</p>
          </Card.Body>
        </Card>
      </div>

      <div className="sidebar">
        <a href="#home">Apparel</a>
        <a className="active" >Accessories</a>
        <a href="#contact">Best sellers</a>
        <a href="#about">50 % off</a>

      </div>

      <div>
        <img style={{ width: "99vw", height: 520, position: 'absolute', top: "230vh" }} src={bottom} alt="bottom" />
        <div className='te'>
          <h3 id='headi'>Newslleter</h3>
          <p id="parai">
            Get news about articles and updates
            in your inbox.</p>
            <p id="name">Name</p>
            <img style={{ width: "30vw", position: 'absolute', top: "245vh",left:"50vw" }} src={line2} alt="bottom" />
            <p id="email">Email</p>
            <img style={{ width: "30vw", position: 'absolute', top: "254vh",left:"50vw" }} src={line2} alt="bottom" />
            <p id="mess">

            Message</p>
            <img style={{ width: "30vw", position: 'absolute', top: "262vh" ,left:"50vw"}} src={line2} alt="bottom" />
          <div className='for'>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                
                <Form.Control type="text" placeholder="Name" />
                
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                
                <Form.Control type="text" placeholder="Message" />
              </Form.Group>
              
            </Form>
          </div>
          <h1 id='get'>GET</h1>
          <h1 id="in">IN TOUCH</h1>
          <img style={{ width: "10vw", position: 'absolute', top: "263vh", left: "80vw", zIndex: 1 }} src={btn} alt="bottom" />
        </div>
      </div>
      <div className='footer'>
        <p id='foot'>Copyright 2022 All Right Reserved By SG</p>
        <img style={{ width: "99vw", height: 50, position: 'absolute', top: "315vh", zIndex: 1 }} src={rec} alt="bottom" />
      </div>
    </div>
  );
}

export default App;
