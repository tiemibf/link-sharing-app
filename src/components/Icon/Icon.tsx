import clsx from "clsx";
import { ReactSVG } from "react-svg";

interface IconProps {
    name: string;
    className?: string;
}

const Icon = ({ name, className = "grayIcon", ...props }: IconProps) => {
    return (
        <ReactSVG src={`src/assets/images/icon-${name}.svg`} className={clsx('icon', className)}{...props} />
    );
};

export default Icon;