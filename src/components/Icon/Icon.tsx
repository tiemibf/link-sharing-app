import { ReactSVG } from "react-svg";

interface IconProps {
    name: string;
    className?: string;
}

const Icon = ({ name, className = "purpleIcon", ...props }: IconProps) => {
    return (
        <ReactSVG src={`src/assets/images/icon-${name}.svg`} className={`${className}`} {...props} />
    );
};

export default Icon;