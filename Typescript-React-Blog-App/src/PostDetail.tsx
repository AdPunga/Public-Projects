import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  CircularProgress,
  Button,
  List,
  ListItem,
  CardMedia,
  Box,
} from "@mui/material";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

function PostDetail() {
  const { id } = useParams<{id: string}>();
  const navigate = useNavigate();
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) =>
        res.json()
      ),
      fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`).then(
        (res) => res.json()
      ),
    ])
      .then(([p, c]) => {
        setPost(p);
        setComments(c);
      })
      .catch(() => setError("We cannot display your posts at this moment."))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;
  if (!post) return <Typography>Post not found.</Typography>;

  return (
    <Container>
      <Button
        onClick={() => navigate(-1)}
        sx={{
          mb: 2,
          px: 3,
          color: "#2b572c",
          "&:hover": {
            backgroundColor: "#d5f5e3",
            boxShadow: "none",
          },
        }}
      >
        ← Back
      </Button>
      <CardMedia
        component="img"
        image="https://picsum.photos/1920/1800"
        alt="Random image"
        height="400"
      />
      <Typography
        variant="h4"
        sx={{ mt: 5, textAlign: "center", textTransform: "uppercase" }}
      >
        {post.title}
      </Typography>
      <Typography variant="body1" sx={{ mt: 5 }}>
        {post.body}
      </Typography>
      <Container>
        <Typography variant="h6" sx={{ mt: 5 }}>
          {comments.length} Comments
        </Typography>
        <List>
          {comments.map((c) => (
            <ListItem
              key={c.id}
              sx={{
                alignItems: "flex-start",
                gap: 2,
                px: 0,
                borderColor: "blue",
                borderBottom: "1px solid #bbb",
              }}
            >
              <CardMedia
                component="img"
                image={`https://picsum.photos/seed/${c.id}/200/200`}
                alt="Random image"
                sx={{
                  width: 40,
                  height: 40,
                  objectFit: "cover",
                }}
              />
              <Box>
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: "#2b572c",
                    p: 0,
                    lineHeight: 0.9,
                  }}
                >
                  <strong>{c.email}</strong>
                </Typography>

                <Typography variant="subtitle2" sx={{ color: "#444", mt: 1 }}>
                  {c.body}
                </Typography>
              </Box>
            </ListItem>
          ))}
        </List>
      </Container>
    </Container>
  );
}

export default PostDetail;
