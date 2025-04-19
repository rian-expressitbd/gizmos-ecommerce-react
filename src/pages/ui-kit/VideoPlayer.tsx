import { VideoPlayer } from "@/components/ui/video-player";

export default function VideoPlayers() {
  return (
    <div>
      <VideoPlayer
        thumbnail="/thumbnail.webp"
        src="https://www.youtube.com/watch?v=NcHfSiajexU&t=1s"
        autoPlay={true}
        showControls={true}
      />
    </div>
  );
}
