import Section from '../Section';
import Image1 from '../../assets/Sections/Image-01.jpg';
import Image2 from '../../assets/Sections/Image-02.jpg';
import Image3 from '../../assets/Sections/Image-03.jpg';

function MainSection () {
  return (
    <section className="mt-[240px]">
      <h1 className="text-[42px] font-light">ALL THE LATEST FROM AEG</h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 mt-[60px] gap-y-20 gap-x-5 md:gap-y-0 justify-center md:justify-start">
        <Section
          image={Image1}
          headerText={'Summer Lunch Menu by Mark Best'}
          text={
            `AEG ambassador Mark Best's summer eats are
            guaranteed to help you make the most of the
            warmer weather and entertaining at home.`
          }
        />
        <Section
          image={Image2}
          headerText={'A Traditional Christmas Eve, Mark Best Style'}
          text={
            `One of Australia's best chefs and AEG ambassador,
            Mark Best, shares his favourite Christmas Eve menu
            which is sure to impress your guests.`
          }
        />
        <Section
          image={Image3}
          headerText={'Taking taste further'}
          text={
            `This exclusive cookbook gives you all the know-how
            you need. We've designed it to make sure you get the
            most out of our products - and the best out of your
            food.`
          }
        />
      </div>
    </section>
  )
}

export default MainSection;