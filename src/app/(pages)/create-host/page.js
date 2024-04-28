'use client'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from 'swiper/modules'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import 'swiper/css/navigation'
import Image from 'next/image';
import { Input } from '@/components/ui/input';
export default function page() {

    const [active, setActive] = useState('create')
    const [game_list, setGameList] = useState([
        {
            img: 'https://upload.wikimedia.org/wikipedia/en/f/f2/CS2_Cover_Art.jpg',
            title: 'test'
        },
        {
            img: 'https://upload.wikimedia.org/wikipedia/en/f/f2/CS2_Cover_Art.jpg',
            title: 'test'
        },
        {
            img: 'https://upload.wikimedia.org/wikipedia/en/f/f2/CS2_Cover_Art.jpg',
            title: 'test'
        },
        {
            img: 'https://upload.wikimedia.org/wikipedia/en/f/f2/CS2_Cover_Art.jpg',
            title: 'test'
        },
        {
            img: 'https://upload.wikimedia.org/wikipedia/en/f/f2/CS2_Cover_Art.jpg',
            title: 'test'
        },
        {
            img: 'https://upload.wikimedia.org/wikipedia/en/f/f2/CS2_Cover_Art.jpg',
            title: 'test'
        },
        {
            img: 'https://upload.wikimedia.org/wikipedia/en/f/f2/CS2_Cover_Art.jpg',
            title: 'test'
        },
        {
            img: 'https://upload.wikimedia.org/wikipedia/en/f/f2/CS2_Cover_Art.jpg',
            title: 'test'
        },
        {
            img: 'https://upload.wikimedia.org/wikipedia/en/f/f2/CS2_Cover_Art.jpg',
            title: 'test'
        },
    ])

    return <section className='w-full h-full text-white rounded flex flex-col gap-0'>
        <div className='w-fit h-[45px] min-h-[45px] bg-[#1c1c1c] rounded-t flex flex-row overflow-hidden'>
            <div onClick={() => {setActive('create')}} className={`flex justify-center items-center px-5 py-1 ${active === 'create' && 'bg-[#3c3c3c]'} cursor-pointer hover:bg-[#202020] transition-all border-r border-r-[#414749]`}>
                Create host
            </div>
            <div onClick={() => {setActive('list')}} className={`flex justify-center items-center px-5 py-1 ${active === 'list' && 'bg-[#3c3c3c]'} cursor-pointer hover:bg-[#202020] transition-all`}>
                Host list
            </div>
        </div>
        <div className='w-full h-full bg-[#1c1c1c] rounded-b rounded-tr p-10 gap-5 flex flex-col overflow-auto'>
            {
                active === 'create' && <div className='w-full h-full flex flex-col gap-5'>
                    <Swiper
                        slidesPerView={6} 
                        spaceBetween={10}
                        modules={[Navigation, FreeMode]} 
                        freeMode={true} 
                        navigation={true} 
                        className="w-full h-fit"
                        >
                        {game_list.map((x, i) => (
                            <SwiperSlide key={i}>
                            <div
                                key={i}
                                className="relative rounded overflow-hidden cursor-pointer w-[203px] h-[203px] group"
                            >
                                <div className="h-full absolute w-full bg-gradient-to-b from-[#2B292913] to-black z-20" />
                                <Image
                                    src={x.img}
                                    alt={x.title}
                                    fill
                                    style={{objectFit: 'cover', borderRadius: '0px !important'}}
                                    className="z-10 rounded group-hover:brightness-125 transition-all"
                                />
                                <div className="absolute left-0 bottom-0 p-3 w-full z-30 space-y-3">
                                <div className="font-bold">{x.title}</div>
                                {/* <div className="flex justify-between">
                                    <div className="flex items-center gap-1">
                                    <div className="font-bold text-xs pt-0.5">4.0</div>
                                    <Icon icon="material-symbols:star" className="h-4 w-4" />
                                    </div>
                                    <div className="bg-[#29292F] rounded font-bold text-xs px-2 py-[2px]">
                                    FREE
                                    </div>
                                </div> */}
                                </div>
                            </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className='flex flex-row w-full h-fit gap-16'>
                        <div className='flex flex-col w-full gap-4'>
                            <div className='flex flex-row gap-4'>
                                <span className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>Game mode:</span>
                                <RadioGroup className='flex flex-row gap-10'>
                                    <div className='flex flex-row items-center gap-2'>
                                        <RadioGroupItem id='bounty' value='bounty'/>
                                        <Label htmlFor='bounty'>Bounty run</Label>
                                    </div>
                                    <div className='flex flex-row items-center gap-2'>
                                        <RadioGroupItem id='tournament' value='tournament'/>
                                        <Label htmlFor='tournament'>Tournament</Label>
                                    </div>
                                </RadioGroup>
                            </div>
                            <div className='flex flex-row gap-10'>
                                <div className='flex flex-row gap-4 items-center'>
                                    <span className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>Round:</span>
                                    <Input type='number' placeholder='round'/>
                                </div>
                                <div className='flex flex-row gap-4 items-center'>
                                    <span className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 whitespace-nowrap'>Round time:</span>
                                    <Input type='number' placeholder='round'/>
                                </div>
                            </div>
                            <div className='flex flex-row gap-4 items-center'>
                                <span className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 whitespace-nowrap'>Date and Time:</span>
                                <Input type='number' placeholder='round'/>
                            </div>
                            <div className='flex flex-row gap-4 items-center'>
                                <span className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 whitespace-nowrap'>Name:</span>
                                <Input type='number' placeholder='round'/>
                            </div>
                            <div className='flex flex-row gap-4 items-center'>
                                <span className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 whitespace-nowrap'>description:</span>
                                <Input type='number' placeholder='round'/>
                            </div>
                            <div className='flex flex-row gap-10'>
                                <div className='flex flex-row gap-4 items-center'>
                                    <span className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>Buy in:</span>
                                    <Input type='number' placeholder='round'/>
                                </div>
                                <div className='flex flex-row gap-4 items-center'>
                                    <span className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 whitespace-nowrap'>Free roll:</span>
                                    <Input type='number' placeholder='round'/>
                                </div>
                            </div>
                            <div className='flex flex-row gap-4 items-center'>
                                <span className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 whitespace-nowrap'>Players:</span>
                                <Input type='number' placeholder='round'/>
                            </div>
                            <div className='flex flex-row gap-4 items-center'>
                                <span className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 whitespace-nowrap'>Interval:</span>
                                <Input type='number' placeholder='round'/>
                            </div>
                        </div>
                        <div className='flex flex-col w-[400px] min-w-[400px] px-10 py-2 border-l-2 border-l-[#313739]'>
                            
                        </div>
                    </div>
                    <div className='w-full flex justify-end'>
                        <button className='flex items-center justify-center px-10 py-2 text-base font-bold bg-sky-600 rounded hover:bg-sky-700'>
                            CREATE
                        </button>
                    </div>
                </div>
            }
            {
                active === 'list' && <span>
                    asdasd
                </span>
            }
        </div>
    </section>
}
