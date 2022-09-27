import {useState} from 'react';
import ForgotPassword from './Pages/ForgotPassword';
import LoginPage from './Pages/LoginPage';

function App() {
  const [isForgotPassword, setIsForgotPassword] = useState()

  const toggle = () => setIsForgotPassword(!isForgotPassword)
  return (
    <>
      {isForgotPassword 
        ? <ForgotPassword toggle={toggle}/>
        :<LoginPage toggle={toggle}/>
      }
    </>
  );
}

export default App;
