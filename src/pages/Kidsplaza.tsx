/* eslint-disable prettier/prettier */
import { SwiperSlide } from 'swiper/react';
import SwiperWithCustomArrow from '~/features/kidsplaza/components/slider-with-custom-arrow';
import FilterOption from '~/features/kidsplaza/select-styled-component/select-styled';



function KidsplazaPage() {
    return (
        <main className='tw-px-[10%] tw-py-[5%] tw-bg-blue-100'>
            <div className='tw-grid tw-grid-cols-6 tw-gap-4'>
                <div className="tw-bg-red-100">1</div>
                <div className='tw-col-span-4'>
                    <SwiperWithCustomArrow className='tw-h-80 tw-rounded-2xl' buttonPrevClassName='-tw-left-[2%]' pagination={{ type: 'fraction' }}>
                        <SwiperSlide className='tw-bg-cyan-100'>Slide 1</SwiperSlide>
                        <SwiperSlide className='tw-bg-cyan-100'>Slide 2</SwiperSlide>
                        <SwiperSlide className='tw-bg-cyan-100'>Slide 3</SwiperSlide>
                        <SwiperSlide className='tw-bg-cyan-100'>Slide 4</SwiperSlide>
                        <SwiperSlide className='tw-bg-cyan-100'>Slide 5</SwiperSlide>
                        <SwiperSlide className='tw-bg-cyan-100'>Slide 6</SwiperSlide>
                        <SwiperSlide className='tw-bg-cyan-100'>Slide 7</SwiperSlide>
                        <SwiperSlide className='tw-bg-cyan-100'>Slide 8</SwiperSlide>
                        <SwiperSlide className='tw-bg-cyan-100'>Slide 9</SwiperSlide>
                    </SwiperWithCustomArrow>
                </div>
                <div className="tw-bg-red-100">2</div>
            </div>
            <div className='tw-mt-10 tw-flex tw-flex-wrap tw-items-center tw-gap-3 tw-mb-40'>
                <FilterOption />
                <FilterOption />
                <FilterOption />
                <FilterOption />
                <FilterOption />
                <FilterOption />
                <FilterOption />
            </div>
        </main>
    );
}

export default KidsplazaPage;
