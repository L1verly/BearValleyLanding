import { type TeamMemberType } from "../types/types.ts";

const TeamMember = (props: TeamMemberType) => {
  return (
    <div className="flex flex-col w-80 bg-white overflow-hidden">
      <img
        className="object-cover"
        src={props.image.src}
        alt={props.title}
      ></img>
      <div className="p-8 text-center">
        <h3 className="text-lg font-bold tracking-wide"></h3>
        <div className="text-sm text-gray-600"></div>
      </div>
    </div>
  );
};

export default TeamMember;

{/* <div className="shrink-0 w-80 bg-white rounded-2xl shadow-md overflow-hidden">
  <img
    src={newsItem.image.src}
    alt={newsItem.title}
    className="w-full h-48 object-cover"
  />
  <div className="p-8">
    <h3 className="text-center text-lg font-semibold">{newsItem.title}</h3>
    <p className="text-sm text-gray-600">{newsItem.description}</p>
  </div>
</div>; */}
