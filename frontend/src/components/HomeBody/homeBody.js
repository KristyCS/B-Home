// Import hooks from 'react'. Which hook is meant for causing side effects?
import { useEffect } from 'react';
// Import hooks from 'react-redux'
import { useSelector, useDispatch } from 'react-redux';

// Import the thunk creator
import { getListings } from '../../store/listing';


const HomeBody = () => {
  // Declare variables from hooks
  const dispatch = useDispatch();
  const listings = useSelector(state => Object.values(state.listing))

  // Use a 'react' hook and cause a side effect
  useEffect(() => {
    dispatch(getListings());
  }, [dispatch]);

  return (
     <>
     </>
  )
};

export default HomeBody;
