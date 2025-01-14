import React from "react";

interface YouTubeEmbedProps {
  videoId: string; // ID video YouTube yang akan ditampilkan di akhir link video url
  title?: string;
  height?: string; //  opsi untuk tinggi
  width?: string; //  opsi untuk lebar
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({
  videoId,
  title,
  height = "100%", // Default tinggi video
  width = "100%", // Default lebar video
}) => {
  if (!videoId) {
    console.error("Error: 'videoId' is required for YouTubeEmbed component.");
    return null;
  }

  return (
    <div
      style={{ width, height }}
      className="relative flex items-center justify-center overflow-hidden rounded-lg shadow-md"
    >
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title || "YouTube video"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          width: height,
          height: width, // Pastikan iframe mengikuti ukuran induknya
        }}
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;
