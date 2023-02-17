import { useState } from 'react';

const ShortCircuitLogin = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    // normally connect to db or api
    // get credentials and set state values
    setUser({ name: 'taco truck' });
  };
  const logout = () => {
    // normally connect to db or api
    // get credentials and set state values
    setUser(null);
  };
  return (
    <div>
      {user ? (
        <div>
          <h4>hello there, {user.name}</h4>
          <button className='btn' onClick={logout}>
            logout
          </button>
        </div>
      ) : (
        <div>
          <h4>please login</h4>
          <button className='btn' onClick={login}>
            login
          </button>
        </div>
      )}
    </div>
  );
};

export default ShortCircuitLogin;
