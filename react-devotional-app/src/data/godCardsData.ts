import muruganImg from "../assets/godImages/muruga.webp";
import perumalImg from "../assets/godImages/perumal.webp";
import sivaLingamImg from "../assets/godImages/sivalingam.webp";

interface GodData {
  id: string | number;
  lyricId: string;
  tamilLyricsTitle: string;
  englishLyricsTitle: string;
  title: string;
  tamilName: string;
  image: string;
  path?: string;
}

export const godsData: GodData[] = [
  {
    id: "murugan",
    lyricId: "kanda-sashti-kavasam",
    tamilLyricsTitle: "கந்த சஷ்டி கவசம்",
    englishLyricsTitle: "Kanda Sashti Kavasam",
    title: "Lord Murugan",
    tamilName: "முருகன் பக்தி பாடல்கள்",
    image: muruganImg,
  },
  {
    id: "perumal",
    lyricId: "kanda-sashti-kavasam",
    tamilLyricsTitle: "கந்த_சஷ்டி_கவசம்",
    englishLyricsTitle: "Kanda Sashti Kavasam",
    title: "Lord Perumal",
    tamilName: "பெருமால் பக்தி பாடல்கள்",
    image: perumalImg,
  },
  {
    id: "siva-lingam",
    lyricId: "kanda-sashti-kavasam",
    tamilLyricsTitle: "கந்த_சஷ்டி_கவசம்",
    englishLyricsTitle: "Kanda Sashti Kavasam",
    title: "Lord Siva Lingam",
    tamilName: "சிவன் பக்தி பாடல்கள்",
    image: sivaLingamImg,
  },
];
