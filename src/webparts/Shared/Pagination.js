import { memo } from "react";

const Pagination = memo(({currentPage, totalPages, prevPage, nextPage}) => {
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <li className={currentPage > 1 ? "page-item" : "page-item disabled"}>
                    <button className="page-link" tabIndex="-1" onClick={prevPage}>
                        <span className="icon-prev-page-01 prev-page"/>
                    </button>
                </li>
                <li className="page-item page-number disabled">
                    <button className="page-link page-number">{currentPage} / {totalPages}</button>
                </li>

                <li className={currentPage !== totalPages ? "page-item" : "page-item disabled"}>
                    <button className="page-link" onClick={nextPage}>
                        <span className="icon-next-page next-page"/>
                    </button>
                </li>
            </ul>
        </nav>
    );
});

export default Pagination;
