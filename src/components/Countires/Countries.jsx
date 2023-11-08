import { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./countries.css";
import { Table } from "react-bootstrap";
import { useSortableData } from "../../../customHooks/useSortableData";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  const { items, requestSort, sortConfig } = useSortableData(countries);

  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  return (
    <div>
      <h2 style={{color:"#222222"}}>Countries: {countries.length}</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr className="border-bottom">
            <th>#</th>
            <th>Country</th>
            <th>Region</th>
            <th>
              <button title="Click to sort" type="button" onClick={() => requestSort("capital")} className={getClassNamesFor('capital')}>
                Capital                 
              </button>
            </th>
            <th>
              <button title="Click to sort" type="button" onClick={() => requestSort("population")} className={getClassNamesFor('population')}>
                Population
                <br />
                (2023) 
              </button>
            </th>
            <th>
              <button title="Click to sort" type="button" onClick={() => requestSort("area")} className={getClassNamesFor('area')}>
                Land Area
                <br />
                (Km²) 
              </button>
            </th>
            <th>Flag</th>
          </tr>
        </thead>
        <tbody>
          {items.map((country, index) => (
            <Country key={index} country={country} number={index + 1} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Countries;
