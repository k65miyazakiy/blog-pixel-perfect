import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Styles = {
  info: {
    className: "border-l-2 border-blue-500 px-4 py-2 mb-2",
    icon: faInfo, // Iconは改善の余地アリ
    iconLabel: "Info",
    iconColor: "text-blue-600",
    lableColor: "text-blue-700",
  },
};

// TODO 位置調整方法に改善の余地アリ。
export const Info = (props: { message: string }) => {
  return (
    <div className={Styles.info.className}>
      <div className={`mb-2 flex gap-2`}>
        <div className={`${Styles.info.iconColor}`}>
          <FontAwesomeIcon
            icon={Styles.info.icon}
            className="h-[14px] pb-[1px]"
          />
        </div>
        <div className={`font-bold ${Styles.info.lableColor}`}>
          {Styles.info.iconLabel}
        </div>
      </div>
      <p className="text-sm text-gray-700">{props.message}</p>
    </div>
  );
};
