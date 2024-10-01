import React, { useState, useMemo } from "react";
import { useTable, usePagination } from "react-table";
import ReactPaginate from "react-paginate";
import * as XLSX from "xlsx";
import "./TableList.css";

const TableList = () => {
  const columns = useMemo(
    () => [
      {
        Header: "Date/Refer Id",
        accessor: "id",
      },
      {
        Header: "Car Type",
        accessor: "details",
      },
      {
        Header: "Option",
        accessor: "option",
      },
      {
        Header: "Status - PNR",
        accessor: "status",
      },
      {
        Header: "E Ticket",
        accessor: "ticket",
      },
      {
        Header: "Details",
        accessor: "edit",
      },
    ],
    []
  );

  const data = useMemo(
    () => [
      {
        id: "Date: 24 Aug,2024 - 16:17REF. ID: 22442414203",
        details:
          "Travel Date: 20 Sep,2024 - 10:30Journey: HYD → VTZ (oneway)Airline: IXPax: 1Adult",
        option:
          "Lorem ipsum dolor sit amet consectetur. Rhoncus dictum amet quis lacus condimentum lectus vestibulum.",
        status: "Conform-1251265",
        ticket: "#",
        edit: "View/Edit",
      },
      {
        id: "Date: 24 Aug,2024 - 16:17REF. ID: 22442414203",
        details:
          "Travel Date: 20 Sep,2024 - 10:30Journey: HYD → VTZ (oneway)Airline: IXPax: 1Adult",
        option:
          "Lorem ipsum dolor sit amet consectetur. Rhoncus dictum amet quis lacus condimentum lectus vestibulum.",
        status: "Cancellation Pending",
        ticket: "#",
        edit: "View/Edit",
      },
      {
        id: "Date: 24 Aug,2024 - 16:17REF. ID: 22442414203",
        details:
          "Travel Date: 20 Sep,2024 - 10:30Journey: HYD → VTZ (oneway)Airline: IXPax: 1Adult",
        option:
          "Lorem ipsum dolor sit amet consectetur. Rhoncus dictum amet quis lacus condimentum lectus vestibulum.",
        status: "Payment Pending",
        ticket: "#",
        edit: "View/Edit",
      },
      {
        id: "Date: 24 Aug,2024 - 16:17REF. ID: 22442414203",
        details:
          "Travel Date: 20 Sep,2024 - 10:30Journey: HYD → VTZ (oneway)Airline: IXPax: 1Adult",
        option:
          "Lorem ipsum dolor sit amet consectetur. Rhoncus dictum amet quis lacus condimentum lectus vestibulum.",
        status: "Cancelled",
        ticket: "#",
        edit: "View/Edit",
      },
      {
        id: "Date: 24 Aug,2024 - 16:17REF. ID: 22442414203",
        details:
          "Travel Date: 20 Sep,2024 - 10:30Journey: HYD → VTZ (oneway)Airline: IXPax: 1Adult",
        option:
          "Lorem ipsum dolor sit amet consectetur. Rhoncus dictum amet quis lacus condimentum lectus vestibulum.",
        status: "Cancelled",
        ticket: "#",
        edit: "View/Edit",
      },
      {
        id: "Date: 24 Aug,2024 - 16:17REF. ID: 22442414203",
        details:
          "Travel Date: 20 Sep,2024 - 10:30Journey: HYD → VTZ (oneway)Airline: IXPax: 1Adult",
        option:
          "Lorem ipsum dolor sit amet consectetur. Rhoncus dictum amet quis lacus condimentum lectus vestibulum.",
        status: "Cancelled",
        ticket: "#",
        edit: "View/Edit",
      },
      {
        id: "Date: 24 Aug,2024 - 16:17REF. ID: 22442414203",
        details:
          "Travel Date: 20 Sep,2024 - 10:30Journey: HYD → VTZ (oneway)Airline: IXPax: 1Adult",
        option:
          "Lorem ipsum dolor sit amet consectetur. Rhoncus dictum amet quis lacus condimentum lectus vestibulum.",
        status: "Cancelled",
        ticket: "#",
        edit: "View/Edit",
      },
      {
        id: "Date: 24 Aug,2024 - 16:17REF. ID: 22442414203",
        details:
          "Travel Date: 20 Sep,2024 - 10:30Journey: HYD → VTZ (oneway)Airline: IXPax: 1Adult",
        option:
          "Lorem ipsum dolor sit amet consectetur. Rhoncus dictum amet quis lacus condimentum lectus vestibulum.",
        status: "Cancelled",
        ticket: "#",
        edit: "View/Edit",
      },
      {
        id: "Date: 24 Aug,2024 - 16:17REF. ID: 22442414203",
        details:
          "Travel Date: 20 Sep,2024 - 10:30Journey: HYD → VTZ (oneway)Airline: IXPax: 1Adult",
        option:
          "Lorem ipsum dolor sit amet consectetur. Rhoncus dictum amet quis lacus condimentum lectus vestibulum.",
        status: "Cancelled",
        ticket: "#",
        edit: "View/Edit",
      },
      {
        id: "Date: 24 Aug,2024 - 16:17REF. ID: 22442414203",
        details:
          "Travel Date: 20 Sep,2024 - 10:30Journey: HYD → VTZ (oneway)Airline: IXPax: 1Adult",
        option:
          "Lorem ipsum dolor sit amet consectetur. Rhoncus dictum amet quis lacus condimentum lectus vestibulum.",
        status: "Cancelled",
        ticket: "#",
        edit: "View/Edit",
      },
      {
        id: "Date: 24 Aug,2024 - 16:17REF. ID: 22442414203",
        details:
          "Travel Date: 20 Sep,2024 - 10:30Journey: HYD → VTZ (oneway)Airline: IXPax: 1Adult",
        option:
          "Lorem ipsum dolor sit amet consectetur. Rhoncus dictum amet quis lacus condimentum lectus vestibulum.",
        status: "Cancelled",
        ticket: "#",
        edit: "View/Edit",
      },
      {
        id: "Date: 24 Aug,2024 - 16:17REF. ID: 22442414203",
        details:
          "Travel Date: 20 Sep,2024 - 10:30Journey: HYD → VTZ (oneway)Airline: IXPax: 1Adult",
        option:
          "Lorem ipsum dolor sit amet consectetur. Rhoncus dictum amet quis lacus condimentum lectus vestibulum.",
        status: "Cancelled",
        ticket: "#",
        edit: "View/Edit",
      },
      {
        id: "Date: 24 Aug,2024 - 16:17REF. ID: 22442414203",
        details:
          "Travel Date: 20 Sep,2024 - 10:30Journey: HYD → VTZ (oneway)Airline: IXPax: 1Adult",
        option:
          "Lorem ipsum dolor sit amet consectetur. Rhoncus dictum amet quis lacus condimentum lectus vestibulum.",
        status: "Cancelled",
        ticket: "#",
        edit: "View/Edit",
      },
      {
        id: "Date: 24 Aug,2024 - 16:17REF. ID: 22442414203",
        details:
          "Travel Date: 20 Sep,2024 - 10:30Journey: HYD → VTZ (oneway)Airline: IXPax: 1Adult",
        option:
          "Lorem ipsum dolor sit amet consectetur. Rhoncus dictum amet quis lacus condimentum lectus vestibulum.",
        status: "Cancelled",
        ticket: "#",
        edit: "View/Edit",
      },
      {
        id: "Date: 24 Aug,2024 - 16:17REF. ID: 22442414203",
        details:
          "Travel Date: 20 Sep,2024 - 10:30Journey: HYD → VTZ (oneway)Airline: IXPax: 1Adult",
        option:
          "Lorem ipsum dolor sit amet consectetur. Rhoncus dictum amet quis lacus condimentum lectus vestibulum.",
        status: "Cancelled",
        ticket: "#",
        edit: "View/Edit",
      },
      {
        id: "Date: 24 Aug,2024 - 16:17REF. ID: 22442414203",
        details:
          "Travel Date: 20 Sep,2024 - 10:30Journey: HYD → VTZ (oneway)Airline: IXPax: 1Adult",
        option:
          "Lorem ipsum dolor sit amet consectetur. Rhoncus dictum amet quis lacus condimentum lectus vestibulum.",
        status: "Cancelled",
        ticket: "#",
        edit: "View/Edit",
      },
      {
        id: "Date: 24 Aug,2024 - 16:17REF. ID: 22442414203",
        details:
          "Travel Date: 20 Sep,2024 - 10:30Journey: HYD → VTZ (oneway)Airline: IXPax: 1Adult",
        option:
          "Lorem ipsum dolor sit amet consectetur. Rhoncus dictum amet quis lacus condimentum lectus vestibulum.",
        status: "Cancelled",
        ticket: "#",
        edit: "View/Edit",
      },
      {
        id: "Date: 24 Aug,2024 - 16:17REF. ID: 22442414203",
        details:
          "Travel Date: 20 Sep,2024 - 10:30Journey: HYD → VTZ (oneway)Airline: IXPax: 1Adult",
        option:
          "Lorem ipsum dolor sit amet consectetur. Rhoncus dictum amet quis lacus condimentum lectus vestibulum.",
        status: "Cancelled",
        ticket: "#",
        edit: "View/Edit",
      },
      {
        id: "Date: 24 Aug,2024 - 16:17REF. ID: 22442414203",
        details:
          "Travel Date: 20 Sep,2024 - 10:30Journey: HYD → VTZ (oneway)Airline: IXPax: 1Adult",
        option:
          "Lorem ipsum dolor sit amet consectetur. Rhoncus dictum amet quis lacus condimentum lectus vestibulum.",
        status: "Cancelled",
        ticket: "#",
        edit: "View/Edit",
      },
      {
        id: "Date: 24 Aug,2024 - 16:17REF. ID: 22442414203",
        details:
          "Travel Date: 20 Sep,2024 - 10:30Journey: HYD → VTZ (oneway)Airline: IXPax: 1Adult",
        option:
          "Lorem ipsum dolor sit amet consectetur. Rhoncus dictum amet quis lacus condimentum lectus vestibulum.",
        status: "Cancelled",
        ticket: "#",
        edit: "View/Edit",
      },
      {
        id: "Date: 24 Aug,2024 - 16:17REF. ID: 22442414203",
        details:
          "Travel Date: 20 Sep,2024 - 10:30Journey: HYD → VTZ (oneway)Airline: IXPax: 1Adult",
        option:
          "Lorem ipsum dolor sit amet consectetur. Rhoncus dictum amet quis lacus condimentum lectus vestibulum.",
        status: "Cancelled",
        ticket: "#",
        edit: "View/Edit",
      },
      {
        id: "Date: 24 Aug,2024 - 16:17REF. ID: 22442414203",
        details:
          "Travel Date: 20 Sep,2024 - 10:30Journey: HYD → VTZ (oneway)Airline: IXPax: 1Adult",
        option:
          "Lorem ipsum dolor sit amet consectetur. Rhoncus dictum amet quis lacus condimentum lectus vestibulum.",
        status: "Cancelled",
        ticket: "#",
        edit: "View/Edit",
      },
      {
        id: "Date: 24 Aug,2024 - 16:17REF. ID: 22442414203",
        details:
          "Travel Date: 20 Sep,2024 - 10:30Journey: HYD → VTZ (oneway)Airline: IXPax: 1Adult",
        option:
          "Lorem ipsum dolor sit amet consectetur. Rhoncus dictum amet quis lacus condimentum lectus vestibulum.",
        status: "Cancelled",
        ticket: "#",
        edit: "View/Edit",
      },
      {
        id: "Date: 24 Aug,2024 - 16:17REF. ID: 22442414203",
        details:
          "Travel Date: 20 Sep,2024 - 10:30Journey: HYD → VTZ (oneway)Airline: IXPax: 1Adult",
        option:
          "Lorem ipsum dolor sit amet consectetur. Rhoncus dictum amet quis lacus condimentum lectus vestibulum.",
        status: "Cancelled",
        ticket: "#",
        edit: "View/Edit",
      },
      {
        id: "Date: 24 Aug,2024 - 16:17REF. ID: 22442414203",
        details:
          "Travel Date: 20 Sep,2024 - 10:30Journey: HYD → VTZ (oneway)Airline: IXPax: 1Adult",
        option:
          "Lorem ipsum dolor sit amet consectetur. Rhoncus dictum amet quis lacus condimentum lectus vestibulum.",
        status: "Cancelled",
        ticket: "#",
        edit: "View/Edit",
      },
      {
        id: "Date: 24 Aug,2024 - 16:17REF. ID: 22442414203",
        details:
          "Travel Date: 20 Sep,2024 - 10:30Journey: HYD → VTZ (oneway)Airline: IXPax: 1Adult",
        option:
          "Lorem ipsum dolor sit amet consectetur. Rhoncus dictum amet quis lacus condimentum lectus vestibulum.",
        status: "Cancelled",
        ticket: "#",
        edit: "View/Edit",
      },
      {
        id: "Date: 24 Aug,2024 - 16:17REF. ID: 22442414203",
        details:
          "Travel Date: 20 Sep,2024 - 10:30Journey: HYD → VTZ (oneway)Airline: IXPax: 1Adult",
        option:
          "Lorem ipsum dolor sit amet consectetur. Rhoncus dictum amet quis lacus condimentum lectus vestibulum.",
        status: "Cancelled",
        ticket: "#",
        edit: "View/Edit",
      },
      {
        id: "Date: 24 Aug,2024 - 16:17REF. ID: 22442414203",
        details:
          "Travel Date: 20 Sep,2024 - 10:30Journey: HYD → VTZ (oneway)Airline: IXPax: 1Adult",
        option:
          "Lorem ipsum dolor sit amet consectetur. Rhoncus dictum amet quis lacus condimentum lectus vestibulum.",
        status: "Cancelled",
        ticket: "#",
        edit: "View/Edit",
      },
      {
        id: "Date: 24 Aug,2024 - 16:17REF. ID: 22442414203",
        details:
          "Travel Date: 20 Sep,2024 - 10:30Journey: HYD → VTZ (oneway)Airline: IXPax: 1Adult",
        option:
          "Lorem ipsum dolor sit amet consectetur. Rhoncus dictum amet quis lacus condimentum lectus vestibulum.",
        status: "Cancelled",
        ticket: "#",
        edit: "View/Edit",
      },
      {
        id: "Date: 24 Aug,2024 - 16:17REF. ID: 22442414203",
        details:
          "Travel Date: 20 Sep,2024 - 10:30Journey: HYD → VTZ (oneway)Airline: IXPax: 1Adult",
        option:
          "Lorem ipsum dolor sit amet consectetur. Rhoncus dictum amet quis lacus condimentum lectus vestibulum.",
        status: "Cancelled",
        ticket: "#",
        edit: "View/Edit",
      },
      {
        id: "Date: 24 Aug,2024 - 16:17REF. ID: 22442414203",
        details:
          "Travel Date: 20 Sep,2024 - 10:30Journey: HYD → VTZ (oneway)Airline: IXPax: 1Adult",
        option:
          "Lorem ipsum dolor sit amet consectetur. Rhoncus dictum amet quis lacus condimentum lectus vestibulum.",
        status: "Cancelled",
        ticket: "#",
        edit: "View/Edit",
      },
      {
        id: "Date: 24 Aug,2024 - 16:17REF. ID: 22442414203",
        details:
          "Travel Date: 20 Sep,2024 - 10:30Journey: HYD → VTZ (oneway)Airline: IXPax: 1Adult",
        option:
          "Lorem ipsum dolor sit amet consectetur. Rhoncus dictum amet quis lacus condimentum lectus vestibulum.",
        status: "Cancelled",
        ticket: "#",
        edit: "View/Edit",
      },
      {
        id: "Date: 24 Aug,2024 - 16:17REF. ID: 22442414203",
        details:
          "Travel Date: 20 Sep,2024 - 10:30Journey: HYD → VTZ (oneway)Airline: IXPax: 1Adult",
        option:
          "Lorem ipsum dolor sit amet consectetur. Rhoncus dictum amet quis lacus condimentum lectus vestibulum.",
        status: "Cancelled",
        ticket: "#",
        edit: "View/Edit",
      },
      {
        id: "Date: 24 Aug,2024 - 16:17REF. ID: 22442414203",
        details:
          "Travel Date: 20 Sep,2024 - 10:30Journey: HYD → VTZ (oneway)Airline: IXPax: 1Adult",
        option:
          "Lorem ipsum dolor sit amet consectetur. Rhoncus dictum amet quis lacus condimentum lectus vestibulum.",
        status: "Cancelled",
        ticket: "#",
        edit: "View/Edit",
      },
      {
        id: "Date: 24 Aug,2024 - 16:17REF. ID: 22442414203",
        details:
          "Travel Date: 20 Sep,2024 - 10:30Journey: HYD → VTZ (oneway)Airline: IXPax: 1Adult",
        option:
          "Lorem ipsum dolor sit amet consectetur. Rhoncus dictum amet quis lacus condimentum lectus vestibulum.",
        status: "Cancelled",
        ticket: "#",
        edit: "View/Edit",
      },
      {
        id: "Date: 24 Aug,2024 - 16:17REF. ID: 22442414203",
        details:
          "Travel Date: 20 Sep,2024 - 10:30Journey: HYD → VTZ (oneway)Airline: IXPax: 1Adult",
        option:
          "Lorem ipsum dolor sit amet consectetur. Rhoncus dictum amet quis lacus condimentum lectus vestibulum.",
        status: "Cancelled",
        ticket: "#",
        edit: "View/Edit",
      },
      {
        id: "Date: 24 Aug,2024 - 16:17REF. ID: 22442414203",
        details:
          "Travel Date: 20 Sep,2024 - 10:30Journey: HYD → VTZ (oneway)Airline: IXPax: 1Adult",
        option:
          "Lorem ipsum dolor sit amet consectetur. Rhoncus dictum amet quis lacus condimentum lectus vestibulum.",
        status: "Cancelled",
        ticket: "#",
        edit: "View/Edit",
      },
    ],
    []
  );

  const [pageSize, setPageSize] = useState(10);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page, 
    prepareRow,
    setPageSize: updatePageSize,
    pageOptions,
    gotoPage, 
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination
  );

  const handlePageChange = ({ selected }) => {
    gotoPage(selected); 
  };

  const exportToCSV = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, "table_data.csv");
  };

  return (
    <>
      <div className="table ms-[30px]">
        <div className="flex justify-between items-center   my-[1rem]">
          <div>
            <label className="text-white pr-[1rem]" htmlFor="items">
              Show on page :
            </label>
            <select
              name="items"
              value={pageSize}
              onChange={(e) => {
                const newSize = Number(e.target.value);
                setPageSize(newSize);
                updatePageSize(newSize);
              }}
            >
              {[5, 10, 25, 50, 75, 100].map((size) => (
                <option key={size} value={size}>
                  {size} Entries
                </option>
              ))}
            </select>
          </div>
          <button className="export_btn" onClick={exportToCSV}>
            Export
          </button>
        </div>

        <table className="overflow-hidden rounded-md" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
        </table>
        <table {...getTableProps()}>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td className="w-[16.666%]" {...cell.getCellProps()}>
                      {cell.column.id === "status" ? (
                        (() => {
                          if (cell.value.includes("Conform")) {
                            return (
                              <span
                                style={{
                                  backgroundColor: "#52A103",
                                  color: "white",
                                }}
                              >
                                {cell.render("Cell")}
                              </span>
                            );
                          } else if (cell.value.includes("Cancellation")) {
                            return (
                              <span
                                style={{
                                  backgroundColor: "#F77A7A",
                                  color: "white",
                                }}
                              >
                                {cell.render("Cell")}
                              </span>
                            );
                          } else if (cell.value.includes("Cancelled")) {
                            return (
                              <span
                                style={{
                                  backgroundColor: "#FF4545",
                                  color: "white",
                                }}
                              >
                                {cell.render("Cell")}
                              </span>
                            );
                          } else if (cell.value.includes("Pending")) {
                            return (
                              <span
                                style={{
                                  backgroundColor: "#A2BB67",
                                  color: "white",
                                }}
                              >
                                {cell.render("Cell")}
                              </span>
                            );
                          } else {
                            return <span>{cell.render("Cell")}</span>;
                          }
                        })()
                      ) : cell.column.id === "ticket" && cell.value !== null ? (
                        <a
                          href={cell.value}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="37"
                            viewBox="0 0 36 37"
                            fill="none"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M18 3.5V13.25C18 13.8467 18.2371 14.419 18.659 14.841C19.081 15.2629 19.6533 15.5 20.25 15.5H30V30.5C30 31.2956 29.6839 32.0587 29.1213 32.6213C28.5587 33.1839 27.7956 33.5 27 33.5H9C8.20435 33.5 7.44129 33.1839 6.87868 32.6213C6.31607 32.0587 6 31.2956 6 30.5V6.5C6 5.70435 6.31607 4.94129 6.87868 4.37868C7.44129 3.81607 8.20435 3.5 9 3.5H18ZM16.5165 18.272C16.1574 20.5566 14.9627 22.6264 13.164 24.08C11.8335 25.154 13.05 27.2615 14.646 26.648C16.8042 25.8168 19.1943 25.8168 21.3525 26.648C22.9485 27.263 24.165 25.1555 22.8345 24.08C21.0358 22.6264 19.8411 20.5566 19.482 18.272C19.2165 16.583 16.782 16.5815 16.5165 18.272ZM18 21.9545L19.209 24.0455H16.794L18 21.9545ZM21 3.5645C21.5683 3.68503 22.0894 3.96799 22.5 4.379L29.121 11C29.532 11.4106 29.815 11.9317 29.9355 12.5H21V3.5645Z"
                              fill="black"
                            />
                          </svg>
                        </a>
                      ) : cell.column.id === "edit" && cell.value !== null ? (
                        <a className="edit_btn">{cell.render("Cell")}</a>
                      ) : (
                        cell.render("Cell")
                      )}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>

        <ReactPaginate
          previousLabel={"Prev"}
          nextLabel={"Next"}
          breakLabel={"...."}
          pageCount={Math.ceil(data.length / pageSize)} 
          onPageChange={handlePageChange}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </div>
    </>
  );
};

export default TableList;