import Header from "../components/core/Header/Header";
import Sidebar from "../components/core/Sidebar/Sidebar";

type AppLayoutProps = {
  children: React.ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="h-full">
      <div className="px-8 flex flex-col h-full">
        <Header />
        <div className="py-2 flex-auto">{children}</div>
      </div>
    </div>
  );
}
