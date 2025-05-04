// import { AnimatePresence, motion } from "framer-motion";
// import { useEffect, useRef, useState } from "react";
// import { FaCaretDown, FaCaretUp } from "react-icons/fa";
// import { MdLogout } from "react-icons/md";
// import { NavLink, useNavigate } from "react-router-dom";
// import { menuItems } from "../config/routes.config";
// import { useSidebar } from "../hooks/useSidebar";
// import { logout } from "../lib/features/auth/authSlice";
// import { useAppDispatch } from "../lib/hooks";

// interface SidebarProps {
//   className?: string;
// }

// export const Sidebar = ({ className }: SidebarProps) => {
//   const { isSidebarOpen, isDesktop, close } = useSidebar();
//   const sidebarRef = useRef<HTMLDivElement>(null);
//   const [openMenus, setOpenMenus] = useState<string[]>([]);
//   const dispatch = useAppDispatch();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       const togglerRef = document.getElementById("sidebar-toggler");
//       if (
//         sidebarRef.current &&
//         !sidebarRef.current.contains(event.target as Node) &&
//         togglerRef &&
//         !togglerRef.contains(event.target as Node)
//       ) {
//         close();
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [close]);

//   const toggleMenu = (title: string) => {
//     setOpenMenus((prev) => (prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]));
//   };

//   const handleLogout = () => {
//     dispatch(logout());
//     navigate("/login");
//     close(); // Close sidebar after logout
//   };

//   const sidebarContent = (
//     <ul className='space-y-2 max-h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 px-2 dark:bg-black'>
//       {menuItems.map((item) => (
//         <li key={item.title}>
//           {item.submenu ? (
//             <>
//               <div
//                 onClick={() => toggleMenu(item.title)}
//                 className='flex items-center justify-between cursor-pointer p-2 rounded text-gray-700 dark:text-white dark:hover:bg-gray-600 hover:bg-blue-500 hover:text-white'
//               >
//                 <div className='flex items-center gap-2'>
//                   {item.icon && <item.icon className='mr-2' />}
//                   <span className='font-medium'>{item.title}</span>
//                 </div>
//                 {openMenus.includes(item.title) ? <FaCaretUp /> : <FaCaretDown />}
//               </div>
//               <motion.ul
//                 className='ml-4 space-y-1 overflow-hidden'
//                 initial={{ height: 0, opacity: 0 }}
//                 animate={{
//                   height: openMenus.includes(item.title) ? "auto" : 0,
//                   opacity: openMenus.includes(item.title) ? 1 : 0,
//                 }}
//                 exit={{ height: 0, opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 {item.submenu.map((sub) => (
//                   <li key={sub.title}>
//                     <NavLink
//                       to={sub.path}
//                       className={({ isActive }) =>
//                         `flex items-center gap-2 p-2 rounded ${
//                           isActive
//                             ? "bg-blue-600 text-white"
//                             : "text-gray-700 hover:bg-blue-500 hover:text-white dark:text-white dark:hover:bg-gray-600"
//                         }`
//                       }
//                     >
//                       {sub.icon && <sub.icon className='mr-2' />}
//                       {sub.title}
//                     </NavLink>
//                   </li>
//                 ))}
//               </motion.ul>
//             </>
//           ) : (
//             <NavLink
//               to={item.path!}
//               className={({ isActive }) =>
//                 `flex items-center gap-2 p-2 rounded font-medium ${
//                   isActive
//                     ? "bg-blue-600 text-white"
//                     : "text-gray-700 hover:bg-blue-500 hover:text-white dark:text-white dark:hover:bg-gray-600"
//                 }`
//               }
//             >
//               {item.icon && <item.icon className='mr-2' />}
//               {item.title}
//             </NavLink>
//           )}
//         </li>
//       ))}
//       <li
//         onClick={handleLogout}
//         className='flex items-center gap-2 p-2 rounded cursor-pointer font-medium text-gray-700 dark:text-white hover:bg-blue-500 hover:text-white'
//       >
//         <MdLogout size={24} />
//         <span>Sign Out</span>
//       </li>
//     </ul>
//   );

//   const adminInfo = (
//     <div className='text-gray-500 dark:text-white py-12 text-center'>
//       <p className='text-xl font-medium text-gray-700 capitalize dark:text-white dark:hover:bg-gray-600'>Admin</p>
//       <h2 className='font-medium'>
//         Expiry: <span>22/05/2025</span>
//       </h2>
//     </div>
//   );

//   return (
//     <AnimatePresence>
//       <aside className=''>
//         {isDesktop ? (
//           <motion.div
//             key='sidebar-desktop'
//             className={`fixed lg:relative inset-0 left-0 bottom-0 p-2 bg-base-200 text-base-content w-64 min-h-screen
//               transition-colors duration-300 bg-white dark:bg-black dark:text-white
//               ${isSidebarOpen ? "block" : "hidden"} ${className}`}
//             initial={{ x: "-100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "-100%" }}
//             transition={{ type: "easeInOut", duration: 0.5 }}
//           >
//             {adminInfo}
//             {sidebarContent}
//           </motion.div>
//         ) : (
//           isSidebarOpen && (
//             <motion.div
//               key='sidebar-mobile'
//               ref={sidebarRef}
//               className={`fixed inset-0 top-0 left-0 bottom-0 p-2 min-h-screen bg-white dark:bg-gray-800 w-64 overflow-y-scroll scrollbar-none transition-colors duration-300 shadow-2xl ${className}`}
//               initial={{ x: "-100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "-100%" }}
//               transition={{ type: "easeInOut", duration: 0.3 }}
//             >
//               {adminInfo}
//               <div className=''>{sidebarContent}</div>
//             </motion.div>
//           )
//         )}
//       </aside>
//     </AnimatePresence>
//   );
// };
