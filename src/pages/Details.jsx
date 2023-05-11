import { useEffect, useState } from "react";
import { useParams } from "react-router";
import useBlogCalls from "../hooks/useBlogCalls";
import DetailCard from "../components/cards/DetailCard";
import { Box, Container } from "@mui/material";
import loadingGif from "../assets/loading.gif";
import { useAuthContext } from "../contexts/AuthProvider";

const Details = () => {
  const { id } = useParams();
  const { getBlogDetail } = useBlogCalls();
  const [blogDetailInfo, setBlogDetailInfo] = useState("");
  const { loading } = useAuthContext();

  useEffect(() => {
    getBlogDetail(id, setBlogDetailInfo);
    // eslint-disable-next-line
  }, []);

  return (
    <>
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
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {blogDetailInfo && (
            <DetailCard
              blogDetailInfo={blogDetailInfo}
              setBlogDetailInfo={setBlogDetailInfo}
            />
          )}
        </Container>
      )}
    </>
  );
};

export default Details;
