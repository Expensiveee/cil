import { PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid";

export default () => {
  return (
    <div className="z-50 flex text-[9px] lg:text-xs gap-8 items-center py-4 px-3 lg:px-6 justify-between lg:justify-end relative top-0 w-full h-5 border-b-2 border-b-blue-900">
      <div className="flex items-center font-light">
        <PhoneIcon className="w-4 h-4 mr-1" />
        <span>+212 522 94 65 74</span>
      </div>
      <div className="flex items-center font-light">
        <MapPinIcon className="w-4 h-4 mr-1" />
        <span>42, Rue de L’Atlas, CIL, Casablanca</span>
      </div>
    </div>
  );
};
