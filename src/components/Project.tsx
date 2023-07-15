import React from "react";

interface Props {
  date: string;
  role: string;
  company: string;
  description: string;
  techstack: string;
  work: string[];
  training?: string;
}

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
    <div className="text-gray-800 flex gap-1 flex-col text-sm mb-4 font-roboto">
      <span className="text-xs font-medium text-gray-600 leading-tight">
        ( {date} )
      </span>
      <h2 className="text-xl font-medium mb-2">
        <span className="text-cyan-600 font-oswald">{role}</span> @{company}
      </h2>
      <p className="pl-2">{description}</p>
      <h3 className="pl-2 font-medium">Tech: {techstack}</h3>
      {training && <p className="font-medium pl-2"><strong>Training:</strong> {training}</p>}
      <ul className="mt-2 [list-style-type:'-'] pl-6">
        {work?.map((item) => (
          <li className="pl-2">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Project;
