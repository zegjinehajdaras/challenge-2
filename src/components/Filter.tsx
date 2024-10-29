import { CardData } from "../type/type";

interface FilterSectonProps {
    allData: CardData[];
  filteredData: CardData[];
  setFilteredData: React.Dispatch<React.SetStateAction<CardData[]>>;
}

const FilterSecton: React.FC<FilterSectonProps> = ({
    allData,
  setFilteredData,
}) => {
  const totalBikes = allData.length;

  
  const getCountByGender = (gender: string) =>
    allData.filter((bike) => bike.gender === gender).length;

  const getCountByBrand = (brand: string) =>
    allData.filter((bike) => bike.brand === brand).length;

  const uniqueBrands = [...new Set(allData.map((bike) => bike.brand))];

  const handleFilter = (filterType: string, value?: string) => {
    if (filterType === "all") {
      setFilteredData(allData);
    } else if (filterType === "gender" && value) {
      setFilteredData(allData.filter((bike) => bike.gender === value));
    } else if (filterType === "brand" && value) {
      setFilteredData(allData.filter((bike) => bike.brand === value));
    }
  };

  return (
    <div className="filter-section">
      <h2 className="fw-bold">Bikes </h2>
      <h4>Filter By :</h4>
      <hr />
      <ul className="list-group">
        <li role="button" className=" pe-auto list-group-item d-flex justify-content-between align-items-center" onClick={() => handleFilter("all")}>
            Show all
          <span className="badge text-bg-primary rounded-pill">{totalBikes}</span>
        </li>
        <hr />
        <li role="button"  className="list-group-item d-flex justify-content-between align-items-center" onClick={() => handleFilter("gender", "MALE")}>
          Male
          <span className="badge text-bg-primary rounded-pill"> {getCountByGender("MALE")}</span>
        </li>
        <li role="button"  className="list-group-item d-flex justify-content-between align-items-center" onClick={() => handleFilter("gender", "FEMALE")}>
          Female 
           <span className="badge text-bg-primary rounded-pill">{getCountByGender("FEMALE")}</span>
        </li>
        <hr />
        <h4>Brand</h4>
        {uniqueBrands.map((brand) => (
          <li role="button"  className="list-group-item d-flex justify-content-between align-items-center" key={brand} onClick={() => handleFilter("brand", brand)}>
            {brand} 
            <span className="badge text-bg-primary rounded-pill">{getCountByBrand(brand)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterSecton;