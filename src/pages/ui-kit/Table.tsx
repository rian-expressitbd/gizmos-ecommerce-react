import { Table, TableHeader, TableHead, TableBody, TableRow, TableCell, TableFooter } from "@/components/ui/table";

// Define an interface for the data structure
interface UserData {
  id: number;
  name: string;
  age: number;
  country: string;
}

const Tables = () => {




  const data: UserData[] = [
    { id: 1, name: "John Doe", age: 28, country: "USA" },
    { id: 2, name: "Jane Smith", age: 32, country: "Canada" },
    { id: 3, name: "Mike Johnson", age: 45, country: "UK" },
  ];



  return (
    <Table loading={false}  label="User Information" size="md" variant="bordered">
      <TableHeader>
        <TableHead sortable sortKey="name">
          Name
        </TableHead>
        <TableHead sortable sortKey="age">
          Age
        </TableHead>
        <TableHead sortable sortKey="country">
          Country
        </TableHead>
      </TableHeader>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.age}</TableCell>
            <TableCell>{row.country}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Footer Content</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default Tables;
