import Section from './Section';
import Image1 from '../assets/Sections/Image-01.jpg';
import Image2 from '../assets/Sections/Image-02.jpg';
import Image3 from '../assets/Sections/Image-03.jpg';

function MainSection () {
  return (
    <section className="mt-[240px]">
      <h1 className="text-[42px] font-light">ALL THE LATEST FROM AEG</h1>
      <div className="grid grid-cols-3">
        <Section image={Image1} />
        <Section image={Image2} />
        <Section image={Image3} />
      </div>
    </section>
  )
}

export default MainSection;