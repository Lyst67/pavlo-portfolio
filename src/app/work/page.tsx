'use client';

import Link from 'next/link';
import { projects } from '@/lib/projects';
import { usePathname } from 'next/navigation';
import WorkList from '../components/workList';
import { GoArrowDownRight } from 'react-icons/go';

export default function Portfolio() {
  const currentPath = usePathname();
  const isPathOthers = currentPath.endsWith('/others');
  return (
    <div className="px-8 py-10 md:px-12">
      <div className="mb-5 md:mb-10">
        <h2 className="mb-4 md:mb-6 font-semibold text-2xl sm:text-3xl md:text-4xl tracking-tighter">
          Featured Projects
        </h2>
        <p className="text-sm w-full sm:w-4/5 md:w-96">
          Here are some of the selected projects that showcase my passion for front-end/back-end
          development.
        </p>
      </div>
      <div>
        <WorkList projectList={projects} />
        {!isPathOthers && (
          <div className="w-fit mx-auto mt-10 text-center uppercase text-salad duration-300 transform hover:scale-110">
            <Link className="flex gap-2 items-center" href={'/work/others'}>
              <span>view more</span>
              <GoArrowDownRight className="w-5 h-5" />
            </Link>
            <hr className="w-full h-[1px] border-solid border-salad" />
          </div>
        )}
      </div>
    </div>
  );
}
