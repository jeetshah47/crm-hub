import Header from "../components/core/Header/Header";
import Sidebar from "../components/core/Sidebar/Sidebar";

type AppLayoutProps = {
  children: React.ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="grid md:grid-cols-8 h-full">
      <div className="col-span-1">
        <Sidebar />
      </div>
      <div className="col-span-7 py-4 px-8 flex flex-col">
        <Header />
        <div className="py-2 flex-auto">{children}</div>
      </div>
    </div>
  );
}
