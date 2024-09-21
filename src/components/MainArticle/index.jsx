import MainSection from '../MainSection';
import Image1 from '../../assets/MainBlock/Image-01.jpg';
import Image2 from '../../assets/MainBlock/Image-02.jpg';
import Image3 from '../../assets/MainBlock/Image-03.jpg';

function MainBlock () {
  return (
    <main className="mt-[150px] px-2 py-1">
      <article className="flex">
        <div className="flex-none">
          <div className="grid grid-cols-2 gap-6">
            <div className="grid">
              <div>
                <img className="h-auto max-w-full" src={Image1} alt="Image 1" />
              </div>
            </div>
            <div className="grid gap-5">
              <div>
                <img className="h-auto max-w-full" src={Image2} alt="Image 2" />
              </div>
              <div>
                <img className="h-auto max-w-full" src={Image3} alt="Image 3" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-none px-6 w-[432px] text-left">
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
    </main>
  )
}

export default MainBlock