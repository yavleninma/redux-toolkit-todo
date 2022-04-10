import React from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import './App.css';
import { userSlice } from 'store/reducers/UserSlice';
import { useEffect } from 'react';
import { fetchUsers } from 'store/reducers/ActionCreators';
import TodoContainer from 'components/TodoContainer';

function App() {
  const dispatch = useAppDispatch();
  const { users, isLoading, error } = useAppSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className='App'>
      {/* {isLoading && <h1>Loading...</h1>} */}
      {/* {error && <h1>error</h1>} */}
      {/* {JSON.stringify(users, null, 2)} */}
      <TodoContainer />
    </div>
  );
}

export default App;
