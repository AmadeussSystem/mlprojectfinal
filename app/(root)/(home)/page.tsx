import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ImageUp } from "@/components/image-uploader";
import { Webcam } from "@/components/webcam-demo";

const Home = () => {
  return (
    <div>
      <Header />
      <ImageUp />
      <Webcam />
      <Footer />
    </div>
  );
};

export default Home;
