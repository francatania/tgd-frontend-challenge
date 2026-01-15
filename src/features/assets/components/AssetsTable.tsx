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
  TablePagination,
  CircularProgress,
  Alert,
  TextField,
  Snackbar
} from "@mui/material";
import type { Asset, UpdateAssetDto } from "../types/assetTypes";
import { updateAsset } from "../services/assetService";
import { useState } from "react";

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
  const { data, isLoading, error, refetch } = useAssetsData();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [editingRowId, setEditingRowId] = useState<number | null>(null);
  const [editedRow, setEditedRow] = useState<Asset | null>(null);
  const [snackbar, setSnackbar] = useState<{ open: boolean; message: string; severity: "success" | "error" }>({
    open: false,
    message: "",
    severity: "success"
  });

  // TODO: Handle loading state
  if (isLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", p: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  // TODO: Handle error state
  if (error) {
    return <Alert severity="error">{error.message}</Alert>;
  }

  // TODO: Implement handleUpdate function for PUT request
  const handleUpdate = async (asset: UpdateAssetDto): Promise<boolean> => {
    // Use updateAsset service
    try {
      await updateAsset(asset);
      setSnackbar({ open: true, message: "Asset updated successfully", severity: "success" });
      return true;
    } catch (err) {
      setSnackbar({ open: true, message: "Error updating asset.", severity: "error" });
      return false;
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const handleEdit = (row: Asset) => {
    setEditingRowId(row.id);
    setEditedRow({ ...row });
  };

  const handleCancel = () => {
    setEditingRowId(null);
    setEditedRow(null);
  };

  const handleSave = async () => {
    if (editedRow) {
      const success = await handleUpdate(editedRow);
      if (success) {
        setEditingRowId(null);
        setEditedRow(null);
        await refetch();
      }
    }
  };

  const handleFieldChange = (field: keyof Asset, value: string) => {
    if (editedRow) {
      setEditedRow({ ...editedRow, [field]: value });
    }
  };

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedData: Asset[] = data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Paper>
      <TableContainer sx={{ maxHeight: 700, minHeight: 700 }}>
        <Table sx={{ minWidth: 650 }} stickyHeader aria-label="assets table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell>Equipment</StyledTableCell>
              <StyledTableCell>Sector</StyledTableCell>
              <StyledTableCell>Brand</StyledTableCell>
              <StyledTableCell>Model</StyledTableCell>
              <StyledTableCell>Type</StyledTableCell>
              <StyledTableCell>Location</StyledTableCell>
              <StyledTableCell align="right">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.length === 0 ? (
              <TableRow>
                <StyledTableCell colSpan={8} align="center">
                  No assets found
                </StyledTableCell>
              </TableRow>
            ) : paginatedData.map((row) => {
              const isEditing = editingRowId === row.id;
              const currentRow = isEditing && editedRow ? editedRow : row;

              return (
                <StyledTableRow key={row.id}>
                  <StyledTableCell component="th" scope="row">
                    {row.id}
                  </StyledTableCell>
                  <StyledTableCell>
                    {isEditing ? (
                      <TextField
                        size="small"
                        value={currentRow.equipment}
                        onChange={(e) => handleFieldChange("equipment", e.target.value)}
                      />
                    ) : (
                      row.equipment
                    )}
                  </StyledTableCell>
                  <StyledTableCell>
                    {isEditing ? (
                      <TextField
                        size="small"
                        value={currentRow.sector}
                        onChange={(e) => handleFieldChange("sector", e.target.value)}
                      />
                    ) : (
                      row.sector
                    )}
                  </StyledTableCell>
                  <StyledTableCell>
                    {isEditing ? (
                      <TextField
                        size="small"
                        value={currentRow.brand}
                        onChange={(e) => handleFieldChange("brand", e.target.value)}
                      />
                    ) : (
                      row.brand
                    )}
                  </StyledTableCell>
                  <StyledTableCell>
                    {isEditing ? (
                      <TextField
                        size="small"
                        value={currentRow.model}
                        onChange={(e) => handleFieldChange("model", e.target.value)}
                      />
                    ) : (
                      row.model
                    )}
                  </StyledTableCell>
                  <StyledTableCell>
                    {isEditing ? (
                      <TextField
                        size="small"
                        value={currentRow.type}
                        onChange={(e) => handleFieldChange("type", e.target.value)}
                      />
                    ) : (
                      row.type
                    )}
                  </StyledTableCell>
                  <StyledTableCell>
                    {isEditing ? (
                      <TextField
                        size="small"
                        value={currentRow.location}
                        onChange={(e) => handleFieldChange("location", e.target.value)}
                      />
                    ) : (
                      row.location
                    )}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Box sx={{ display: "flex", gap: 1, justifyContent: "flex-end" }}>
                      {isEditing ? (
                        <>
                          <Button variant="contained" color="primary" onClick={handleSave}>
                            Save
                          </Button>
                          <Button variant="outlined" onClick={handleCancel}>
                            Cancel
                          </Button>
                        </>
                      ) : (
                        <Button variant="outlined" onClick={() => handleEdit(row)}>
                          Edit
                        </Button>
                      )}
                    </Box>
                  </StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      {!editingRowId && (
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 50]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      )}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: "100%" }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Paper>
  );
};

export default AssetsTable;
