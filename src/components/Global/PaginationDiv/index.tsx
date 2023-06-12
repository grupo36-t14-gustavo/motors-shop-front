import styles from ".style.module.scss";

const Pagination = () => {
    return (
        <div>
            {/* If previous page exists: */}
            <span>{"<"}Anterior</span>
            <div>
                <span>1</span> de <span>1</span>
            </div>
            {/* If next page exists */}
            <span>Seguinte{">"}</span>
        </div>
    );
};

export default Pagination;
