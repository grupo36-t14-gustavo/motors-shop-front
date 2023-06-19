import styles from ".style.module.scss";
import MinMaxFilter from "../MinMaxFilterInput";
import FilterOptions from "../FilterOptionsSelect";

const FilterType = () => {
    return (
        <li>
            <h2>Modelo</h2>
            {/* If filter has many options: */}
            <FilterOptions />

            {/* If filter has a min/max value */}
            <MinMaxFilter />
        </li>
    );
};

export default FilterType;
