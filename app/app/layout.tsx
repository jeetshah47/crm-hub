import Header from "../components/core/Header/Header";
import Sidebar from "../components/core/Sidebar/Sidebar";

type AppLayoutProps = {
  children: React.ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <div className="md:h-full max-sm:hidden">
        <div className="flex flex-row h-full">
          <div className="flex-initial border border-red-200  h-full relative">
            <Sidebar />
          </div>
          <div className="py-2 flex-auto px-6">
            <div className="flex flex-col h-full">
              <Header />
              {children}
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden max-sm:block text-center text-primary-blue font-bold ">
        <p>Open in Pc for better view</p>
      </div>
    </>
  );
}
