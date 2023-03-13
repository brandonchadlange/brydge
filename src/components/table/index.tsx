import { ReactNode } from "react";

export type AppTableColumn<T> = {
  name: string;
  heading: string;
  headerClass?: string;
  cellClass?: string;
  component: (data: T) => ReactNode;
};

export type AppTableProps<T> = {
  data?: T[];
  headerRowClass?: string;
  columns?: AppTableColumn<T>[];
  children?: ReactNode;
};

function AppTable<T>({ children, columns, data, headerRowClass }: AppTableProps<T>) {
  return (
    <>
      <table className="w-full">
        <thead>
          <tr className={`text-left text-gray-500 font-light ${headerRowClass}`}>
            {columns?.map((column) => (
              <th key={column.name} className={column.headerClass}>
                {column.heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((data, idx) => (
            <tr key={idx}>
              {columns?.map((column) => (
                <td key={column.name} className={`py-2 ${column.cellClass}`}>
                  {column.component(data)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {!data?.length && children}
    </>
  );
}

export default AppTable;
