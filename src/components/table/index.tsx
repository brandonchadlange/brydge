import { ReactNode } from "react";

export type AppTableColumn<T> = {
  name: string;
  heading: string;
  component: (data: T) => ReactNode;
};

export type AppTableProps<T> = {
  data?: T[];
  columns?: AppTableColumn<T>[];
};

function AppTable<T>({ columns, data }: AppTableProps<T>) {
  return (
    <table className="w-full">
      <thead>
        <tr className="text-left">
          {columns?.map((column) => (
            <th key={column.name}>{column.heading}</th>
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
  );
}

export default AppTable;
