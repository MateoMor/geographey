import { useState } from "react";
import { Tooltip } from "react-tooltip";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { useGlobalState } from "../../context/GlobalState";

function HintButton() {
  const { country } = useGlobalState();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      className="button bg-secondaryColor"
      data-tooltip-id="hintTooltip"
      data-tooltip-content={country.subregion}
      data-tooltip-place="bottom"
      data-tooltip-variant="info"
      onClick={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Tooltip
        id="hintTooltip"
        openOnClick={false}
        isOpen={isOpen}
      />

      <HiOutlineInformationCircle size="60%" />
    </button>
  );
}

export default HintButton;
