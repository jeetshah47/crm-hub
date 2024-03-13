import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { getJobs } from "@/app/app/jobs/apis/JobApi";
import { useParams, usePathname, useSearchParams, useRouter } from "next/navigation";

type ProjectLocalData = {
  id: string;
  label: string;
}

const ProjectGroup = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [projects, setProjects] = useState<ProjectLocalData[]>([]);

  const params = new URLSearchParams();
  const router = useRouter()
  const path = usePathname();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getJobs();
        let groupData = data.map(job => ({ id: job.id, label: job.name }))
        setProjects(groupData)
      }
      catch (error) {
        console.log(error);
        alert("Something went wrong");
      }
    }
    fetchData();
  }, [])

  const handleAddParams = (jobId: string) => {
    params.append("jobId", jobId);
    router.push(`${path}?${params}`)
  }

  return (
    <div className="h-full border rounded-3xl flex flex-col w-full absolute bg-white">
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
            handleAddParams={handleAddParams}
          />
        ))}
      </div>
      <div>

      </div>
    </div>
  );
};

export default ProjectGroup;
