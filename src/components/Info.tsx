import { nanoid } from "nanoid";
import React from "react";

interface Props {
  title: string;
  left?: string[];
  right?: string[];
  list?: boolean;
}

export const Info = ({ title, left, right, list }: Props) => {
  return (
    <section>
      <h1 className="text-3xl text-gray-200 font-bold">{title}</h1>
      <div className="mt-4 text-secondary flex space-x-10 [&>div]:leading-tight">
        <ul className={`${list && "list-disc pl-4"}`}>
          {left?.map((item) => (
            <li key={nanoid()}>{item}</li>
          ))}
        </ul>

        <ul className={`${list && "list-disc pl-4"}`}>
          {right?.map((item) => (
            <li key={nanoid()}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};
