import React from "react";
import AnimationFallingHero from "../animations/AnimationFallingHero";
import IconsHero from "@/components/IconsHero";
import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";
import CVButton from "@/components/CVButton";

function SectionHero() {
  return (
    <>
      <div className="hero--container">
        <section className="hero__section__aside">
          <div className="hero">
            <AnimationFallingHero text="Salut, moi c'est" />
            <AnimationFallingHero
              startDelay={0.5}
              nameclass="hero_title-color"
              text="William De Azevedo"
            />
            <AnimationFallingHero
              startDelay={0.7}
              text="Developpeur Front-end"
            />
            <p className="hero__text">
              Autodidacte de 25 ans, je suis passionné par le développement web,
              le design et l&apos;accessibilité depuis mes 16 ans
            </p>
            <CVButton />
          </div>
          <aside className="aside">
            <div className="blob">
              <Image
                src="/william.jpg"
                alt="Photo de William vue de face et un font végétale verdoyant"
                width={400}
                height={400}
                style={{ objectFit: "cover" }}
              />
            </div>
          </aside>
        </section>
        <div className="hero--icons--arrow">
          <IconsHero />
        </div>
      </div>
    </>
  );
}

export default SectionHero;
