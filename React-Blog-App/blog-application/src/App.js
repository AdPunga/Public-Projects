import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import BlogList from "./BlogList";
import PostDetail from "./PostDetail";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Box } from "@mui/material";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

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
