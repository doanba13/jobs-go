import React from 'react';
import CardCarousel from 'screens/components/CardCarousel';
import ScreenLayout from 'screens/components/layout/ScreenLayout';

//
const data = [
    {
        title: 'FrontEnd Developer',
        company: 'Reddit.co',
        tags: ['Senior', 'Full-time', 'Developer'],
        location: 'Cau Giay, Hanoi',
        salary: '2000-5000',
    },
    {
        title: 'BackEnd Developer',
        company: 'Giao hàng tiết kiệm',
        tags: ['Junior', 'Part-time', 'Senior'],
        location: 'Cau Giay, Hanoi',
        salary: 'Upto 8000',
    },
    {
        title: 'Project Manager',
        company: 'Viettel',
        tags: ['Full-time'],
        location: 'Hoan Kiem, Hanoi',
        salary: '1500-2000',
    },
    {
        title: 'Accountance',
        company: 'JWC.Co',
        tags: ['Full-time', 'Leader'],
        location: 'Hoan Kiem, Hanoi',
        salary: '2000-5000',
    },
    {
        title: 'DevOps',
        company: 'Facebook',
        tags: ['Senior', 'Full-time', 'Developer'],
        location: 'My Tho',
        salary: '200',
    },
];

export const SuggestedJob = () => {
    return (
        <ScreenLayout title={'Suggested Jobs'} desc={'Hey! Let\'s discover our suggested jobs for you.'}>
            <CardCarousel data={data} title={'Jobs you have experience'}/>
            <CardCarousel data={data} title={'Jobs near you'}/>
        </ScreenLayout>
    );
};
