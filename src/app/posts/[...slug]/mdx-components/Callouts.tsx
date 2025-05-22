import { faCircleExclamation, faInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DynamicBorder } from "@/app/components/DynamicBorder";

const Styles = {
  info: {
    className: "border-l-2 border-solarized-blue bg-solarized-darker px-4 py-3 mb-4 font-mono",
    icon: faInfo,
    iconLabel: "INFO",
    iconColor: "text-solarized-blue",
    labelColor: "text-solarized-blue",
  },
  caution: {
    className: "border-l-2 border-solarized-red bg-solarized-darker px-4 py-3 mb-4 font-mono",
    icon: faCircleExclamation,
    iconLabel: "CAUTION",
    iconColor: "text-solarized-red",
    labelColor: "text-solarized-red",
  },
};

export const Info = (props: { message: string }) => {
  return <Callout type="info" message={props.message} />;
};

export const Caution = (props: { message: string }) => {
  return <Callout type="caution" message={props.message} />;
};

export const Callout = (props: {
  type: "info" | "caution";
  message: string;
}) => {
  const styles = Styles[props.type];
  return (
    <div className={styles.className} data-dynamic-border-container>
      <DynamicBorder label={styles.iconLabel} type="top" />
      <div className="px-2">
        <div className="flex gap-3 items-start">
          <div className={`${styles.iconColor} flex w-[16px] items-center justify-center pt-0.5`}>
            <FontAwesomeIcon icon={styles.icon} className="h-[14px]" />
          </div>
          <div className="flex-1">
            <p className="text-sm text-solarized-text leading-relaxed">{props.message}</p>
          </div>
        </div>
      </div>
      <DynamicBorder label={styles.iconLabel} type="bottom" />
    </div>
  );
};
