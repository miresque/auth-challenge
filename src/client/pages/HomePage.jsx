import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <>      
      <h2>
        <Link to={"/user/register"}>Register</Link>  
      </h2>
      <h2>
        <Link to={"/user/login"}>Login</Link>  
      </h2>
    </>
  );
}

export default HomePage;