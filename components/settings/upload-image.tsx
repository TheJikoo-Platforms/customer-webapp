"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";

const UploadImage = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const handleButtonClick = () => {
    inputRef.current?.click();
  };
  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (!selectedFile) {
      return; // No file selected
    }
    const MAX_IMAGE_SIZE = 1024 * 1024; // 1MB
    if (selectedFile.size > MAX_IMAGE_SIZE) {
      setError("Image size exceeds maximum limit (1MB)");
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onload = (e) => {
      if (e.target?.result) {
        setPreviewUrl(e.target.result as string);
      }
    };

    setFile(selectedFile);
    setError(null);
  };

  const handleCancel = () => {
    setFile(null);
    setPreviewUrl("");
  };

  return (
    <div className="flex justify-center items-center mb-6">
      <button type="button" onClick={handleButtonClick} className="relative">
        <input
          ref={inputRef}
          type="file"
          className="hidden"
          onChange={handleUpload}
          accept=".jpg,.jpeg,.png,.gif"
        />
        {previewUrl ? (
          <PreviewImage url={previewUrl} />
        ) : (
          <Image
            src="/avatar.png"
            height={100}
            width={100}
            alt="User Picture"
            className="w-16 h-16 rounded-full object-cover"
            style={{
              backgroundImage:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.40), rgba(0, 0, 0, 0.40)), url(<path-to-image>)",
              backgroundColor: "#D4AFBD",
              backgroundPosition: "50%",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          />
        )}
        <span className="absolute bottom-px -right-1">
          <EditIcon />
        </span>
      </button>
    </div>
  );
};

export default UploadImage;

const PreviewImage = ({ url }: { url: string | null }) => {
  return (
    url && (
      <Image
        src={url}
        alt="Uploaded image preview"
        height={100}
        width={100}
        className="w-16 h-16 rounded-full object-cover"
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.40), rgba(0, 0, 0, 0.40)), url(<path-to-image>)",
          backgroundColor: "#D4AFBD",
          backgroundPosition: "50%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
    )
  );
};

const EditIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
  >
    <rect
      x="0.832031"
      y="0.5"
      width="20.3333"
      height="20.3333"
      rx="10.1667"
      fill="#667185"
    />
    <rect
      x="0.832031"
      y="0.5"
      width="20.3333"
      height="20.3333"
      rx="10.1667"
      stroke="white"
    />
    <path
      d="M7.21716 13.3363L7.0286 14.6562C6.98146 14.9862 7.2643 15.269 7.59428 15.2219L8.91421 15.0333C9.23551 14.9874 9.53325 14.8386 9.76274 14.6091L14.3967 9.97517C14.3966 9.97516 14.3967 9.97518 14.3967 9.97517L12.2753 7.85385L7.64142 12.4878C7.41193 12.7173 7.26306 13.015 7.21716 13.3363Z"
      fill="white"
    />
    <path
      d="M12.9831 7.1474L15.1031 9.2674C15.6516 8.67922 15.6392 7.75762 15.066 7.18446C14.4929 6.6113 13.5713 6.59894 12.9831 7.1474Z"
      fill="white"
    />
  </svg>
);
