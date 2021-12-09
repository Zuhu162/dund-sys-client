import React from "react";

export default function Pagination(props) {
  let pageNums = [];

  for (let i = 1; i <= Math.ceil(props.totalItems / props.pageSize); i++) {
    pageNums.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNums.map((p) => (
          <li
            key={p}
            onClick={() => props.onPageChange(p)}
            className={
              props.currentPage === p ? "page-item active" : "page-item"
            }
          >
            <a className="page-link">{p}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = pageNumber * pageSize;
  const pageContent = [];

  for (let i = startIndex; i < endIndex; i++) {
    items[i] && pageContent.push(items[i]);
  }
  return pageContent;
}
