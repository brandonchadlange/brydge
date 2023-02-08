import { ReactNode } from "react";

export type AppTableColumn<T> = {
  name: string;
  heading: string;
  headerClass?: string;
  component: (data: T) => ReactNode;
};

export type AppTableProps<T> = {
  data?: T[];
  columns?: AppTableColumn<T>[];
  children?: ReactNode;
};

function AppTable<T>({ children, columns, data }: AppTableProps<T>) {
  return (
    <>
      <table className="w-full">
        <thead>
          <tr className="text-left">
            {columns?.map((column) => (
              <th key={column.name} className={column.headerClass}>{column.heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((data, idx) => (
            <tr key={idx}>
              {columns?.map((column) => (
                <td key={column.name} className="py-2">
                  {column.component(data)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {
        !data?.length && children
      }
    </>
  );
}

export default AppTable;
