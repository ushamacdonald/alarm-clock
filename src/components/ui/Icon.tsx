// import { ReactComponent } from "react";
import { ReactComponent as Alarm } from "src/assets/icons/alarm.svg";

type IconProps = {
  name: "alarm";
};

const Icon = (props: IconProps) => {
  const { name, ...svgProps } = props;

  const Icons: Record<IconProps["name"], any> = {
    alarm: <Alarm {...svgProps} />,
  };

  return Icons[name];
};

export default Icon;
