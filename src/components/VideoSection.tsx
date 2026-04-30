interface VideoSectionProps {
  label?: string;
  title?: string;
  subtitle?: string;
}

const VideoSection = ({
  label = "See Camu in Action",
  title = "A Quick Look at Camu ERP",
  subtitle = "Discover how Camu transforms school operations across Australia & New Zealand.",
}: VideoSectionProps) => {
  return (
    <section className="section-padding">
      <div className="max-w-5xl mx-auto text-center">
        <p className="section-label">{label}</p>
        <h2 className="section-title">{title}</h2>
        <p className="section-subtitle mx-auto mb-10">{subtitle}</p>
        <div className="w-full mx-auto px-4" style={{ maxWidth: "1000px" }}>
          <video
            src="https://mearkwebimages.blob.core.windows.net/camu/SRM%20video.mp4"
            controls
            preload="metadata"
            playsInline
            className="w-full h-auto block bg-card"
            style={{
              aspectRatio: "16 / 9",
              borderRadius: "14px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;