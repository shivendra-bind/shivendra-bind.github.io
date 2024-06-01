import ProjecData from "../data/project-data";
import type { TProject } from "../types";

interface Props {
  date: string;
  role: string;
  company: string;
  description: string;
  techstack: string;
  work: string[];
  training?: string;
}

export const Projects = () => ProjecData.map((project: TProject) => <Project {...project} />);



const Project = ({
  date,
  role,
  company,
  description,
  techstack,
  work,
  training,
}: Props) => {
  return (
    <div className="text-gray-800 flex gap-1 flex-col text-sm mb-4 print:mb-2 font-roboto print:text-xs">
      <span className="sm:hidden print:hidden text-xs  text-gray-500 leading-tight">
        ( {date} )
      </span>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-medium mb-2 print:mb-0">
          <span className="text-cyan-600 font-oswald">{role}</span> @{company}
        </h2>
        <span className="hidden md:inline-block print:inline-block text-xs  text-gray-500 leading-tight">
          ( {date} )
        </span>
      </div>
      <p className="pl-2">{description}</p>
      <h3 className="pl-2 font-medium">Tech: {techstack}</h3>
      {training && (
        <p className="font-medium pl-2">
          <strong>Training:</strong> {training}
        </p>
      )}
      <ul className="mt-2 [list-style-type:'-'] pl-6">
        {work?.map((item, i) => (
          <li className="pl-2" key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
