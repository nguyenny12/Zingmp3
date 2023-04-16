import React from 'react';
import { Outlet } from 'react-router-dom';
import { SlidebarLeft, SlidebarRight } from '../../components';

export default function Public() {
	return (
		<div className='w-full flex '>
			<div className='w-[240px] border-dashed border-2 border-sky-500'>
				<SlidebarLeft />
			</div>
			<div className='flex-auto'>
				<Outlet />
			</div>

			<div className='w-[329px] flex-none '>
				<SlidebarRight />
			</div>
		</div>
	);
}
