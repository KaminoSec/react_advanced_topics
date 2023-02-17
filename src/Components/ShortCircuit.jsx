import { useState } from 'react';

const ShortCircuit = () => {
  //falsy
  const [text, setText] = useState('');
  //truthy
  const [name, setName] = useState('susan');
  const [user, setUser] = useState({ name: 'john' });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <h2 style={{ margin: '1rem 0' }}>Ternary Operator</h2>
      <button className='btn'>{isEditing ? 'edit' : 'add'}</button>
      {user ? (
        <div>
          <h4>you have successfully logged in {user.name}</h4>
        </div>
      ) : (
        <div>
          <h2>please login</h2>
        </div>
      )}
    </div>
  );
};

export default ShortCircuit;
