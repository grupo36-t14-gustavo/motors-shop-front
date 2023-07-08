import styles from "./style.module.scss";
import globalFontStyles from "../../../styles/globalFonts.module.scss";
import { iCarAdListPagination } from "@/interfaces/carAds.interface";
import Button from "../Button";
import { Dispatch, MouseEvent, SetStateAction } from "react";
import { iReturnCarAd, listAllCarAds } from "@/services/api/CarAds";

const Pagination = ({
    pagination,
    setPagination,
    setCarAdList,
}: {
    pagination: iCarAdListPagination | undefined;
    setPagination: Dispatch<SetStateAction<iCarAdListPagination | undefined>>;
    setCarAdList: Dispatch<SetStateAction<iReturnCarAd[] | undefined>>;
}) => {
    const changeCarAdListPage = async (
        event: MouseEvent<HTMLButtonElement>
    ) => {
        const scrollPosition = 0;
        const pageUrl = event.currentTarget.value;

        const newCarAdList = await listAllCarAds(pageUrl);

        if (newCarAdList) {
            setCarAdList(newCarAdList.data);
            setPagination({
                previousPage: newCarAdList.prevPage,
                nextPage: newCarAdList.nextPage,
            });

            window.scrollTo(scrollPosition, scrollPosition);
        }
    };

    return (
        <div
            className={`${styles.pagination_container} ${globalFontStyles.heading_5_600}`}
        >
            {/* className={styles.pagination_container__colored} */}
            {pagination?.previousPage && (
                <Button
                    name="< Anterior"
                    handleClick={changeCarAdListPage}
                    value={pagination?.previousPage}
                />
            )}
            <div className={styles.pagination_container__quantity}>
                <span className={styles.quantity__grey_modify}>1</span> de{" "}
                <span>1</span>
            </div>

            {/* className={styles.pagination_container__colored} */}
            {pagination?.nextPage && (
                <Button
                    name="Seguinte >"
                    handleClick={changeCarAdListPage}
                    value={pagination?.nextPage}
                />
            )}
        </div>
    );
};

export default Pagination;
