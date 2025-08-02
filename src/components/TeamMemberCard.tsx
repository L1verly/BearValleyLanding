import { type TeamMemberCardType } from "../types/types.ts";

export const TeamMemberCard = (props: TeamMemberCardType) => {
  return (
    <div
      key={props.key}
      className="flex flex-col w-70 bg-white overflow-hidden shrink-0 shadow-xl rounded-2xl"
    >
      <img
        className="object-cover w-full"
        src={props.image.src}
        alt={props.title}
      ></img>
      <div className="p-8 text-center">
        <h3 className="text-lg font-bold tracking-wide">{props.title}</h3>
        <h3 className="text-lg font-bold tracking-wide">{props.name}</h3>
        <div className="text-sm text-gray-600">{props.description}</div>
      </div>
    </div>
  );
};

export default TeamMemberCard;

{
  /* <div className="shrink-0 w-80 bg-white rounded-2xl shadow-md overflow-hidden">
  <img
    src={newsItem.image.src}
    alt={newsItem.title}
    className="w-full h-48 object-cover"
  />
  <div className="p-8">
    <h3 className="text-center text-lg font-semibold">{newsItem.title}</h3>
    <p className="text-sm text-gray-600">{newsItem.description}</p>
  </div>
</div>; */
}
