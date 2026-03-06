import muruganImg from "../assets/godImages/muruga.webp";
import perumalImg from "../assets/godImages/perumal.webp";
import sivaLingamImg from "../assets/godImages/sivalingam.webp";

interface GodData {
  id: string | number;
  title: string;
  tamilName: string;
  image: string;
  path?: string;
}

export const godsData: GodData[] = [
  {
    id: "murugan",
    title: "Lord Murugan",
    tamilName: "முருகன் பக்தி பாடல்கள்",
    image: muruganImg,
  },
  {
    id: "perumal",
    title: "Lord Perumal",
    tamilName: "பெருமால் பக்தி பாடல்கள்",
    image: perumalImg,
  },
  {
    id: "siva-lingam",
    title: "Lord Siva Lingam",
    tamilName: "சிவன் பக்தி பாடல்கள்",
    image: sivaLingamImg,
  },
];
