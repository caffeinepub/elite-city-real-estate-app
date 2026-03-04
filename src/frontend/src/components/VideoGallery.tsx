import { Card, CardContent } from "@/components/ui/card";
import { Play, Video } from "lucide-react";
import { useState } from "react";

const videos = [
  {
    id: 1,
    title: "Elite City Overview",
    src: "/assets/AQM6C7cQ0jVZzmmvSAnpVoPDRuf9Cahpio-naNP6U28FjERHBe-r3K0oL7bL2mUGXGACXsvrCJKzgcfFYgRVBglBYLyjut_H0Fkl1-YjLZBiIbEnD1KKbcO-Cbelh-c.mp4",
    description:
      "Discover the premium amenities and world-class infrastructure",
  },
  {
    id: 2,
    title: "Project Walkthrough",
    src: "/assets/AQMAOSmG8wyvNw2h6MDSqTY853N4qZN_AE8F_R4hGdDR-1MLCAR3HHv6xYb2ytlgkANlhwfyIpOG03vD5i61ulWp6UErmFYemfGHCTxVqX31gGfaAqvqLyFMS50k1SPS.mp4",
    description: "Virtual tour of Elite City development",
  },
  {
    id: 3,
    title: "Location Highlights",
    src: "/assets/AQNET55AF09tUTKMv_sF3wYpwR6oYfofoP3XDn0wjYtD9yqEGqOY79PPmS7dNh0RiYt5JqV9Vds7sqwG-DtVws1fUYPSBwVUAC1ZXfDuKCPaOjgN4Dmma2ZhBl0XMrSj.mp4",
    description: "Strategic location with excellent connectivity",
  },
  {
    id: 4,
    title: "Amenities Showcase",
    src: "/assets/AQNKTpx1r5xFNTYbOcZCVMrxr9lBEII9ylXRSBRm7dLympCYABfxEYBesFyZm-bzqPMzv0zTtwqp3yKaYBzM9ra3OdH_ov1qOqv-TLFNSej30PjjHdf0q0jrkzl1VIYY.mp4",
    description: "World-class amenities for modern living",
  },
  {
    id: 5,
    title: "Infrastructure Details",
    src: "/assets/AQNX3ICgZPDLtVjLt3mdSh4Nhqx7PLDISegjlaYPbYoniYfUadnULWll3fNe7PNjhMs5zO1KZSboEO0tlRKJQO1wB65pOrnC6D_JsVCJNlI-wYKbkMUw1-fQBz79RNg.mp4",
    description: "Premium infrastructure and facilities",
  },
  {
    id: 6,
    title: "Elite Township",
    src: "/assets/AQO0PnqzPG0BevOzAXWeZDgJNUQKDG0_zadZVOkv_-YTr-0sZbVPY8vn_NwAeYSQCfVcntRvgNBzlIqoaune29xbin4GuM2T_0MlRUiJ8GSFK24FKu5bJ1RheKxMs29Z.mp4",
    description: "Explore Elite Township - 23 acres of luxury",
  },
];

export default function VideoGallery() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Video <span className="text-elite-gold">Gallery</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Take a virtual tour of our premium projects and experience the Elite
            India difference
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <Card
              key={video.id}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-elite-gold/20 hover:border-elite-gold/50"
            >
              <CardContent className="p-0">
                <div className="relative aspect-video bg-black">
                  <video
                    src={video.src}
                    className="w-full h-full object-cover"
                    controls={playingVideo === video.id}
                    onPlay={() => setPlayingVideo(video.id)}
                    onPause={() => setPlayingVideo(null)}
                    poster=""
                  >
                    <track kind="captions" />
                    Your browser does not support the video tag.
                  </video>
                  {playingVideo !== video.id && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 flex items-center justify-center group-hover:bg-black/60 transition-all duration-300">
                      <button
                        type="button"
                        onClick={() => {
                          const videoElement = document.querySelector(
                            `video[src="${video.src}"]`,
                          ) as HTMLVideoElement;
                          if (videoElement) {
                            videoElement.play();
                            setPlayingVideo(video.id);
                          }
                        }}
                        className="bg-elite-red hover:bg-elite-red-dark text-white rounded-full p-6 transform group-hover:scale-110 transition-all duration-300 shadow-2xl"
                      >
                        <Play className="h-8 w-8 fill-current" />
                      </button>
                    </div>
                  )}
                </div>
                <div className="p-6 bg-card">
                  <div className="flex items-start gap-3 mb-2">
                    <Video className="h-5 w-5 text-elite-gold flex-shrink-0 mt-1" />
                    <h3 className="text-lg font-bold text-foreground group-hover:text-elite-gold transition-colors">
                      {video.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {video.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-3xl mx-auto bg-gradient-to-r from-elite-gold/10 to-elite-red/10 border-elite-gold/30">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-3">
                Want to Visit in Person?
              </h3>
              <p className="text-muted-foreground mb-6">
                Schedule a site visit to experience our premium projects
                firsthand
              </p>
              <a
                href="#inquiry-form"
                className="inline-flex items-center gap-2 bg-elite-red hover:bg-elite-red-dark text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Book Your Visit
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
