import { faCircleExclamation, faInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Styles = {
  info: {
    className: "border-l-2 border-blue-500 px-4 py-2 mb-2",
    icon: faInfo, // Iconは改善の余地アリ
    iconLabel: "Info",
    iconColor: "text-blue-600",
    lableColor: "text-blue-700",
  },
  caution: {
    className: "border-l-2 border-red-500 px-4 py-2 mb-2",
    icon: faCircleExclamation, // Iconは改善の余地アリ
    iconLabel: "Caution",
    iconColor: "text-red-600",
    lableColor: "text-red-700",
  },
};

export const Info = (props: { message: string }) => {
  return <Callout type="info" message={props.message} />;
};

export const Caution = (props: { message: string }) => {
  return <Callout type="caution" message={props.message} />;
};

// TODO 位置調整方法に改善の余地アリ。
export const Callout = (props: {
  type: "info" | "caution";
  message: string;
}) => {
  const styles = Styles[props.type];
  return (
    <div className={styles.className}>
      <div className={`mb-2 flex gap-2`}>
        <div
          className={`${styles.iconColor} flex w-[12px] items-center justify-center`}
        >
          <FontAwesomeIcon icon={styles.icon} className="h-[14px] pb-[1px]" />
        </div>
        <div className={`font-bold ${styles.lableColor}`}>
          {styles.iconLabel}
        </div>
      </div>
      <p className="text-sm text-gray-700">{props.message}</p>
    </div>
  );
};
