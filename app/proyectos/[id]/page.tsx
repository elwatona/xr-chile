import { notFound } from 'next/navigation';
import { projects } from '@/app/data/projects';
import Image from 'next/image';

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === Number(params.id));

  if (!project) {
    return notFound();
  }

  return (
    <div className="p-8 w-full flex flex-col items-center">
      <div className='text-center'>
        <h1 className="text-6xl font-bold mb-2">{project.title}</h1>
      </div>
      <div className="w-full max-w-7xl h-64 md:h-96 lg:h-128 relative">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="prose mt-6 max-w-3xl w-full">
        <p>{project.text}</p>
      </div>
    </div>
  );
}