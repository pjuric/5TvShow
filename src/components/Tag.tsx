import { FC } from "react";

interface Props{
  name: string;
}

export const Tag: FC<Props> = ({name}) => {
  return (
    <div className="showOverviewTag">
      #{name}
    </div>
  );
}
