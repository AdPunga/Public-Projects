import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Card,
  CardContent,
  Typography,
  CircularProgress,
  CardMedia,
} from "@mui/material";
import Grid from "@mui/material/Grid"

interface BlogListProps {searchQuery: string;}
interface Post {
  id: number;
  title: string;
  body: string;
}

function BlogList({ searchQuery }: BlogListProps): React.JSX.Element {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch(() => setError("We cannot display your posts at this moment."))
      .finally(() => setLoading(false));
  }, []);

  const filtered = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading)
    return (
      <Container sx={{ mt: 4, textAlign: "center" }}>
        <CircularProgress />
      </Container>
    );

  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Container maxWidth="xl" sx={{ mt: 10 }}>
      <Grid container spacing={2}>
        {filtered.map((post) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={post.id} sx={{ height: "100%" }}>
            <Card
              onClick={() => navigate(`/post/${post.id}`)}
              sx={{
                p: 2,
                cursor: "pointer",
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.02)",
                },
              }}
            >
              <CardContent>
                <CardMedia
                  component="img"
                  image={`https://picsum.photos/seed/${post.id}/400/300`}
                  alt="Random image"
                  height="140"
                />
                <Typography
                  variant="h5"
                  noWrap
                  sx={{ textAlign: "center", textTransform: "uppercase" }}
                >
                  {post.title.slice(0, 15)}
                </Typography>
                <Typography variant="body2">
                  {post.body.slice(0, 100)}...
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default BlogList;
