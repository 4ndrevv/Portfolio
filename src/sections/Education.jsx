
import GradientSpheres from '../components/GradientSpheres';
import TitleHeader from '../components/TitleHeader';

import React from 'react'
import { Chrono } from 'react-chrono';



export const Education = () => {

    const customTheme = {
        primary: "#63b3ed",          // Màu chính: đường line + điểm tròn (active)
        secondary: "#ed8936",        // Màu phụ: điểm tròn chưa active
        cardBgColor: "#1a202c",      // Nền card (nếu muốn đổi)
        cardTitleColor: "#ffffff",   // Màu tiêu đề trong card
        detailsColor: "#ffffff",      // Màu nội dung chi tiết
        cardDetailsBackGround: "", // Mau cho detail
        cardDetailsColor: "#ffffff", //mau chu detail
      };

      const items = [
        {
          title: 'September 2022 - September 2024',
          cardTitle: 'Group Martin Sellier (Rouvignies)',
          url: 'https://www.martinsellier.com/',
          cardSubtitle:
            'Alternance – Développeur Fullstack Web et Mobile',
          timelineContent: (
            <div className="p-4 space-y-4 text-sm ">
                <div>
                    <h3 className="text-lg font-semibold text-blue-600">Martin NFC - Développement d’application Web</h3>
                    <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>Développement avec <strong>PHP/Symfony</strong> (Twig, Doctrine ORM) pour enregistrer les informations des animaux via colliers NFC.</li>
                    <li>Interfaces responsives respectant les maquettes Figma avec <strong>HTML, CSS, JS, Bootstrap</strong>.</li>
                    <li>Création et intégration d’<strong>API RESTful</strong> et gestion de données via <strong>MySQL</strong>.</li>
                    <li>Utilisation de <strong>Docker</strong> pour la conteneurisation et gestion des environnements.</li>
                    <li>Respect des bonnes pratiques (<em>SOLID</em>, Clean Code) et versionnage avec <strong>GitFlow</strong>.</li>
                    <li>Rédaction de la documentation technique et des spécifications fonctionnelles.</li>
                    </ul>
                </div>
                
                <div>
                    <h3 className="text-lg font-semibold text-green-600">Martin Coach - Développement d’application iOS</h3>
                    <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>Développement d'une app <strong>iOS avec Swift et Xcode</strong> pour suivre la santé des animaux.</li>
                    <li>Développement backend et <strong>API RESTful</strong> avec <strong>Node.js</strong> pour performance optimale.</li>
                    </ul>
                </div>
            </div>
    
            ),
          media: {
            type: 'IMAGE',
            source: {
              url: 'https://www.martinsellier.com/sites/all/themes/ms2/img/logo-v2.png',
            },
          },
        },
        {
          title: 'September 2022 - September 2024',
          cardTitle: "L'école d'ingénierie informatique EPSI - Lille",
          url: 'https://www.epsi.fr/',
          cardSubtitle:
            " Expert en informatique et systèmes d'information - Master 2",
            timelineContent: (
                <div className="p-4 space-y-4 text-sm ">
                    <h3 className="text-lg font-semibold text-indigo-600">
                        Master 2 - Expert en Informatique et Systèmes d'Information
                    </h3>
                    <p className="text-base font-medium">
                        Formation centrée sur le pilotage stratégique des systèmes d'information, la data science et la gestion de projets informatiques.
                    </p>
                    <ul className="list-disc list-inside space-y-3">
                        <li>
                        <strong>Big Data &amp; Business Intelligence :</strong> statistiques descriptives, modélisation avancée, data science, visualisation et gouvernance des données.
                        </li>
                        <li>
                        <strong>Stratégie SI :</strong> veille technologique, analyse des besoins, sécurité informatique et amélioration continue.
                        </li>
                        <li>
                        <strong>Gestion de projets agiles :</strong> management d’équipes multiculturelles à distance et conduite de projets SI.
                        </li>
                        <li>
                        <strong>Développement professionnel &amp; innovation :</strong> leadership, coopération et communication en environnement professionnel.
                        </li>
                    </ul>
                </div>


                ),
          media: {
            type: 'IMAGE',
            source: {
              url: 'https://sarcdprodstrapi.blob.core.windows.net/strapi-media/assets/logo_epsi_8b6f0271b8.png',
            },
          },
        },
        {
          title: 'April 2022 - June 2022',
          cardTitle: 'Société Sirius-Info (Fenain)',
          url: 'https://www.facebook.com/sirius59179/',
          cardSubtitle:
            'Stagiaire - Développeur Odoo ERP',
            timelineContent: (
                <div className="p-4 space-y-4 text-sm ">
                    <h3 className="text-lg font-semibold text-indigo-600">
                    Développement ERP – Odoo
                    </h3>
                    <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>
                        Analyse des besoins métiers et développement de fonctionnalités personnalisées dans <strong>Odoo ERP</strong> avec <strong>Python</strong>.
                    </li>
                    <li>
                        Personnalisation des modules, automatisation des processus métier.
                    </li>
                    <li>
                        Participation aux <strong>sprints Agile (Scrum/Kanban)</strong> : planification, revues de code, et amélioration continue.
                    </li>
                    <li>
                        Collaboration étroite avec les équipes fonctionnelles et techniques pour assurer la cohérence et la qualité des solutions livrées.
                    </li>
                    </ul>
                </div>
                ),
          media: {
            type: 'IMAGE',
            source: {
              url: 'https://www.captivea.com/web/image/328343-c93eb198/SIRIUS-INFO.jfif',
            },
          },
        },
        {
          title: 'September 2021 – July 2022',
          cardTitle: 'INSA Hauts-de-France',
          url: 'https://www.insa-hautsdefrance.fr/',
          cardSubtitle:
            'Licence Sciences,Technologies, Santé mention Informatique- BAC +3',
            timelineContent: (
                <div className="p-4 space-y-4 text-sm ">
                    <h3 className="text-lg font-semibold text-indigo-600">
                        Licence Informatique – INSA Hauts-de-France
                    </h3>
                    <ul className="list-disc list-inside space-y-2 mt-2">
                        <li>
                        Formation généraliste couvrant algorithmique, programmation (Java, C++), architecture des ordinateurs, systèmes d’exploitation, réseaux et bases de données.
                        </li>
                        <li>
                        Développement de compétences transversales : gestion de projet, communication, travail en équipe et autonomie.
                        </li>
                        <li>
                        Mise en pratique via de nombreux travaux dirigés, projets techniques et professionnels.
                        </li>
                        <li>
                        Réalisation de stages en entreprise, favorisant l’expérience terrain et l’ouverture au monde professionnel.
                        </li>
                        <li>
                        Préparation à la poursuite d’études en Master ou à une insertion rapide dans le secteur informatique.
                        </li>
                    </ul>
                </div>
                ),
          media: {
            type: 'IMAGE',
            source: {
              url: 'https://www.insa-hautsdefrance.fr/sites/default/files/media/2022-01/insa-logo.svg',
            },
          },
        },
        
        // ... more items
      ];


  return (
    <section id="education" className='w-full h-full flex-center relative'>
        <GradientSpheres 
            sphere1Class={"projects-gradient-sphere projects-sphere-1"}
            sphere2Class={"projects-gradient-sphere projects-sphere-2"}
        />

        <div className="w-full md:my-40 my-20 relative z-10">
            <div className="container mx-auto md:p-0 px-5">
            <TitleHeader 
                title="EDUCATION & EXPERIENCE" 
                number="02"
                text="Shaped by years of learning and training"
            />
            </div>
            <div className=" md:mt-20 mt-10 z-10">
                <div className=' w-full h-full flex justify-center'>
                    <Chrono 
                    useReadMore={false} 
                    theme={customTheme}
                    disableToolbar={true} 
                    items={items} 
                    enableBreakPoint
                    timelinePointDimension={50}
                    lineWidth={10}
                    responsiveBreakPoint={1024}
                    //textOverlay
                    mode="VERTICAL_ALTERNATING">  
                    </Chrono>
                </div>
            </div>
        </div>
    </section>
  )
}
