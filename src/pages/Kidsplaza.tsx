/* eslint-disable prettier/prettier */
import SwiperWithCustomArrow from '~/features/kidsplaza/components/slider-with-custom-arrow';
import { SwiperSlide } from 'swiper/react';



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
            <SwiperWithCustomArrow className='tw-h-56 tw-mt-5 tw-w-[calc(100%+40px)] tw--ml-5 tw-px-5'
                slidesPerView={3}
                spaceBetween={20}
                pagination={{ type: 'progressbar' }}
                buttonPrevClassName='tw--left-0'
                buttonNextClassName='tw--right-0'>
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
            <SwiperWithCustomArrow className='tw-h-56 tw-mt-5 tw-w-[calc(100%+40px)] tw--ml-5 tw-px-5'
                spaceBetween={20}
                buttonPrevClassName='tw--left-0'
                buttonNextClassName='tw--right-0'>
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
        </main>
    );
}

export default KidsplazaPage;
