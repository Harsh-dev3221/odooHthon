import  { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true); // True for login, False for signup

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Implement form submission logic here (replace with your backend calls)
    console.log('Submitted form data');
  };

  const toggleFormType = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="login-signup-container flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8 text-center">
        {isLogin ? 'Login' : 'Sign Up'}
      </h1>
      {isLogin ? <LoginForm onSubmit={handleFormSubmit} /> : <SignupForm onSubmit={handleFormSubmit} />}
      <p className="text-center mt-4">
        {isLogin ? "Don't have an account?" : 'Already have an account?'}
        <button onClick={toggleFormType} className="text-blue-500 hover:text-blue-700">
          {isLogin ? 'Sign Up' : 'Login'}
        </button>
      </p>
    </div>
  );
};

export default LoginSignup;
