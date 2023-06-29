import styles from "./style.module.scss";
import FilterType from "../FilterTypeLi";

const FilterList = () => {
    return (
        <ul className={styles.filter_list}>
            <li className={styles.filter}>
                <h3>Marca</h3>
                <label htmlFor="">General Motors</label>
                <input name="modelo" type="checkbox" id="" />
                <label htmlFor="">Fiat</label>
                <input name="modelo" type="checkbox" id="" />
                <label htmlFor="">Honda</label>
                <input name="modelo" type="checkbox" id="" />
                <label htmlFor="">Porche</label>
                <input name="modelo" type="checkbox" id="" />
                <label htmlFor="">Volkswagen</label>
                <input name="modelo" type="checkbox" id="" />
            </li>
            <li className={styles.filter}>
                <h3>Modelo</h3>
                <label htmlFor="">Civic</label>
                <input name="modelo" type="checkbox" id="" />
                <label htmlFor="">Corolla</label>
                <input name="modelo" type="checkbox" id="" />
                <label htmlFor="">Cruze</label>
                <input name="modelo" type="checkbox" id="" />
                <label htmlFor="">Fit</label>
                <input name="modelo" type="checkbox" id="" />
                <label htmlFor="">Gol</label>
                <input name="modelo" type="checkbox" id="" />
                <label htmlFor="">Ka</label>
                <input name="modelo" type="checkbox" id="" />
                <label htmlFor="">Ônix</label>
                <input name="modelo" type="checkbox" id="" />
                <label htmlFor="">Porche 718</label>
                <input name="modelo" type="checkbox" id="" />
            </li>
            <li className={styles.filter}>
                <h3>Cor</h3>
                <label htmlFor="">Azul</label>
                <input name="modelo" type="checkbox" id="" />
                <label htmlFor="">Branca</label>
                <input name="modelo" type="checkbox" id="" />
                <label htmlFor="">Cinza</label>
                <input name="modelo" type="checkbox" id="" />
                <label htmlFor="">Prata</label>
                <input name="modelo" type="checkbox" id="" />
                <label htmlFor="">Preta</label>
                <input name="modelo" type="checkbox" id="" />
                <label htmlFor="">Verde</label>
                <input name="modelo" type="checkbox" id="" />
            </li>
            <li className={styles.filter}>
                <h3>Ano</h3>
                <label htmlFor="">2022</label>
                <input name="modelo" type="checkbox" id="" />
                <label htmlFor="">2021</label>
                <input name="modelo" type="checkbox" id="" />
                <label htmlFor="">2018</label>
                <input name="modelo" type="checkbox" id="" />
                <label htmlFor="">2015</label>
                <input name="modelo" type="checkbox" id="" />
                <label htmlFor="">2013</label>
                <input name="modelo" type="checkbox" id="" />
                <label htmlFor="">2012</label>
                <input name="modelo" type="checkbox" id="" />
                <label htmlFor="">2010</label>
                <input name="modelo" type="checkbox" id="" />
            </li>
            <li className={styles.filter}>
                <h3>Combustível</h3>
                <label htmlFor="">Diesel</label>
                <input name="modelo" type="checkbox" id="" />
                <label htmlFor="">Etanol</label>
                <input name="modelo" type="checkbox" id="" />
                <label htmlFor="">Gasolina</label>
                <input name="modelo" type="checkbox" id="" />
                <label htmlFor="">Flex</label>
                <input name="modelo" type="checkbox" id="" />
            </li>
        </ul>
    );
};

export default FilterList;
