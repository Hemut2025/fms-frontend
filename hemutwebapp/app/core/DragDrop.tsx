import "./DragDrop.css";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Alert } from "@mui/material";
import BlueDocumentationIcon from "../assets/BlueDocumentIcon";
import XIcon from "../assets/XIcon";
import PlusCircle from "../assets/PlusCircle";

export default function DragDrop() {
  const [files, setFiles] = useState<File[]>([]);
  const [error, setError] = useState<React.ReactNode | null>(null);
  const handleRemoveFile = (fileToRemove: File) => {
    setFiles(files.filter((file) => file !== fileToRemove));
  };

  const validateFile = (file: File) => {
    const maxSize = 5 * 1024 * 1024; // 5MB in bytes
    if (file.size > maxSize) {
      return (
        <Alert severity="error">
          File size too big. Maximum size is {formatBytes(maxSize)}
        </Alert>
      );
    }

    const validExtensions = [".csv", ".xlsx"];
    const fileName = file.name.toLowerCase();
    if (!validExtensions.some((ext) => fileName.endsWith(ext))) {
      return <Alert severity="error">Please upload a .csv or .xlsx file</Alert>;
    }

    return null;
  };

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles?.length) {
        setError(null);
        if (files.length + acceptedFiles.length > 4) {
          setError(<Alert severity="error">Maximum 4 files allowed</Alert>);
          return;
        }
        const newFiles = acceptedFiles.filter(
          (newFile) =>
            !files.some((existingFile) => existingFile.name === newFile.name)
        );
        if (newFiles.length === 0) {
          return;
        }

        for (const file of acceptedFiles) {
          const validationError = validateFile(file);
          if (validationError) {
            setError(validationError);
            return;
          }
        }
        setFiles((previousFiles) => [...previousFiles, ...acceptedFiles]);
      }
    },
    [files]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      <div {...getRootProps({ className: "dropContainer" })}>
        <input {...getInputProps()} />
        {isDragActive ? <p>Drop here</p> : <InsertHere />}
      </div>

      <div className="seeFiles">
        {error && (
          <div
            style={{
              zIndex: 1000,
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            {error}
          </div>
        )}

        {files.map((file) => (
          <UploadedFilePopUp
            file={file}
            key={file.name}
            onClick={() => handleRemoveFile(file)}
          />
        ))}
      </div>
    </>
  );
}

const formatBytes = (bytes: number): string => {
  const units = ["B", "KB", "MB", "GB", "TB"];
  let unitIndex = 0;
  let size = bytes;

  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }

  if (size >= 100) {
    return `${size.toFixed(0)} ${units[unitIndex]}`;
  } else if (size >= 10) {
    return `${size.toFixed(1)} ${units[unitIndex]}`;
  }
  return `${size.toFixed(2)} ${units[unitIndex]}`;
};

const UploadedFilePopUp = ({
  file,
  onClick,
}: {
  file: File;
  onClick?: () => void;
}) => {
  return (
    <div className="popUpContainer">
      <div className="docIcon">
        <BlueDocumentationIcon />
      </div>
      <div className="fileInfo">
        <p className="fileName">{file.name}</p>
        <p className="fileSize">{formatBytes(file.size)}</p>
      </div>
      <div className="closeButton" onClick={onClick}>
        <XIcon />
      </div>
    </div>
  );
};

const InsertHere = () => {
  return (
    <>
      <div className="pluslogo">
        <PlusCircle />
      </div>
      <p className="file-drop-text">Drop your files here</p>
      <p className="bottomWord">
        <span className="browse-file">Browse file</span>
        <span className="from-computer">from your computer</span>
      </p>
    </>
  );
};
// const DropHere = () => {};
