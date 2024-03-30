import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import {Card, Button , Form} from 'react-bootstrap'
import "./signUp.css"

function SignUp() {
    const onChange = () => {

    };
   return (
    
   <Card className='m-5 p-5'>
      <Form>
           <h2 className="text-center">Create an Account </h2>
           <Form.Group className='mb-2'>
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder='Name'/>
           </Form.Group>

           <Form.Group className='mb-2'>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder='Email'/>
           </Form.Group>

           <Form.Group className='mb-2'>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password"/>
           </Form.Group>

           <Form.Group className='mb-2'>
              <Form.Label>Repeat Password </Form.Label>
              <Form.Control type="password" placeholder="Repeat Password"/>
           </Form.Group>
           <Form.Group className="mb-3 mt-3">
              <Form.Check type="checkbox" label="I agree to all statements in Terms of service"/>
           </Form.Group>

           <ReCAPTCHA 
               sitekey="6LeMw3kpAAAAAN214XfbxLLk1unNH680udaSNSg3" 
               onChange={onChange}
           />

           <Button  varient="primary" type="submit" className="buttn">
            Sign up
           </Button>
           
           <p className='text-end mt-1 mb-1 '>
            Have already an account? <a href="/SignIn" className='ms-1'>SignIn</a>
            </p>









      </Form>
   </Card>
  );
}

export default SignUp;