import Header from "../components/core/Header/Header";
import Sidebar from "../components/core/Sidebar/Sidebar";

type AppLayoutProps = {
  children: React.ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="grid md:grid-cols-12">
      <div className="col-span-2">
        <Sidebar />
      </div>
      <div className="col-span-10 py-4 px-8">
        <Header />
        <div className="py-2 mt-14">{children}</div>
      </div>
    </div>
  );
}
