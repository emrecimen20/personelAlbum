import React from "react";
import { useAddAlbumMutation, useFetchAlbumsQuery } from "../store";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Skeleton from "@mui/material/Skeleton";
import AlbumListItem from "./AlbumListItem";

function AlbumList({ user }) {
  const { data, isError, isFetching } = useFetchAlbumsQuery(user);
  const [addAlbum, result] = useAddAlbumMutation(false);
  const handleAlbumAdd = () => {
    addAlbum(user);
  };

  let content;
  if (isFetching) {
    content = (
      <Skeleton variant="rectangular" sx={{ width: "100%", height: "200px" }} />
    );
  } else if (isError) {
    content = <div>Hata Var</div>;
  } else {
    content = data.map((album) => {
      return <AlbumListItem key={album.id} album={album} />;
    });
  }
  return (
    <>
      <div>
        <div className="topArrangement">
          <h3>{user.name} Albümü</h3>
          <Button
            sx={{ color: "green", borderColor: "green" }}
            variant="outlined"
            onClick={handleAlbumAdd}
          >
            {result.isLoading ? <CircularProgress /> : <span>Albüm Ekle+</span>}
          </Button>
        </div>
      </div>
      <div>{content}</div>
    </>
  );
}

export default AlbumList;
