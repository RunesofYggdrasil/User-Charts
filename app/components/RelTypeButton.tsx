import React from "react";

interface RelTypeProps {
  reltypes: {
    name: string;
    hexCode: string;
  }[];
}

const RelTypeButton = ({ reltypes }: RelTypeProps) => {
  return <button type="button"></button>;
};

export default RelTypeButton;
