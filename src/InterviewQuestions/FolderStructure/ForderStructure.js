import { useState } from "react";

function FolderStructure(props) {
  const { folderData } = props;

  const { name, isFolder, items } = folderData;

  const [expanded, setExpanded] = useState(false);

  if (isFolder) {
    return (
      <div>
        {/* Parent */}
        <span
          onClick={() => {
            setExpanded((old) => !old);
          }}
        >
          {items?.length > 0 ? (expanded ? "$" : "%%") : ""}

          {name}
        </span>

        {/* childrens */}

        {expanded && (
          <div
            style={{
              display: expanded ? "block" : "none",
              paddingLeft: "20px",
            }}
          >
            {items.map((item) => {
              return <FolderStructure key={item.name} folderData={item} />;
            })}
          </div>
        )}
      </div>
    );
  } else {
    return <div>{name}</div>;
  }
}

export default FolderStructure;
