import { Table as TableComp, Title } from "@mantine/core";
import { Link } from "react-router-dom";
import { IconFile } from "@tabler/icons-react";

interface Column {
  header: string | React.ReactNode;
  accessor: string;
  isLink?: boolean;
  linkPath?: (row: any) => string;
}

interface DynamicTableProps {
  columns: Column[];
  data: any[];
}

const Table = ({ columns, data }: DynamicTableProps) => {
  return (
    <>
      <TableComp
        style={{ marginTop: "1rem" }}
        striped
        highlightOnHover
        withBorder
        withColumnBorders
      >
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th key={index}>{col.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((col, colIndex) => (
                <td key={colIndex}>
                  {col.isLink && col.linkPath ? (
                    <Link
                      to={col.linkPath(row)}
                      style={{ textDecoration: "none" }}
                    >
                      <IconFile size={24} />
                    </Link>
                  ) : (
                    row[col.accessor]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </TableComp>
      {!data.length && <Title style={{ textAlign: "center" }}>No record</Title>}
    </>
  );
};

export default Table;
