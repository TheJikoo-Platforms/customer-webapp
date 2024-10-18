import Image from "next/image";

interface TimelineItemProps {
  time: string;
  status: string;
  description?: string;
  icon?: string;
  isActive: boolean;
  isCompleted: boolean;
  last?: boolean;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  time,
  status,
  description,
  icon,
  isActive,
  isCompleted,
  last,
}) => {
  return (
    <div className="flex space-x-3 group">
      {/* Timeline content */}
      <div className="flex gap-[17px] text-left items-start">
        <span className="text-xs text-gray-500 w-14">{time}</span>

        <div className="flex items-center flex-col h-[calc(100%+38px)]">
          <span className="bg-white rounded-full w-[18px] h-[18px] flex justify-center">
            {!icon ? (
              <CheckMark />
            ) : (
              <span className="flex w-2.5 h-2.5 bg-jikoo-brand-green"></span>
            )}
          </span>
          <div className={`h-full w-[2px] ${!last && "bg-grey-300"}`}></div>
        </div>

        <div>
          <span className="font-medium text-sm text-grey-900 -mt-1">
            {status}
          </span>
          {description && (
            <span className="text-xs text-grey-700 mt-1 flex items-center">
              {icon && (
                <Image
                  src={icon}
                  alt="icon"
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full mr-2"
                />
              )}

              {icon && <p className="">{description}</p>}
              {!icon && <p className="text-black">{description}</p>}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const CheckMark = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    className="min-h-[18px] min-w-[18px]"
  >
    <path
      d="M11.7566 8.05309C12.062 7.77333 12.0828 7.29891 11.8031 6.99345C11.5233 6.68799 11.0489 6.66715 10.7434 6.94691L7.97439 9.48298L7.25655 8.82554C6.95109 8.54578 6.47667 8.56661 6.19691 8.87207C5.91715 9.17754 5.93799 9.65195 6.24345 9.93171L7.46784 11.0531C7.75451 11.3156 8.19427 11.3156 8.48094 11.0531L11.7566 8.05309Z"
      fill="#009933"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5ZM3 9C3 5.68629 5.68629 3 9 3C12.3137 3 15 5.68629 15 9C15 12.3137 12.3137 15 9 15C5.68629 15 3 12.3137 3 9Z"
      fill="#009933"
    />
  </svg>
);
