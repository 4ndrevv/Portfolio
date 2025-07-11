
import GradientSpheres from '../components/GradientSpheres';
import TitleHeader from '../components/TitleHeader';

import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';

import React from 'react'
import { Chrono } from 'react-chrono';



export const Education = () => {

    const { t } = useTranslation();

    const customTheme = {
        primary: "#598EFF",          // Màu chính: đường line + điểm tròn (active)
        secondary: "#17151F",        // Màu phụ: điểm tròn chưa active
        cardBgColor: "#1a202c",      // Nền card (nếu muốn đổi)
        cardTitleColor: "#ffffff",   // Màu tiêu đề trong card
        detailsColor: "#ffffff",      // Màu nội dung chi tiết
        cardDetailsBackGround: "", // Mau cho detail
        cardDetailsColor: "#ffffff", //mau chu detail
      };

      const items = [
        {
          title: t('timeline.martinsellier.title'),
          cardTitle: t('timeline.martinsellier.cardTitle'),
          url: 'https://www.martinsellier.com/',
          cardSubtitle: t('timeline.martinsellier.cardSubtitle'),
          timelineContent: (
            <div className="p-4 space-y-4 text-sm ">
                <div>
                  <h3 className="text-lg font-semibold text-blue-600">{t("timeline.martinsellier.content_title_1")}</h3>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <Trans
                      i18nKey="timeline.martinsellier.content_1"
                      components={[
                        <li key="li" />,                     // <0>
                        <strong key="strong" />,             // <1>
                        <em key="em" />                      // <2>
                      ]}
                    />
                  </ul>
                  </div>
                <div>
                    <h3 className="text-lg font-semibold text-green-600">{t('timeline.martinsellier.content_title_2')}</h3>
                    <ul className="list-disc list-inside space-y-1 mt-2">
                    <Trans
                      i18nKey="timeline.martinsellier.content_2"
                      components={[
                        <li key="li" />,
                        <strong key="strong" />
                      ]}
                    />
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
          title: t('timeline.epsi.title'),
          cardTitle: t('timeline.epsi.cardTitle'),
          url: 'https://www.epsi.fr/',
          cardSubtitle: t('timeline.epsi.cardSubtitle'),
            timelineContent: (
                <div className="p-4 space-y-4 text-sm ">
                    <h3 className="text-lg font-semibold text-indigo-600">
                      {t('timeline.epsi.content_title')}
                    </h3>
                    <p className="text-base font-medium">
                      {t('timeline.epsi.content_1')}
                    </p>
                    <ul className="list-disc list-inside space-y-3">
                    <Trans
                      i18nKey="timeline.epsi.content_2"
                      components={[
                        <li key="li" />,       // <0>
                        <strong key="strong" /> // <1>
                      ]}
                    />
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
          title: t('timeline.sirius_info.title'),
          cardTitle: t('timeline.sirius_info.cardTitle'),
          url: 'https://www.facebook.com/sirius59179/',
          cardSubtitle: t('timeline.sirius_info.cardSubtitle'),
            timelineContent: (
                <div className="p-4 space-y-4 text-sm ">
                    <h3 className="text-lg font-semibold text-indigo-600">
                      {t('timeline.sirius_info.content_title')}
                    </h3>
                    <ul className="list-disc list-inside space-y-2 mt-2">
                    <Trans
                      i18nKey="timeline.sirius_info.content"
                      components={[
                        <li key="li" />,         // <0>
                        <strong key="strong" />  // <1>
                      ]}
                    />
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
          title: t('timeline.insa.title'),
          cardTitle: t('timeline.insa.cardTitle'),
          url: 'https://www.insa-hautsdefrance.fr/',
          cardSubtitle:
          t('timeline.insa.cardSubtitle'),
            timelineContent: (
                <div className="p-4 space-y-4 text-sm ">
                    <h3 className="text-lg font-semibold text-indigo-600">
                    {t('timeline.insa.content_title')}
                    </h3>
                    <ul className="list-disc list-inside space-y-2 mt-2">
                    <Trans
                      i18nKey="timeline.insa.content"
                      components={[
                        <li key="li" />,         // <0> mỗi dòng là 1 <li>
                        <strong key="strong" />  // <1> áp dụng cho các từ được làm nổi bật (Java, C++, etc.)
                      ]}
                    />
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
                title={t('education_experience')} 
                number="02"
                text={t('sub_education_experience')}
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
                    mode="VERTICAL_ALTERNATING">  
                    </Chrono>
                </div>
            </div>
        </div>
    </section>
  )
}
