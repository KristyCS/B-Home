// Import hooks from 'react'. Which hook is meant for causing side effects?
import { useEffect, useState } from "react";
// Import hooks from 'react-redux'
import { useSelector, useDispatch } from "react-redux";
import styles from "./homeBody.module.css";
// Import the thunk creator
import Dropdown from "react-dropdown";
import { getListings } from "../../store/listing";

const HomeBody = () => {
  // Declare variables from hooks
  const dispatch = useDispatch();
  const listings = useSelector((state) => Object.values(state.listing));
  const [regionOptions, setRegionOptions] = useState(false);
  const [region, setRegion] = useState("");
  const [start_date, setStart_date] = useState("");
  const [end_date, setEnd_date] = useState("");
  // Use a 'react' hook and cause a side effect

  
  useEffect(()=>{
    const regions = [];
    console.log(listings,"@@@@@@@@");
    for (const id in listings) {
      regions.push(listings[id].Location.city);
    }
    if (!regionOptions) {
      setRegionOptions(regions);
    }
    console.log(regionOptions,"#########")
  },[regionOptions,region, start_date,end_date]);
  
  useEffect(() => {
    dispatch(getListings());
  }, [dispatch]);
  
  return (
    <div className={styles.main}>
      
      <Dropdown
        options={regionOptions}
        onChange={(e) => {
          setRegion(e.target.value);
        }}
        value={region}
        placeholder="Select an region"
      />
    </div>
  );
};

export default HomeBody;
