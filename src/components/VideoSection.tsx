import videoSrc from "/srm-video.mp4?url";

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
        <div className="relative rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-elevated)] bg-card">
          <video
            src="/srm-video.mp4"
            controls
            preload="metadata"
            playsInline
            className="w-full h-auto block"
          />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;