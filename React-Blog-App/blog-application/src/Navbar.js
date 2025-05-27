import { AppBar, Toolbar, Typography, TextField } from "@mui/material";

function Navbar({ searchQuery, setSearchQuery }) {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#2b572c" }}>
      <Toolbar>
        <Typography variant="h5" sx={{ flexGrow: 1 }}>
          My Blog App
        </Typography>

        <TextField
          size="small"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ backgroundColor: "white", borderRadius: 1 }}
        />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
