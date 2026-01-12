import { useAssetsData } from "@/features/assets";
import {
  Box,
  Button,
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const AssetsTable = () => {
  const { data, isLoading, error } = useAssetsData();

  // TODO: Handle loading state
  // TODO: Handle error state

  // TODO: Implement handleUpdate function for PUT request
  const handleUpdate = async (id: string, asset: any) => {
    // Use updateAsset service
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="assets table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            {/* Add more columns as needed */}
            <StyledTableCell align="right">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell>{row.name}</StyledTableCell>
              {/* Add more cells as needed */}
              <StyledTableCell align="right">
                <Box sx={{ display: "flex", gap: 1, justifyContent: "flex-end" }}>
                  {/* TODO: Add button for PUT action */}
                  {/* Example: */}
                </Box>
              </StyledTableCell>
            </StyledTableRow>
          ))}
          {/* Example row, remove it after implementation */}
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              1
            </StyledTableCell>
            <StyledTableCell>Asset 1</StyledTableCell>
            <StyledTableCell align="right">
              <Box sx={{ display: "flex", gap: 1, justifyContent: "flex-end" }}>
                <Button variant="outlined">
                  Update
                </Button>
              </Box>
            </StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AssetsTable;
