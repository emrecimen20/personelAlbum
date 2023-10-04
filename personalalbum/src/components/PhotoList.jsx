import React from "react";
import { useAddPhotoMutation, useFetchPhotosQuery } from "../store";
import PhotoListItem from "./photoListItem";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Skeleton from "@mui/material/Skeleton";

function PhotoList({ album }) {
  const { data, isError, isFetching } = useFetchPhotosQuery(album);
  const [addPhoto, result] = useAddPhotoMutation();
  const handlePhotoAdd = () => {
    addPhoto(album);
  };
  let content;
  if (isFetching) {
    content = (
      <Skeleton variant="rectangular" sx={{ width: "100%", height: "200px" }} />
    );
  } else if (isError) {
    content = <div>Hata Var</div>;
  } else {
    content = data.map((photo) => {
      return <PhotoListItem key={photo.id} photo={photo} />;
    });
  }
  return (
    <>
      <div>
        <div className="topArrangement">
          <h3>{album.title} Fotoğrafları </h3>
          <Button
            sx={{ color: "red", borderColor: "red" }}
            variant="outlined"
            onClick={handlePhotoAdd}
          >
            {result.isLoading ? (
              <CircularProgress />
            ) : (
              <span>Fotoğraf Ekle+</span>
            )}
          </Button>
        </div>
      </div>
      <div className="photosDiv">{content}</div>
    </>
  );
}

export default PhotoList;
//  djsajdjasjjda

