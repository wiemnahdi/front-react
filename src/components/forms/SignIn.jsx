// import React from "react";
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import ReCAPTCHA from "react-google-recaptcha";
// import "./form.css"
// function SignIn() {
//   const onChange = () => {
//
//   };
//     return (
//
// <div className="form-container">
//
// <Form className="form">
//
//
//   <div className="form-content">
//   <h2 className="text">WELCOME</h2>
//   <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
//         <Form.Label column sm={2}>
//           Email:
//         </Form.Label>
//         <Col sm={7}>
//           <Form.Control type="email" placeholder="Email" />
//         </Col>
//       </Form.Group>
//
//       <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
//         <Form.Label column sm={2}>
//           Password:
//         </Form.Label>
//         <Col sm={7}>
//           <Form.Control type="password" placeholder="Password" />
//         </Col>
//       </Form.Group>
//
//       <Form.Group as={Row} className="mb-5" controlId="formHorizontalCheck">
//         <Col sm={{ span: 10, offset: 2 }}>
//           <Form.Check label="Remember me" />
//           <a href='#' className="fp">Forgot password</a>
//
//         </Col>
//       </Form.Group>
//       <ReCAPTCHA
//                sitekey="6LeMw3kpAAAAAN214XfbxLLk1unNH680udaSNSg3"
//                onChange={onChange}
//            />
//
//       <Form.Group as={Row} className="mb-3">
//         <Col sm={{ span: 10, offset: 2 }}>
//
//           <Button type="submit" className="btn">Submit</Button>
//
//         </Col>
//       </Form.Group>
//   </div>
//
//     </Form>
// </div>
//
//   );
// }
//
//
//
//
//     export default SignIn;
import React from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';




import "./form.css";


function SignIn() {
    
   
   
   
    return (
        <div className="form-container">
            <Form className="form" >
                <h1 className="text">WELCOME</h1>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Email
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="email" placeholder="Email"/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                        Password
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="password" placeholder="Password"/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
                    <Col sm={{span: 10, offset: 2}}>
                        <Form.Check label="Remember me"/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Col sm={{span: 10, offset: 2}}>
                        <Button type="submit">soumettre</Button>
            
                    </Col>
                </Form.Group>
            </Form>
            
        </div>

    );
}

export default SignIn;

