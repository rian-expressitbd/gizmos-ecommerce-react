const teamMembers = [
  {
    img: "/team-img1.jpg",
    role: "CEO/Founder",
    name: "Anna Cooper",
  },
  {
    img: "/team-img2.jpg",
    role: "Marketing Lead",
    name: "James Smith",
  },
  {
    img: "/team-img3.jpg",
    role: "Tech Lead",
    name: "Sarah Johnson",
  },
  {
    img: "/team-img4.jpg",
    role: "Product Designer",
    name: "Michael Brown",
  },
  {
    img: "/team-img5.jpg",
    role: "Full Stack Developer",
    name: "Emily Davis",
  },
  {
    img: "/team-img6.jpg",
    role: "HR Manager",
    name: "Daniel Wilson",
  },
];

export default function Teams() {
  return (
    <div className="bg-[#F3F6FB]">
      <div className="mx-auto w-[90%] py-10">
        <h1 className="text-5xl font-semibold py-5">Our Team</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mt-[30px] mb-[30px]">
          {teamMembers.map((member, index) => (
            <div className="flex flex-col" key={index}>
              <img className="rounded-[15px]" src={member.img} alt={member.name} />
              <h5 className="text-md mt-4">{member.role}</h5>
              <h6 className="text-sm font-bold mt-2">{member.name}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
