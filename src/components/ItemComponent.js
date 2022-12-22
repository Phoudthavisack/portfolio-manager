import React from "react";

function ItemComponent({ src = "", alt = "" }) {
  return (
    <div style={{ width: "100%", height: "100px" }}>
      <img
        src={src}
        alt={alt}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  );
}

export default ItemComponent;
