import React from 'react';
import './App.css';

const App = () => {
  const users = [
    {
      firstName: 'Carlao',
      lastName: 'Andrade',
      avatarUrl: 'http://kodlamaker.com/wp-content/themes/eduma/images/image-404.jpg',
    },

    {
      firstName: 'Andrade',
      lastName: 'Drummond',
      avatarUrl: '',
    },

    {
      firstName: 'Ricky',
      lastName: 'Almeida',
      avatarUrl: '',
    },
  ];

  const displayAvatar = user => {
    if (user.avatarUrl) {
      return <img src={user.avatarUrl} width="300" height="300" />;
    }
    return (
      <img
        src="https://s3.amazonaws.com/owler-image/logo/ironhack_owler_20180828_221413_original.png"
        width="300"
        height="300"
      />
    );
  };

  const formatName = user => `${user.firstName} ${user.lastName}`;

  return (
    <div className="App">
      {users.map(user => (
        <div>
          <h1>Hello Ironhackers! {formatName(user)}</h1>
          {displayAvatar(user)}
        </div>
      ))}
    </div>
  );
};

export default App;
