import { useState } from 'react';
import MainSection from '../MainSection';
import Modal from '../Modal';
import Image1 from '../../assets/MainArticle/Image-01.jpg';
import Image1Larger from '../../assets/MainArticle/Image-01@2x.jpg';
import Image2 from '../../assets/MainArticle/Image-02.jpg';
import Image2Larger from '../../assets/MainArticle/Image-02@2x.jpg';
import Image3 from '../../assets/MainArticle/Image-03.jpg';
import Image3Larger from '../../assets/MainArticle/Image-03@2x.jpg';

const IMAGE_1 = 'image1';
const IMAGE_2 = 'image2';
const IMAGE_3 = 'image3';

function MainBlock () {
  const [isOpen, setIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  
  function openImageModal (imageName) {
    if (imageName === IMAGE_1) {
      setModalImage(Image1Larger);
    } else if (imageName === IMAGE_2) {
      setModalImage(Image2Larger);
    } else if (imageName === IMAGE_3) {
      setModalImage(Image3Larger);
    }

    setIsOpen(true);
  }

  function closeImageModal () {
    setIsOpen(false);
  }

  return (
    <main className="mt-[150px] px-2 py-1">
      <article className="flex flex-col md:flex-row items-center md:items-start">
        <div className="flex-none">
          <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
            <div className="grid">
              <div>
                <img
                  className="h-auto max-w-full cursor-pointer"
                  src={Image1}
                  alt="Image 1"
                  onClick={() => openImageModal(IMAGE_1)}
                />
              </div>
            </div>
            <div className="grid gap-5">
              <div>
                <img
                  className="h-auto max-w-full"
                  src={Image2}
                  alt="Image 2"
                  onClick={() => openImageModal(IMAGE_2)}
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full"
                  src={Image3}
                  alt="Image 3"
                  onClick={() => openImageModal(IMAGE_3)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-none px-6 w-[432px] text-left mt-10 md:mt-0">
          <h2 className="text-[1.66rem] font-light mb-2">ANSWER YOUR BODY&apos;S NEEDS</h2>
          <hr />
          <p className="mt-7 mb-11 leading-[1.9rem] font-extralight text-[18px] text-gray-200">
            The way ingredients are sourced affects the way we nourish our bodies.
            Author Mark Schatzer believes our body naturally develops an appetite for
            the foods and nutrients it needs to be healthy, but that artificial flavourings
            are getting in the way. This can be reversed by focusing on high-quality
            ingredients and being mindful as your appetite guides you to consume according to
            your body&apos;s needs.
          </p>
          <h6 className="text-[15.3px] font-medium text-red-600">BE MINDFUL</h6>
          <p className="mt-4 font-medium text-[18px] leading-[1.9rem]">
            Sourcing local or organic food is a good way to start being more mindful about
            what you&apos;re cooking and eating.
          </p>
        </div>
      </article>
      <MainSection />
      <Modal isOpen={isOpen} onClose={closeImageModal}>
        <img src={modalImage} alt="Modal Image" />
      </Modal>
    </main>
  )
}

export default MainBlock;