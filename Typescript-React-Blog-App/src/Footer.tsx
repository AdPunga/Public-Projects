import { AppBar, Toolbar, Typography } from "@mui/material";

function Footer(): React.JSX.Element {
  return (
    <AppBar position="static" sx={{ mt: 4, backgroundColor: "#2b572c" }}>
      <Toolbar sx={{ justifyContent: "center" }}>
        <Typography variant="body2">© 2025 | All Rights Reserved</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
