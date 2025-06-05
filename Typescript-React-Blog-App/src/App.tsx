import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import BlogList from "./BlogList.tsx"
import PostDetail from "./PostDetail.tsx";
import Navbar from "./Navbar.tsx";
import Footer from "./Footer.tsx";
import { Box } from "@mui/material";
import { JSX } from "@emotion/react/jsx-runtime";

function App(): JSX.Element {
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <BrowserRouter>
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <Box sx={{ px: 2, mt: 4 }}>
        <Routes>
          <Route path="/" element={<BlogList searchQuery={searchQuery} />} />
          <Route path="/post/:id" element={<PostDetail />} />
        </Routes>
      </Box>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
