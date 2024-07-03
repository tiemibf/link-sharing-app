import type { SVGProps } from "react";
const SvgIconDragAndDrop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 12 6"
    {...props}
  >
    <path fill="currentColor" d="M0 0h12v1H0zm0 5h12v1H0z" />
  </svg>
);
export default SvgIconDragAndDrop;
