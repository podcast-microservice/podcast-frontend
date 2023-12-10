/* eslint-disable prettier/prettier */
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { SwiperSlide } from 'swiper/react';
import SwiperWithCustomArrow from '~/features/kidsplaza/components/slider-with-custom-arrow';
import FilterOption, { FilterRange } from '~/features/kidsplaza/select-styled-component/select-styled';

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
            <Slider
                range
                min={10000}
                max={5000000}
                step={10000}
                defaultValue={[10000, 5000000]}
                styles={{
                    rail: {
                        background: '#D9D9D9'
                    },
                    track: {
                        background: '#21409A'
                    },
                    handle: {
                        background: '#21409A',
                        height: 20,
                        width: 20,
                        top: 2,
                        border: 'none',
                        opacity: 1,
                        boxShadow: 'none'
                    }
                }}
            />
            <div className='tw-mt-10 tw-flex tw-flex-wrap tw-items-center tw-gap-3 tw-mb-40'>
                <FilterRange label='Khoảng giá' onSelect={(value: any) => console.log('range', value)} />
                <FilterOption label='Thương hiệu' onSelect={(value: any) => console.log('kids', value)} />
                <FilterOption label='Độ tuổi' />
                <FilterOption label='Khối lượng' />
                <FilterOption label='Dung tích' />
                <FilterOption label='Xuất xứ' />
                <FilterOption label='Hương vị' />
            </div>
        </main>
    );
}

export default KidsplazaPage;
