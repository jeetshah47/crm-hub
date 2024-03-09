import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { getJobs } from "@/app/app/jobs/apis/JobApi";

type ProjectLocalData = {
  id: string;
  label: string;
  isActive: boolean;
}

const ProjectGroup = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [projects, setProjects] = useState<ProjectLocalData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getJobs();
        let groupData = data.map(job => ({ id: job.id, label: job.name, isActive: false }))
        setProjects(groupData)
      }
      catch (error) {
        console.log(error);
        alert("Something went wrong");
      }
    }
    fetchData();
  }, [])

  return (
    <div className="h-full border rounded-3xl flex flex-col w-full absolute">
      <div className="flex-initial">
        <div className="px-6 py-4 flex items-center justify-between w-full">
          <p className="font-bold">Current Projects</p>
          <Link
            className="bg-primary-blue text-white p-2 rounded-xl"
            href={"/app/jobs/add-job"}
          >
            <Icon icon={"streamline:add-1-solid"} />
          </Link>
        </div>
        <div className="h-px bg-blue-chalk" />
      </div>
      <div className="px-2 py-2  overflow-auto flex-auto">
        {projects.map((filter) => (
          <ProjectCard
            key={filter.id}
            label={filter.label}
            id={filter.id}
            isActive={filter.isActive}
          />
        ))}
      </div>
      <div>

      </div>
    </div>
  );
};

export default ProjectGroup;
