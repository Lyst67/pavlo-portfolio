'use client';

import WorkList from '@/app/components/workList';
import { otherProjects } from '@/lib/projects';
import { LuArrowUpToLine } from 'react-icons/lu';

export default function Others() {
  return (
    <div className="px-8 md:px-12">
      <WorkList projectList={otherProjects} />
      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
        }
        className="animate-bounce block my-10 mx-auto text-salad"
      >
        <LuArrowUpToLine className="w-10 h-10" />
      </button>
    </div>
  );
}
