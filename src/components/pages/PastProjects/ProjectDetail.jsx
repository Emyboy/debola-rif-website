import React, { useState } from 'react';
import { NextSeo, ArticleJsonLd } from 'next-seo';
import moment from 'moment';
import Image from 'next/image';
import RichText from '../../RichText';
import HeroBanner2 from '@/components/layout/HeroLayout';
import ContainLayout from '@/components/layout/ContainerLayout';

const ProjectDetail = ({ details }) => {
  const [openModal, setOpenModal] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <>
      <NextSeo
        title={details?.data?.title}
        openGraph={{
          title: details?.data?.title,
          images: details?.data?.images?.slice(0, 5).map((item) => ({
            url: item.image.url,
            width: item.image.dimensions?.width,
            height: item.image.dimensions?.height,
          })),
          type: 'article',
          url: `https://rif.ng/past-project/${details.uid}`,
        }}
      />

      <ArticleJsonLd
        title={details?.data?.title}
        url={`https://rif.ng/past-project/${details.uid}`}
        images={details?.data?.images
          ?.slice(0, 5)
          .map((item) => item.image.url)}
      />
  <HeroBanner2 title='project Details' />
<ContainLayout>
<div className="grid grid-cols-1 gap-6 py-10 md:grid-cols-2 xl:grid-cols-2">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="causes-image-container cause-details-container relative">
            <Image
              src={details.data?.featured_image?.url}
              alt="Event Image"
              width={details.data?.featured_image?.dimensions?.width}
              height={details.data?.featured_image?.dimensions?.height}
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-opacity-75 bg-black text-white">
              <h3 className="text-xl font-bold">{details?.data?.title}</h3>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg">
          <div className="p-4">
            <p className="text-gray-600">
              <i className="flaticon-pin mr-2"></i> {details?.data?.location}
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg">
          <div className="p-4">
            <h3 className="text-xl font-bold text-green-shad2">{details?.data?.title}</h3>
            <RichText field={details?.data?.description} />
          </div>
        </div>

        </div>

 

       
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-4">
            <h3 className="text-xl font-semibold">Images from the Event</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {details?.data?.images?.map((item, index) => (
              <div
                key={index}
                className="relative bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <Image
                  width={item?.image?.dimensions?.width}
                  height={item?.image?.dimensions?.height}
                  src={item?.image.url}
                  alt="Gallery Image"
                  className="object-cover w-full h-64"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-opacity-75 bg-black text-white transition duration-300 opacity-0 hover:opacity-100">
                  <a
                    onClick={() => {
                      setOpenModal(true);
                      setCurrentImage(item?.image.url);
                      setCurrentImageIndex(index);
                    }}
                    className="cursor-pointer"
                  >
                    <i className="flaticon-plus text-4xl"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
</ContainLayout>
      {/* Add Modal component here */}
    </>
  );
};

export default ProjectDetail;
