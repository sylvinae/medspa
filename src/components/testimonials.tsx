import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StaticImage } from "gatsby-plugin-image";

const testimonials = [
  {
    text: `I first met Nurse Anna when I was struggling with severe cystic acne, and I remember feeling really self-conscious. She was the one who handled most of my laser treatments and even did a chemical peel for me once.<br />
    From the beginning, she made me feel comfortable and really took the time to listen to my concerns. She’s incredibly kind and patient, always explaining everything clearly and answering all my questions without ever making me feel rushed—which is something I really appreciate, especially considering how expensive skin treatments can be. It was obvious that she genuinely cares about her patients and treats them the way she’d want to be treated herself.<br />
    During my laser treatments, she was thorough and made sure I knew exactly what to expect. She constantly checked in to make sure I was okay, and that attention to detail really showed in the quality of her work. When I got my first chemical peel, she walked me through every step and potential side effect, which put me at ease. I always felt like I was in good hands with her.<br />
    I’m really happy for Nurse Anna as she starts her own clinic. If her care and expertise at the new place are anything like what I experienced, I know it’ll be a welcoming space for anyone looking for great skin treatments. 🥰💕✨<br />
    Honestly, my experience with her left such a great impression, and I wouldn’t hesitate to go back.`,
    name: "Krez",
  },
  {
    text: `Joanna is amazing. I first went to her through Persimmon and I'm so happy she's now opening her own practice! I originally went to her for micro needling and have been extremely happy with the results.<br />
    She is always very kind and considerate during my visits with her and it makes the overall experience so much fun and enjoyable.<br />
    I now go to her to get tirzepatide injections and have been doing so the last few weeks. With her guidance and healthy lifestyle changes she suggested, I lost 7lbs within the first two weeks of my treatment.<br />
    I am continuing my weightless journey with her and will definitely be going back to her for future treatments as well as other treatments she offers that I'm excited to try.<br />
    Thank you Joanna for all your help and guidance!`,
    name: "D",
  },
  {
    text: `I’ve been wanting to have some basic work done on the lines slowly creeping on my face. Thanks to Skin Etiquette Med Spa for doing a careful evaluation of my needs and did the work one concern at a time.<br />
    I am fully satisfied with the result. Ready for my next visit. Thanks much for doing a very impressive job.`,
    name: "Jean",
  },
  {
    text: `I am beyond excited to continue coming back for treatments with RN Anna! I was referred to her by a friend, and I’ve had a chemical peel and microneedling so far. I will say upfront that Anna is very thorough in her approach, and she made sure I was fully aware of any potential downtime, which I really appreciated.<br />
    She’s incredibly detail-oriented, and that’s something I truly value because it shows how much she cares about delivering the best possible results.<br />
    What sets Anna apart is how personable she is. We’ve built a great relationship over our appointments, and it’s more like catching up with a friend rather than just another treatment. I trust her completely with my skin.<br />
    Anna, you are a true Godsend, and I can’t wait to see even more amazing results from you! Thank you for always going above and beyond to help me achieve my skincare goals. See you at my next appointment!"`,
    name: "Ella",
  },
  {
    text: `Great experience at the spa. Joanna was very gentle and made my skin tag removal quick and painless. I was hesitant at first but glad i pushed through it. Not gonna lie, the downtime is ugly but at week 2, happy to see my face and neck tag-free…feels so much smoother. Will probably do the face peel she recommended to help even out my skin especially the big ones that look like will leave demarcation for awhile. If you struggle with skin tag, I highly recommend Joanna. I wished I did the exosome for faster healing but still happy with the overall result and experience.`,
    name: "Perla",
  },
  {
    text: `I was Joanna’s client at Persimmon and am so excited she’s finally opening her own clinic! I trust her completely for my tox treatments—her dosing is spot on, and my results last exactly as she says they will. She’s super knowledgeable and always makes sure I get the best outcome without overselling.`,
    name: "Cyndi",
  },
  {
    text: `I had the most amazing experience with Joanna! It was my first time getting lip fillers and I was quite nervous about touching my face with needles. However, Joanna made the entire process so comfortable and reassuring. I would def go back for retouch.`,
    name: "Marizen",
  },
  {
    text: `Nurse Joan was very welcoming provided great information about the treatments i inquired about. I did the platinum aquafacial for my dull skin and left the clinic with my skin feeling refreshed. She was very professional and did not try to upsell me treatments she didn’t think i needed. Highly recommend and looking forward to try her other services in the future.`,
    name: "Ken",
  },
];

const avatarColors = ["bg-red-500", "bg-green-500", "bg-violet-500"];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 640,
      settings: { slidesToShow: 1 },
    },
  ],
};

const Testimonials: React.FC = () => {
  return (
    <section className="bg-[#C1A3AD] py-12 sm:py-24 px-4 sm:px-6 text-center min-h-screen flex items-center">
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6">
        <div className="text-center text-white">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-[Cormorant] font-bold leading-tight text-white max-w-2xl mx-auto">
            The Skin Etiquette MedSpa’s Rave Reviews: A Must-Read
          </h2>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-lg sm:text-xl font-medium text-white text-center sm:text-left">
            {/* Google Icon */}
            <StaticImage
              src="../../assets/images/google-icon.webp"
              alt="Google"
              className="w-10 h-6"
            />

            {/* Rating */}
            <span>
              Google Rating: <span className="font-bold text-xl">5.0</span>
            </span>

            {/* Stars */}
            <div className="flex text-yellow-400 text-xl">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-[16px]" />
              ))}
            </div>

            {/* Review Count */}
            <span className="text-lg sm:text-xl">– 10 Reviews</span>
          </div>
        </div>

        <Slider {...settings} className="mt-10">
          {testimonials.map((review, i) => (
            <div className="px-2 sm:px-4 py-8 sm:py-10">
              <div className="p-4 sm:p-6 bg-white rounded-xl shadow-md h-full flex flex-col justify-between text-left">
                <div className="flex items-start gap-4">
                  {/* Avatar */}
                  <div
                    className={`min-w-[48px] h-[48px] rounded-full text-white flex items-center justify-center font-bold text-base shadow-sm ${
                      avatarColors[i % avatarColors.length]
                    }`}
                  >
                    {review.name.charAt(0)}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center space-x-1 text-yellow-500 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-[16px]" />
                      ))}
                    </div>
                    <p
                      className="text-gray-700 text-[15px] leading-relaxed line-clamp-4"
                      dangerouslySetInnerHTML={{
                        __html: `“${review.text.split("<br />")[0]}...”`,
                      }}
                    ></p>
                  </div>
                </div>

                {/* Bottom (unchanged) */}
                <div className="mt-4 text-sm text-gray-600">
                  <p className="font-medium">{review.name}</p>
                  <a
                    href="https://www.google.com/search?sca_esv=b10adade04a8c5e3&sxsrf=AHTn8zpGbt-vD968zlsd7jmZS2VTQKq47Q:1745229365557&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzTrV3aURApsw4ii7ZOi7gFmhwKuvjBzj69h8j-8Sr1ZAZreONJ2gGOHylEsTH8zmqju0IXeJuM21ZxaVccpSEGL9YSBWptz_TPkpbG_HWwvjRrRNrA%3D%3D&q=The+Skin+Etiquette+MedSpa+Reviews&sa=X&ved=2ahUKEwiRzYqD7uiMAxWwTmwGHcJeFMMQ0bkNegQIMBAE&biw=1680&bih=906&dpr=2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline mt-1 inline-block"
                  >
                    Read full review →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
