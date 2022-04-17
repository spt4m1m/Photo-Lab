import React from 'react';
import wild from '../../img/wild.jpg'
import star from '../../img/star.jpg'
import dog from '../../img/dog.jpg'
import boat from '../../img/boat.jpg'
import snow from '../../img/snow.jpg'
import flower from '../../img/flower.jpg'

const ImageGallery = () => {
    return (
        <div>
            <section className="services">
                <div class="flex flex-col text-center w-full md:mt-[5rem]">
                    <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900 font-serif md:text-6xl"><span className='text-blue-500'>I</span>mages</h1>
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">These my some of images I have captured !</p>

                </div>
                <section class="overflow-hidden text-gray-700">
                    <div class="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
                        <div class="flex flex-wrap -m-1 md:-m-2">
                            <div class="flex flex-wrap w-1/2">
                                <div class="w-1/2 p-1 md:p-2">
                                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                        src={wild} />
                                </div>
                                <div class="w-1/2 p-1 md:p-2">
                                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                        src={star} />
                                </div>
                                <div class="w-full p-1 md:p-2">
                                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                        src={dog} />
                                </div>
                            </div>
                            <div class="flex flex-wrap w-1/2">
                                <div class="w-full p-1 md:p-2">
                                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                        src={boat} />
                                </div>
                                <div class="w-1/2 p-1 md:p-2">
                                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                        src={snow} />
                                </div>
                                <div class="w-1/2 p-1 md:p-2">
                                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                        src={flower} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    );
};

export default ImageGallery;