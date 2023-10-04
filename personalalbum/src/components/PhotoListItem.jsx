import React from "react";
import { useRemovePhotoMutation } from "../store";
import { GoTrash } from "react-icons/go";
import CircularProgress from "@mui/material/CircularProgress";

function PhotoListItem({ photo }) {
  const [removePhoto, results] = useRemovePhotoMutation();

  const handleRemovePhoto = () => {
    removePhoto(photo);
  };
  return (
    <div
      style={{ cursor: "pointer", position: "relative" }}
      onClick={handleRemovePhoto}
    >
      <img src={photo.url} alt="" />
      <div className="deleteCircularDiv">
        {results.isLoading ? (
          <CircularProgress style={{ width: "20px", height: "20px" }} />
        ) : (
          <GoTrash />
        )}
      </div>
    </div>
  );
}

export default PhotoListItem;
