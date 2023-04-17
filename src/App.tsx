import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Initial from './pages/Initial';
import Signup from './pages/Singup';
import Login from './pages/Login';
import Todo from './pages/Todo';
import GlobalStyles from './style/Global.styled';

function App() {
  const token = localStorage.getItem('token');
  console.log(token);
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={!token ? <Initial /> : <Navigate replace={true} to="/todo" />} />
        <Route path="/signin" element={!token ? <Login /> : <Navigate replace={true} to="/todo" />} />
        <Route path="/signup" element={!token ? <Signup /> : <Navigate replace={true} to="/todo" />} />
        <Route path="/todo" element={token ? <Todo /> : <Navigate replace={true} to="/signin" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
