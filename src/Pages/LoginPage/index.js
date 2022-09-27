import { useState } from 'react';
import img from '../../Assets/images/Login-illustration.png';
import { BiUser, BiLockAlt } from 'react-icons/bi';

const LoginPage = ({ toggle }) => {
const [user, setUser] = useState({ email: '' , password: '' });

const changeHandler = (e) => {

  // to be validated
  setUser({
    ...user,
    [e.target.id] : e.target.value
  });
};

const submitHandler = (e) => {
  // to be validated
  e.preventDefault();
  alert(`Welcome, ${user.email}`);
};

  return ( 
    <div className='login-wrapper'>
      <form onSubmit={submitHandler}>
        <img src={img} alt="login ilistration"/>
        <h1>Welcome back!</h1>
        <div className='input-wrapper'>
          <input placeholder="example@email.com" className='input' id='email' value={user.email} onChange={changeHandler}/>
          <BiUser/>
        </div>
        <div className='input-wrapper'>
          <input placeholder="password" id='password' className='input' type="password" value={user.password}  onChange={changeHandler}/>
          <BiLockAlt/>
        </div>
        <p className='forgotten-password' onClick={toggle}>Forgot Password?</p>
        <button className='btn primary'>LOG IN</button>
        <p className='connect-social-media'>Or connect with social</p>
        <div className='btn-wrapper'>
          <button type='button' className='btn secondary'>Facebok</button>
          <button type='button' className='btn secondary google'>Google</button>
        </div>
      </form>
    </div>
   );
}
 
export default LoginPage;