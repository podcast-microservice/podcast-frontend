/* eslint-disable prettier/prettier */
import 'rc-slider/assets/index.css';
import { useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import SwiperWithCustomArrow from '~/features/kidsplaza/components/slider-with-custom-arrow';
import FilterRangeProduct from '~/features/kidsplaza/select-styled-component/filter-range';
import FilterOption, { FilterRange } from '~/features/kidsplaza/select-styled-component/select-styled';
import TestSlider from '~/features/kidsplaza/select-styled-component/test-slider';

function KidsplazaPage() {
    console.log('range kids rerender');
    const [values, setValues] = useState([10000, 5000000]);
    const handleChangeSlider = (values: number[]) => {
        setValues(values);
    };
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
            <TestSlider values={values} onChangeSlider={handleChangeSlider} />
            <div className='tw-mt-10 tw-flex tw-flex-wrap tw-items-center tw-gap-3 tw-mb-40'>
                <FilterRangeProduct
                    defaultValue={[10000, 5000000]}
                    label='Khoảng giá'
                    onSelect={(values: number[]) => console.log('filter range', values)}
                    onSave={(values: number[]) => console.log('Xem ket qua', values)}
                />
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
