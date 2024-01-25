import Sidebar from "../components/core/Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="bg-white col-span-2">
        <Sidebar />
      </div>

    </div>
  );
};

export default Dashboard;
