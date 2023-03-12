import { nanoid } from "nanoid";
import React from "react";

interface Props {
  title: string;
  left: string[];
  right: string[];
}

export const Info = ({ title, left, right }: Props) => {
  return (
    <section>
      <h1 className="text-3xl text-gray-200 font-bold">{title}</h1>
      <div className="mt-4 text-secondary flex space-x-12 [&>div]:leading-tight">
        <div>
          {left.map((item) => (
            <p key={nanoid()}>{item}</p>
          ))}
        </div>

        <div>
          {right.map((item) => (
            <p key={nanoid()}>{item}</p>
          ))}
        </div>
      </div>
    </section>
  );
};
