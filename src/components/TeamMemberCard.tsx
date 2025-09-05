import { type TeamMemberCardType } from "../types/types.ts";

export const TeamMemberCard = (props: TeamMemberCardType) => {
  return (
    <div
      key={props.key}
      className="group flex flex-col w-70 bg-white overflow-hidden shrink-0 shadow-lg rounded-2xl hover:translate-y-1 hover:scale-105 active:translate-y-1 active:scale-105 transition duration-500"
    >
      <slot>{props.imageAstro}</slot>
      <div className="flex flex-col gap-2.5 mb-8 px-8 my-4 text-center font-sans">
        <h3 className="text-xl tracking-wide">{props.name}</h3>
        <h3 className="text-base font-bold uppercase tracking-wider text-(--color-accent)">
          {props.title}
        </h3>
        <div className="text-sm text-gray-500 truncate group-active:whitespace-normal group-hover:whitespace-normal max-h-12 group-hover:max-h-60 group-active:max-h-60 transition-all duration-500 ease-in-out">
          {props.description}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
