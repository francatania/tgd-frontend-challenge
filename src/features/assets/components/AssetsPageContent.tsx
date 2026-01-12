import { AssetsTable } from "@/features/assets";
import { Container } from "@/shared/components";
import { theme } from "@/shared/theme";
import { Home } from "@mui/icons-material";
import { Box, Paper, Typography } from "@mui/material";

const AssetsPageContent = () => {
  return (
    <Container>
      <Paper sx={{ width: "100%", padding: 2 }}>
        {/* Title */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            color: theme.palette.primary.main,
            gap: 2,
            mb: 1,
          }}
        >
          <Home fontSize="large" />
          <Typography variant="h4">Assets Page</Typography>
        </Box>

        {/* Description */}
        <Typography variant="body1" mb={2}>
          This is the Assets Page
        </Typography>

        {/* Table */}
        <AssetsTable />
      </Paper>
    </Container>
  );
};

export default AssetsPageContent;
