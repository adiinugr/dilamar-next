import { galleryImage } from "../assets/data";
import GalleryImage from "../components/GalleryImage";
import Header from "../components/Header";

const Gallery = () => {
  return (
    <div>
      <Header />

      <section className="pt-14  bg-gray-100">
        <div className="text-gray-700 py-10 px-8 md:px-40" data-aos="fade-up">
          <GalleryImage
            images={galleryImage}
            height={600}
            width={1200}
            numberOfGridCols={2}
          />
        </div>
      </section>
    </div>
  );
};

export default Gallery;
