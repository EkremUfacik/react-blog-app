import { Box, Grid, Button } from "@mui/material";
import { useEffect, useState } from "react";
import BlogCard from "../components/cards/BlogCard";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import dashboardStyle from "./styles/Dashboard.module.css";
import useBlogCalls from "../hooks/useBlogCalls";
import { useNavigate } from "react-router";
import { useAuthContext } from "../contexts/AuthProvider";
import loadingGif from "../assets/loading.gif";

const Dashboard = () => {
  const { getBlogs } = useBlogCalls();
  const [blogInfo, setBlogInfo] = useState([]);
  const navigate = useNavigate();
  const { loading } = useAuthContext();

  useEffect(
    () => {
      getBlogs(setBlogInfo);
      // eslint-disable-next-line
    }, // eslint-disable-next-line
    []
  );

  return (
    <Box>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <img src={loadingGif} alt="" />
        </Box>
      ) : (
        <Grid container spacing={2} p={3} justifyContent="center">
          {blogInfo?.map((blog) => (
            <Grid item key={blog.id}>
              <BlogCard blog={blog} setBlogInfo={setBlogInfo} />
            </Grid>
          ))}
        </Grid>
      )}
      <Button
        className={dashboardStyle["new-blog-button"]}
        onClick={() => navigate("/newblog")}
      >
        <p>New Blog</p>
        <AddCircleIcon className={dashboardStyle["button-icon"]} />
      </Button>
    </Box>
  );
};

export default Dashboard;
