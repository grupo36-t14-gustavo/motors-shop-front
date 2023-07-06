import styles from "./style.module.scss";
import FilterType from "../FilterTypeLi";
import { useContext, useState } from "react";
import { AnnouncementContext } from "@/contexts/AnnoucementContext";

const FilterList = () => {
    const [filters, setFilters] = useState({});
    const filtersValues = {
        brand: "",
        model: "",
        color: "",
        year: "",
        fuel: "",
    };
    const { cars } = useContext(AnnouncementContext);

    // useState(() => {}, [filters]);

    return (
        <ul className={styles.filter_list}>
            <li className={styles.filter}>
                <h3>Marca</h3>
                <label htmlFor="">General Motors</label>
                <input
                    name="modelo"
                    type="checkbox"
                    id=""
                    onChange={() => {
                        filtersValues.brand = "general motors";
                        setFilters({ ...filtersValues, filtersValues });
                    }}
                />
                <label htmlFor="">Fiat</label>
                <input
                    name="modelo"
                    type="checkbox"
                    id=""
                    onChange={() => {
                        filtersValues.brand = "fiat";
                        setFilters({ ...filtersValues, filtersValues });
                    }}
                />
                <label htmlFor="">Honda</label>
                <input
                    name="modelo"
                    type="checkbox"
                    id=""
                    onChange={() => {
                        filtersValues.brand = "honda";
                        setFilters({ ...filtersValues, filtersValues });
                    }}
                />
                <label htmlFor="">Porche</label>
                <input
                    name="modelo"
                    type="checkbox"
                    id=""
                    onChange={() => {
                        filtersValues.brand = "porche";
                        setFilters({ ...filtersValues, filtersValues });
                    }}
                />
                <label htmlFor="">Volkswagen</label>
                <input
                    name="modelo"
                    type="checkbox"
                    id=""
                    onChange={() => {
                        filtersValues.brand = "volksvagen";
                        setFilters({ ...filtersValues, filtersValues });
                    }}
                />
            </li>
            <li className={styles.filter}>
                <h3>Modelo</h3>
                <label htmlFor="">Civic</label>
                <input
                    name="modelo"
                    type="checkbox"
                    id=""
                    onChange={() => {
                        filtersValues.model = "civic";
                        setFilters({ ...filtersValues, filtersValues });
                    }}
                />
                <label htmlFor="">Corolla</label>
                <input
                    name="modelo"
                    type="checkbox"
                    id=""
                    onChange={() => {
                        filtersValues.model = "corolla";
                        setFilters({ ...filtersValues, filtersValues });
                    }}
                />
                <label htmlFor="">Cruze</label>
                <input
                    name="modelo"
                    type="checkbox"
                    id=""
                    onChange={() => {
                        filtersValues.model = "cruze";
                        setFilters({ ...filtersValues, filtersValues });
                    }}
                />
                <label htmlFor="">Fit</label>
                <input
                    name="modelo"
                    type="checkbox"
                    id=""
                    onChange={() => {
                        filtersValues.model = "fit";
                        setFilters({ ...filtersValues, filtersValues });
                    }}
                />
                <label htmlFor="">Gol</label>
                <input
                    name="modelo"
                    type="checkbox"
                    id=""
                    onChange={() => {
                        filtersValues.model = "gol";
                        setFilters({ ...filtersValues, filtersValues });
                    }}
                />
                <label htmlFor="">Ka</label>
                <input
                    name="modelo"
                    type="checkbox"
                    id=""
                    onChange={() => {
                        filtersValues.model = "ka";
                        setFilters({ ...filtersValues, filtersValues });
                    }}
                />
                <label htmlFor="">Ônix</label>
                <input
                    name="modelo"
                    type="checkbox"
                    id=""
                    onChange={() => {
                        filtersValues.model = "ônix";
                        setFilters({ ...filtersValues, filtersValues });
                    }}
                />
                <label htmlFor="">Porche 718</label>
                <input
                    name="modelo"
                    type="checkbox"
                    id=""
                    onChange={() => {
                        filtersValues.model = "proche 718";
                        setFilters({ ...filtersValues, filtersValues });
                    }}
                />
            </li>
            <li className={styles.filter}>
                <h3>Cor</h3>
                <label htmlFor="">Azul</label>
                <input
                    name="modelo"
                    type="checkbox"
                    id=""
                    onChange={() => {
                        filtersValues.color = "azul";
                        setFilters({ ...filtersValues, filtersValues });
                    }}
                />
                <label htmlFor="">Branca</label>
                <input
                    name="modelo"
                    type="checkbox"
                    id=""
                    onChange={() => {
                        filtersValues.color = "branco";
                        setFilters({ ...filtersValues, filtersValues });
                    }}
                />
                <label htmlFor="">Cinza</label>
                <input
                    name="modelo"
                    type="checkbox"
                    id=""
                    onChange={() => {
                        filtersValues.color = "cinza";
                        setFilters({ ...filtersValues, filtersValues });
                    }}
                />
                <label htmlFor="">Prata</label>
                <input
                    name="modelo"
                    type="checkbox"
                    id=""
                    onChange={() => {
                        filtersValues.color = "prata";
                        setFilters({ ...filtersValues, filtersValues });
                    }}
                />
                <label htmlFor="">Preta</label>
                <input
                    name="modelo"
                    type="checkbox"
                    id=""
                    onChange={() => {
                        filtersValues.color = "preto";
                        setFilters({ ...filtersValues, filtersValues });
                    }}
                />
                <label htmlFor="">Verde</label>
                <input
                    name="modelo"
                    type="checkbox"
                    id=""
                    onChange={() => {
                        filtersValues.color = "verde";
                        setFilters({ ...filtersValues, filtersValues });
                    }}
                />
            </li>
            <li className={styles.filter}>
                <h3>Ano</h3>
                <label htmlFor="">2022</label>
                <input
                    name="modelo"
                    type="checkbox"
                    id=""
                    onChange={() => {
                        filtersValues.year = "2022";
                        setFilters({ ...filtersValues, filtersValues });
                        console.log(filtersValues);
                    }}
                />
                <label htmlFor="">2021</label>
                <input
                    name="modelo"
                    type="checkbox"
                    id=""
                    onChange={() => {
                        filtersValues.year = "2021";
                        setFilters({ ...filtersValues, filtersValues });
                    }}
                />
                <label htmlFor="">2018</label>
                <input
                    name="modelo"
                    type="checkbox"
                    id=""
                    onChange={() => {
                        filtersValues.year = "2018";
                        setFilters({ ...filtersValues, filtersValues });
                    }}
                />
                <label htmlFor="">2015</label>
                <input
                    name="modelo"
                    type="checkbox"
                    id=""
                    onChange={() => {
                        filtersValues.year = "2015";
                        setFilters({ ...filtersValues, filtersValues });
                    }}
                />
                <label htmlFor="">2013</label>
                <input
                    name="modelo"
                    type="checkbox"
                    id=""
                    onChange={() => {
                        filtersValues.year = "2013";
                        setFilters({ ...filtersValues, filtersValues });
                    }}
                />
                <label htmlFor="">2012</label>
                <input
                    name="modelo"
                    type="checkbox"
                    id=""
                    onChange={() => {
                        filtersValues.year = "2012";
                        setFilters({ ...filtersValues, filtersValues });
                    }}
                />
                <label htmlFor="">2010</label>
                <input
                    name="modelo"
                    type="checkbox"
                    id=""
                    onChange={() => {
                        filtersValues.brand = "2010";
                        setFilters({ ...filtersValues, filtersValues });
                    }}
                />
            </li>
            <li className={styles.filter}>
                <h3>Combustível</h3>
                <label htmlFor="">Diesel</label>
                <input
                    name="modelo"
                    type="checkbox"
                    id=""
                    onChange={() => {
                        filtersValues.fuel = "diesel";
                        setFilters({ ...filtersValues, filtersValues });
                    }}
                />
                <label htmlFor="">Etanol</label>
                <input
                    name="modelo"
                    type="checkbox"
                    id=""
                    onChange={() => {
                        filtersValues.fuel = "etanol";
                        setFilters({ ...filtersValues, filtersValues });
                    }}
                />
                <label htmlFor="">Gasolina</label>
                <input
                    name="modelo"
                    type="checkbox"
                    id=""
                    onChange={() => {
                        filtersValues.fuel = "gasolina";
                        setFilters({ ...filtersValues, filtersValues });
                    }}
                />
                <label htmlFor="">Flex</label>
                <input
                    name="modelo"
                    type="checkbox"
                    id=""
                    onChange={() => {
                        filtersValues.fuel = "flex";
                        setFilters({ ...filtersValues, filtersValues });
                    }}
                />
            </li>
        </ul>
    );
};

export default FilterList;
