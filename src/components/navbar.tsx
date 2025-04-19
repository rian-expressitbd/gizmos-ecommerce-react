import { MdPointOfSale } from "react-icons/md";
import { Link } from "react-router";
import { notificationsData } from "../config/notification.config";
import NotificationsDropdown from "./notification-btn";
import { SidebarToggler } from "./sidebarToggler";
import ThemeToggler from "./themeToggler";
import { Icon } from "./ui/icon";
import { UserBox } from "./user-box";
interface NavbarProps {
  className?: string;
}
export const Navbar = ({ className }: NavbarProps) => {
  return (
    <header
      className={`${className} fixed top-0 left-0 right-0 p-5 flex bg-white  dark:bg-gray-700 z-50  justify-between items-center  transition-all  `}
      style={{ boxShadow: "0px 3px 3px -3px rgba(0, 0, 0, 0.1)" }}
    >
      <div className='flex gap-3 items-center dark:text-white'>
        <SidebarToggler />
        <h1 className='text-2xl font-pollinator'>CalQuick</h1>
      </div>
      <div className='text-xl flex items-center gap-2 sm:gap-5'>
        <Link to='/POS'>
          <button
            title='POS'
            className='relative p-2 rounded-full bg-gray-200 hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-500 cursor-pointer transition-colors text-primary dark:text-white '
          >
            <Icon icon={MdPointOfSale} size={20} />
          </button>
        </Link>
        <NotificationsDropdown notifications={notificationsData} />
        {/* <ThemeColorPicker /> */}
        <ThemeToggler />
        <UserBox />
      </div>
    </header>
  );
};

// <header
//   className={`${className} flex items-center min-h-[6vh] h-full lg:min-h-[10vh] shadow-sm sticky top-0 z-50 bg-transparent `}
// >
//   <div className='flex items-center gap-2 bg-primary/100  min-w-48 lg:min-w-64 lg:w-64 h-full px-2'>
//     <SidebarToggler />
//     <div className='text-xl text-nowrap '>ExpressItBd Dashboard</div>
//   </div>
//   <div className='w-full grid grid-cols-1 lg:grid-cols-2 p-2'>
//     <div className='hidden lg:block'>
//       <SearchInput />
//     </div>
//     <div className='flex gap-2 place-self-end items-center'>
//       <Link to='/POS'>
//         <Button
//           title='POS'
//           variant='outline'
//           className='relative p-2 rounded-full bg-gray-200 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-500 cursor-pointer transition-colors text-primary'
//         >
//           <Icon icon={MdPointOfSale} size={20} />
//         </Button>
//       </Link>
//       <NotificationsDropdown notifications={notificationsData} />
//       <ThemeToggler />
//       <UserBox />
//     </div>
//   </div>
// </header>
{
  /* Header */
}
