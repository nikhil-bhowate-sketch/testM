import './Signin.css';
import logo from '../Pages/Assets/properlogo.png'
function Signin() {
  return (
    <>
      <header className='login_header'>
        <img className='login_logo' src={logo} alt='no' />
      </header>
      <div className='sing_form'>
        <form >
          <section className='login_container'>
            <h1 className='container_header'>sign in</h1>
            <p className='sign_para'>Sign in to your Self Service Portal</p>
            <div className='sign_container'>
              <input className='sign_input' placeholder='Username' />
              <input className='sign_input' placeholder='Password' />
              <button className='sign_button'>LOG IN</button>
            </div>
          </section>
        </form>
      </div>
    </>
  );
}

export default Signin;
