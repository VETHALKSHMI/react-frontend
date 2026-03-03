import muruganImg from "../assets/godImages/muruga.webp";
import perumalImg from "../assets/godImages/perumal.webp";
import sivaLingamImg from "../assets/godImages/sivalingam.webp";

interface GodData {
  id: number;
  title: string;
  image: string;
  path?: string;
}

export const godsData: GodData[] = [
  {
    id: 1,
    title: "Lord Murugan",
    image: muruganImg,
    path: "/murugan",
  },
  {
    id: 2,
    title: "Lord Perumal",
    image: perumalImg,
    path: "/perumal",
  },
  {
    id: 3,
    title: "Lord Siva Lingam",
    image: sivaLingamImg,
    path: "/siva-lingam",
  },
];
