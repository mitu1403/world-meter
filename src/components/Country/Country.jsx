import "./country.css"
const Country = ({country, number}) => {
  const {name, capital, region, population, area, flags} = country
  return ( 
    <tr>
      <td>{number}</td>   
      <td>{name?.common}</td>   
      <td>{region}</td>   
      <td>{capital}</td>   
      <td>{population}</td>   
      <td>{area}</td>    
      <td><img src={flags?.svg} alt="" /></td>   
    </tr>
  );
};

export default Country;