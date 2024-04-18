import PostCard from "@/components/PostCard";
import SideNav from "@/components/SideNav";
export default function Home() {
  return (
    <div className=" grid grid-cols-12 h-screen w-screen">
      <div className=" col-span-2 h-full overflow-auto scroll-">
        <SideNav />
      </div>
      <div className=" col-span-6  h-full border-r-2 border-l-2 border-slate-500">
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
      <div className=" col-span-5 h-full"></div>
    </div>
  );
}
