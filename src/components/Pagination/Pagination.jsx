import styles from "./styles.module.css"
export default function Pagination({ totalPages, handlePageClick, handlePrevPage, handleNextPage, currentPage }) {
    return (
        <div className={styles.pagination}>
            <button disabled={currentPage <= 1} onClick={handlePrevPage} className={styles.arrow}>{'<'}</button>
            <div className={styles.list}>
                {[...Array(totalPages)].map((_, index) => {
                    return <button onClick={() => handlePageClick(index + 1)} key={index} className={styles.pageNumber} disabled={index + 1 === currentPage}>{index + 1}</button>
                })}
            </div>
            <button disabled={currentPage >= totalPages} onClick={handleNextPage} className={styles.arrow}>{'>'}</button>
        </div>
    )
}
