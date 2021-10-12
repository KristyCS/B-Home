// Import hooks from 'react'. Which hook is meant for causing side effects?
import { useEffect, useState } from "react";
// Import hooks from 'react-redux'
import { useSelector, useDispatch } from "react-redux";
import styles from "./homeBody.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// Import the thunk creator
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { getListings } from "../../store/listing";

const HomeBody = () => {
  // Declare variables from hooks
  const dispatch = useDispatch();
  const listingsObj = useSelector((state) => state.listing);
  const [regionOptions, setRegionOptions] = useState(false);
  const [region, setRegion] = useState("");
  const [start_date, setStart_date] = useState(new Date());
  const [end_date, setEnd_date] = useState(new Date());
  const listings =Object.values(listingsObj);
  useEffect(() => {
    dispatch(getListings());
  }, [dispatch]);

  useEffect(() => {
    const regions = [];
    for (const listing of listings) {
      regions.push(listing.Location.city);
    }
    setRegionOptions(regions);
  }, [listings]);



  return (
    <>
      <div className={styles.main}>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
          {/* <Dropdown
            options={regionOptions}
            onChange={(e) => {
              setRegion(e.target.value);
            }}
            value={region}
            placeholder="I want to live at"
          /> */}
          <DatePicker
            selected={start_date}
            onChange={(date) => setStart_date(date)}
          />
          <DatePicker
            selected={end_date}
            onChange={(date) => setEnd_date(date)}
          />
          <navLink to="/listings" activeClassName="searching"> Search! </navLink>
        
      </div>
    </>
  );
};

export default HomeBody;
