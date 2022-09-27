
import { useState } from 'react';
import img from '../../Assets/images/Forgot password illustration.png';
import { BiUser } from 'react-icons/bi';

const ForgotPassword = ({ toggle }) => {
  const [email, setEmeil] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`An email was sent to ${email}`);
  };

  return ( 
    <div className='login-wrapper'>
      <form onSubmit={submitHandler}>
        <img src={img} alt='forgot password icon'/>
        <h1>Forgot Password</h1>
        <div className='input-wrapper'>
          <input 
            placeholder="example@email.com" 
            id='resetPassword'
            type='email'
            className='input'
            onChange={(e)=> setEmeil(e.target.value)}
          />
          <BiUser/>
        </div>
        <button className="btn primary">Reset</button>
        <p className='under-text'>Already have an account? <span onClick={toggle}>Login here</span></p>
      </form>
    </div>
   );
}
 
export default ForgotPassword;