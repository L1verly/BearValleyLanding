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
      <div className="flex flex-col gap-2.5 pb-8 px-8 py-4 text-center font-sans">
        <h3 className="text-xl tracking-wide">{props.name}</h3>
        <h3 className="text-base font-bold uppercase tracking-wider text-(--color-accent)">
          {props.title}
        </h3>
        <div className="text-sm text-gray-500">{props.description}</div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
