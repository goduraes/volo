import { DetailedHTMLProps, HTMLAttributes } from "react";
import "./style.css";

export interface AnimationDivTypes extends  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: any,
  inView: boolean;
  duration: string;
}

export default function AnimationDiv({ children, inView, duration, className, ...rest }: AnimationDivTypes) {
  return (
    <div {...rest} className={`${className} transition-all duration-[${duration}] ${inView ? "animation-show-left" : "animation-hidden-left"}`}>
      {children}
    </div>
  );
}
