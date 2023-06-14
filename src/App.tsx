import './App.css';

function App() {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src="#" alt="avatar_my" />
      </header>
      <nav className='nav'>
        <div><a>Profile</a></div>
        <div><a>Messages</a></div>
        <div><a>News</a></div>
        <div><a>Music</a></div>
        <div><a>Settings</a></div>
      </nav>
      <div className='content'>
        <div>
          <img src="#" alt="background-color" />
        </div>
        <div>
          ava + description
        </div>
        <div>
          My posts
          <div>
            new post
          </div>
          <div>
          </div>
          <div>
            post 1
          </div>
          <div>
            post 2
          </div>
          <div>
            post 3
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
