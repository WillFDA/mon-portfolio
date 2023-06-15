'use client'
import React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion';
import SchoolComponent from '@/components/SchoolComponent';

const SectionAPropos = () => {
  return (
    <section className='about'>
        <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
        <h3 className='about-title'>A Propos de moi</h3>
    </motion.div>
    
    <motion.div
      className='about-box'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
          <div className="about-image">
            <Image
                src="/william-coeur.jpg" 
                alt="Photo de William vue de face et un font végétale verdoyant" 
                style={{objectFit: "cover"}}
                fill={true}
            />
          </div>
        <aside className='about-aside'>
          <div className='about-me'>
            <h3>Mon histoire</h3>
            <div className="about-me-paragraph">
            <p>Passionné par l'informatique et la créativité visuelle depuis mon jeune âge,
                j'ai commencé à explorer l'univers de l'infographie à seulement 11 ans.
                </p>
                <p>Mon voyage a commencé par la modélisation 3D, le montage vidéo et le traitement d'image pour 
                créer des affiches et d'autres matériaux graphiques. J'ai ensuite approfondi mes connaissances 
                dans ces domaines en poursuivant des études universitaires en impression et plurimédia. </p>

                <p>Cependant, je n'ai jamais cessé d'être intrigué par le potentiel de l'informatique. 
                C'est pourquoi en 2022, j'ai décidé de m'orienter vers le développement web, 
                en commençant une formation d'intégrateur web. Aujourd'hui, je suis fier de dire que je suis diplômé,
                avec plusieurs mois d'expérience dans le domaine, prêt à apporter ma passion et mes compétences à de nouveaux défis et projets.
                 </p>
              </div>
          </div>
        <SchoolComponent />
        </aside>
    </motion.div>
    
    
    </section>
  )
}

export default SectionAPropos