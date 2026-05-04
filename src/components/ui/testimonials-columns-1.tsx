"use client";
import React from "react";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "Absolut top Qualität! Das Whey Protein ist das beste, das ich je getestet habe. Schnelle Lieferung, top Verpackung. Ich werde nie wieder woanders kaufen.",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    name: "Markus T.",
    role: "Powerlifter",
  },
  {
    text: "Der Power Rack ist ein Monster. Stabil, hochwertig, und der Kundenservice war erstklassig. The Fitness Store ist mein Go-To-Shop für alles rund ums Training.",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    name: "Felix K.",
    role: "Bodybuilder",
  },
  {
    text: "Endlich ein Shop der weiß, was Qualität bedeutet. Das Pre-Workout ist ein Game-Changer. Beste Energie die ich je erlebt habe, ohne den Crash danach!",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
    name: "Jonas M.",
    role: "Calisthenics Athlet",
  },
  {
    text: "Ich kaufe hier seit 2 Jahren und bin jedes Mal begeistert. Top Produkte, faire Preise, und die Lieferung ist immer blitzschnell. Klare Weiterempfehlung!",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    name: "Dominik B.",
    role: "CrossFit Athlet",
  },
  {
    text: "Als Personal Trainer empfehle ich The Fitness Store all meinen Kunden. Die Produktqualität ist unübertroffen und der Service ist sensationell.",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    name: "Stefan R.",
    role: "Personal Trainer",
  },
  {
    text: "Die Supplements sind von höchster Qualität und der Shop hat immer alles auf Lager. Ich bin seit Jahren treuer Kunde und werde es bleiben.",
    image: "https://randomuser.me/api/portraits/men/66.jpg",
    name: "Lukas W.",
    role: "Fitness Enthusiast",
  },
  {
    text: "Riesen Auswahl, faire Preise und das Team in Pforzheim ist immer hilfsbereit. Ob online oder im Laden — immer top Erfahrung.",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    name: "Kevin S.",
    role: "Hobbyathlet",
  },
  {
    text: "Habe schon viele Shops ausprobiert, aber The Fitness Store übertrifft alle. Schneller Versand, Top-Produkte und ein unschlagbarer Preis.",
    image: "https://randomuser.me/api/portraits/men/88.jpg",
    name: "Tobias F.",
    role: "Kraftsportler",
  },
  {
    text: "Die Beratung im Laden ist Gold wert. Man merkt, dass die Jungs selbst trainieren und wissen worüber sie reden. 5 Sterne, absolut verdient!",
    image: "https://randomuser.me/api/portraits/men/99.jpg",
    name: "Marco L.",
    role: "MMA Kämpfer",
  },
];

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-4 pb-4"
      >
        {[...new Array(2).fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, image, name, role }, i) => (
              <div
                key={i}
                className="p-6 rounded-none border border-white/8 bg-[#484848] max-w-xs w-full relative group hover:border-[#e63946]/30 transition-all duration-500"
              >
                {/* Quote accent */}
                <div className="absolute top-3 right-4 font-display text-4xl text-[#e63946]/10 leading-none group-hover:text-[#e63946]/20 transition-colors duration-300">
                  "
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, s) => (
                    <svg key={s} width="10" height="10" viewBox="0 0 10 10" fill="#e63946">
                      <polygon points="5,1 6.18,3.82 9.27,4.09 7,6.1 7.64,9.15 5,7.5 2.36,9.15 3,6.1 0.73,4.09 3.82,3.82" />
                    </svg>
                  ))}
                </div>

                <p className="font-body text-white/55 text-sm leading-relaxed">"{text}"</p>

                <div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/5">
                  <img
                    width={36}
                    height={36}
                    src={image}
                    alt={name}
                    className="h-9 w-9 rounded-full object-cover grayscale"
                  />
                  <div className="flex flex-col">
                    <div className="font-body font-semibold text-white text-sm leading-5">{name}</div>
                    <div className="font-body text-[#e63946] text-xs tracking-widest uppercase leading-5 opacity-80">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))]}
      </motion.div>
    </div>
  );
};

export { testimonials };
