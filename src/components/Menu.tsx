// import { role } from "@/lib/data";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        label: "Home",
        href: "/",
        visible: ["admin", "staff"],
      },
      {
        icon: "/teacher.png",
        label: "Projects",
        href: "/projects",
        visible: [ "staff"],
      },
      {
        icon: "/teacher.png",
        label: "All Projects",
        href: "/list/all-project",
        visible: ["admin"],
      },
      {
        icon: "/student.png",
        label: "Tasks",
        href: "/tasks",
        visible: ["staff"],
      },
      {
        icon: "/student.png",
        label: "All Tasks",
        href: "/list/all-tasks",
        visible: ["admin",],
      },
      
      {
        icon: "/parent.png",
        label: "Staff",
        href: "/staff",
        visible: ["admin","staff"],
      },
      {
        icon: "/parent.png",
        label: "All Staff",
        href: "/list/all-staff",
        visible: ["admin", ],
      },
      {
        icon: "/subject.png",
        label: "Admins",
        href: "/list/admins",
        visible: ["admin"],
      },
      
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/profile.png",
        label: "Profile",
        href: "/profile",
        visible: ["admin", "staff"],
      },
      {
        icon: "/setting.png",
        label: "Settings",
        href: "/settings",
        visible: ["admin", "staff"],
      },
      {
        icon: "/logout.png",
        label: "Logout",
        href: "/logout",
        visible: ["admin", "staff"],
      },
    ],
  },
];

const Menu = async () => {

  const user = await currentUser()
  const role = user?.publicMetadata.role as string
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-2" key={i.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">
            {i.title}
          </span>
          {i.items.map((item) => {
            if (item.visible.includes(role)) {
              return (
                <Link
                  href={item.href}
                  key={item.label}
                  className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight"
                >
                  <Image src={item.icon} alt="" width={20} height={20} />
                  <span className="hidden lg:block">{item.label}</span>
                </Link>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default Menu;