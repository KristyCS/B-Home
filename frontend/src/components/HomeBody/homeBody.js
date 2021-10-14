import { useEffect, useState, useMemo } from "react";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import styles from "./HomeBody.module.css";
import { NavLink } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { getListings } from "../../store/listing";
import { useSearch } from "../../context/SearchListings";

const HomeBody = () => {
  const dispatch = useDispatch();
  const { start_date, end_date, region, setStartDate, setEndDate, setRegion } =
    useSearch();
  const history = useHistory();
  const listingsObj = useSelector((state) => state.listing);
  const [regionOptions, setRegionOptions] = useState(false);
  const regionSession = localStorage.getItem("region");
  const startDateSession = localStorage.getItem("start_date");
  const endDateSession = localStorage.getItem("end_date");

  const listings = useMemo(() => {
    return Object.values(listingsObj);
  }, [listingsObj]);

  useEffect(() => {
    dispatch(getListings());
  }, [dispatch]);

  useEffect(() => {
    const regions = [];
    for (const listing of listings) {
      const r = listing.Location.city;
      if (!regions.includes(r)) {
        regions.push(listing.Location.city);
      }
    }
    setRegionOptions(regions);
    setRegion(regionSession);
    setStartDate(new Date(startDateSession));
    setEndDate(new Date(endDateSession));
  }, [listings]);

  const searchHandler = (e) => {
    e.preventDefault();
    localStorage.setItem("region", region);
    localStorage.setItem("start_date", start_date);
    localStorage.setItem("end_date", end_date);
    history.push("/searchListings");
  };

  return (
    <>
      <div className={styles.main}>
        <div className={styles.search}>
          <Dropdown className={styles.selectRegion}
            options={regionOptions}
            onChange={(value) => {
              setRegion(value.value);
            }}
            value={region}
            placeholder="I want to live at"
          />
          <DatePicker
            selected={start_date}
            onChange={(date) => setStartDate(date)}
          />
          <DatePicker
            selected={end_date}
            onChange={(date) => setEndDate(date)}
          />
          <NavLink
            to="/listings"
            onClick={searchHandler}
            className={styles.active}
          >
            {" "}
            Search!{" "}
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default HomeBody;
