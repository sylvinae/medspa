import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    text: `I first met Nurse Anna when I was struggling with severe cystic acne, and I remember feeling really self-conscious. She was the one who handled most of my laser treatments and even did a chemical peel for me once.<br />
    From the beginning, she made me feel comfortable and really took the time to listen to my concerns. She’s incredibly kind and patient, always explaining everything clearly and answering all my questions without ever making me feel rushed—which is something I really appreciate, especially considering how expensive skin treatments can be. It was obvious that she genuinely cares about her patients and treats them the way she’d want to be treated herself.<br />
    During my laser treatments, she was thorough and made sure I knew exactly what to expect. She constantly checked in to make sure I was okay, and that attention to detail really showed in the quality of her work. When I got my first chemical peel, she walked me through every step and potential side effect, which put me at ease. I always felt like I was in good hands with her.<br />
    I’m really happy for Nurse Anna as she starts her own clinic. If her care and expertise at the new place are anything like what I experienced, I know it’ll be a welcoming space for anyone looking for great skin treatments. 🥰💕✨<br />
    Honestly, my experience with her left such a great impression, and I wouldn’t hesitate to go back.`,
    name: "Krez Shantelle Magalued",
  },
  {
    text: `Joanna is amazing. I first went to her through Persimmon and I'm so happy she's now opening her own practice! I originally went to her for micro needling and have been extremely happy with the results.<br />
    She is always very kind and considerate during my visits with her and it makes the overall experience so much fun and enjoyable.<br />
    I now go to her to get tirzepatide injections and have been doing so the last few weeks. With her guidance and healthy lifestyle changes she suggested, I lost 7lbs within the first two weeks of my treatment.<br />
    I am continuing my weightless journey with her and will definitely be going back to her for future treatments as well as other treatments she offers that I'm excited to try.<br />
    Thank you Joanna for all your help and guidance!`,
    name: "D Pangilinan",
  },
  {
    text: `I’ve been wanting to have some basic work done on the lines slowly creeping on my face. Thanks to Skin Etiquette Med Spa for doing a careful evaluation of my needs and did the work one concern at a time.<br />
    I am fully satisfied with the result. Ready for my next visit. Thanks much for doing a very impressive job.`,
    name: "Jean Galanida",
  },
  {
    text: `I am beyond excited to continue coming back for treatments with RN Anna! I was referred to her by a friend, and I’ve had a chemical peel and microneedling so far. I will say upfront that Anna is very thorough in her approach, and she made sure I was fully aware of any potential downtime, which I really appreciated.<br />
    She’s incredibly detail-oriented, and that’s something I truly value because it shows how much she cares about delivering the best possible results.<br />
    What sets Anna apart is how personable she is. We’ve built a great relationship over our appointments, and it’s more like catching up with a friend rather than just another treatment. I trust her completely with my skin.<br />
    Anna, you are a true Godsend, and I can’t wait to see even more amazing results from you! Thank you for always going above and beyond to help me achieve my skincare goals. See you at my next appointment!"`,
    name: "Ella Amore",
  },
  {
    text: `Great experience at the spa. Joanna was very gentle and made my skin tag removal quick and painless. I was hesitant at first but glad i pushed through it. Not gonna lie, the downtime is ugly but at week 2, happy to see my face and neck tag-free…feels so much smoother. Will probably do the face peel she recommended to help even out my skin especially the big ones that look like will leave demarcation for awhile. If you struggle with skin tag, I highly recommend Joanna. I wished I did the exosome for faster healing but still happy with the overall result and experience.`,
    name: "Perla Galanida",
  },
  {
    text: `I was Joanna’s client at Persimmon and am so excited she’s finally opening her own clinic! I trust her completely for my tox treatments—her dosing is spot on, and my results last exactly as she says they will. She’s super knowledgeable and always makes sure I get the best outcome without overselling.`,
    name: "Cyndi Balance",
  },
  {
    text: `I had the most amazing experience with Joanna! It was my first time getting lip fillers and I was quite nervous about touching my face with needles. However, Joanna made the entire process so comfortable and reassuring. I would def go back for retouch.`,
    name: "Marizen Anunciacion",
  },
  {
    text: `Nurse Joan was very welcoming provided great information about the treatments i inquired about. I did the platinum aquafacial for my dull skin and left the clinic with my skin feeling refreshed. She was very professional and did not try to upsell me treatments she didn’t think i needed. Highly recommend and looking forward to try her other services in the future.`,
    name: "Ken Patrick Galanida",
  },
];

const Testimonials: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode: true,
    centerPadding: "0",
    dotsClass: "slick-dots flex justify-center items-center space-x-3 mt-6",
  };

  return (
    <section className="bg-[#C1A3AD] py-[6rem] px-6 text-center min-h-[20rem] flex items-center">
      <div className="max-w-5xl mx-auto w-full">
        {/* Section Title */}
        <h2 className="text-5xl font-bold text-[#222] font-[Cormorant]">
          HOW WAS YOUR EXPERIENCE?
        </h2>
        <div className="w-[15rem] h-[3px] bg-[#B69159] mx-auto mt-3"></div>

        {/* Testimonial Slider */}
        <Slider {...settings} className="mt-2 py-5 w-auto mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-auto mx-auto flex flex-col justify-center h-[25rem]"
            >
              {testimonial.text.split("<br />").map((line, i) => (
                <div
                  key={i}
                  className="mb-6 text-lg italic text-[#3B2C27] leading-relaxed tracking-wide whitespace-normal"
                >
                  {`"${line}"`}
                </div>
              ))}
              <p className="mt-6 font-semibold text-[#3B2C27]">
                - {testimonial.name}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
