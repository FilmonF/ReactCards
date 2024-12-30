
import CardList from "./CardList";
import Greeting from "./Greeting";

const musicians = [
  {
    tit: "Teddy Afro",
    description: "Teddy Afro, born Tewodros Kassahun, is one of Ethiopia's most celebrated singers and songwriters. Known for his socially conscious lyrics, he blends reggae, traditional Ethiopian, and modern sounds.",
    splashImageUrl: "https://example.com/images/teddy_afro.jpg"
  },
  {
    title: "Aster Aweke",
    description: "Aster Aweke is a legendary Ethiopian singer known for her soulful voice and timeless songs. She has been a significant figure in Ethiopian music for decades, with hits that resonate both locally and internationally.",
    splashImageUrl: "https://example.com/images/aster_aweke.jpg"
  },
  {
    title: "Gigi (Ejigayehu Shibabaw)",
    description: "Gigi is an internationally renowned Ethiopian singer who blends traditional Ethiopian music with world music influences. Her mesmerizing voice has brought Ethiopian music to a global audience.",
    splashImageUrl: "https://example.com/images/gigi.jpg"
  },
  {
    title: "Mahmoud Ahmed",
    description: "Mahmoud Ahmed is a legendary Ethiopian musician known for his unique voice and contribution to the genre of Ethio-jazz. His music has had a lasting impact on the Ethiopian music scene.",
    splashImageUrl: "https://example.com/images/mahmoud_ahmed.jpg"
  },
  {
    title: "Mulatu Astatke",
    description: "Mulatu Astatke, often referred to as the father of Ethio-jazz, is a composer and musician who has significantly influenced Ethiopian music by fusing jazz and traditional Ethiopian melodies.",
    splashImageUrl: "https://example.com/images/mulatu_astatke.jpg"
  }
];


function App() {
  return (
    <div>
<CardList cards={musicians}/>



      
    </div>
  )
}

export default App
