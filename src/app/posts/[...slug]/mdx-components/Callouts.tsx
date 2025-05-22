import { 
  faCircleExclamation, 
  faInfo, 
  faLightbulb, 
  faTriangleExclamation, 
  faCircleCheck, 
  faBan, 
  faFire 
} from "@fortawesome/free-solid-svg-icons";
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
  tip: {
    className: "border-l-2 border-solarized-green bg-solarized-darker px-4 py-3 mb-4 font-mono",
    icon: faLightbulb,
    iconLabel: "TIP",
    iconColor: "text-solarized-green",
    labelColor: "text-solarized-green",
  },
  note: {
    className: "border-l-2 border-solarized-cyan bg-solarized-darker px-4 py-3 mb-4 font-mono",
    icon: faInfo,
    iconLabel: "NOTE",
    iconColor: "text-solarized-cyan",
    labelColor: "text-solarized-cyan",
  },
  warning: {
    className: "border-l-2 border-solarized-yellow bg-solarized-darker px-4 py-3 mb-4 font-mono",
    icon: faTriangleExclamation,
    iconLabel: "WARNING",
    iconColor: "text-solarized-yellow",
    labelColor: "text-solarized-yellow",
  },
  caution: {
    className: "border-l-2 border-solarized-orange bg-solarized-darker px-4 py-3 mb-4 font-mono",
    icon: faCircleExclamation,
    iconLabel: "CAUTION",
    iconColor: "text-solarized-orange",
    labelColor: "text-solarized-orange",
  },
  danger: {
    className: "border-l-2 border-solarized-red bg-solarized-darker px-4 py-3 mb-4 font-mono",
    icon: faFire,
    iconLabel: "DANGER",
    iconColor: "text-solarized-red",
    labelColor: "text-solarized-red",
  },
  success: {
    className: "border-l-2 border-solarized-green bg-solarized-darker px-4 py-3 mb-4 font-mono",
    icon: faCircleCheck,
    iconLabel: "SUCCESS",
    iconColor: "text-solarized-green",
    labelColor: "text-solarized-green",
  },
  error: {
    className: "border-l-2 border-solarized-red bg-solarized-darker px-4 py-3 mb-4 font-mono",
    icon: faBan,
    iconLabel: "ERROR",
    iconColor: "text-solarized-red",
    labelColor: "text-solarized-red",
  },
};

export const Info = (props: { message: string }) => {
  return <Callout type="info" message={props.message} />;
};

export const Tip = (props: { message: string }) => {
  return <Callout type="tip" message={props.message} />;
};

export const Note = (props: { message: string }) => {
  return <Callout type="note" message={props.message} />;
};

export const Warning = (props: { message: string }) => {
  return <Callout type="warning" message={props.message} />;
};

export const Caution = (props: { message: string }) => {
  return <Callout type="caution" message={props.message} />;
};

export const Danger = (props: { message: string }) => {
  return <Callout type="danger" message={props.message} />;
};

export const Success = (props: { message: string }) => {
  return <Callout type="success" message={props.message} />;
};

export const Error = (props: { message: string }) => {
  return <Callout type="error" message={props.message} />;
};

export const Callout = (props: {
  type: "info" | "tip" | "note" | "warning" | "caution" | "danger" | "success" | "error";
  message: string;
}) => {
  const styles = Styles[props.type];
  return (
    <div className={styles.className} data-dynamic-border-container>
      <DynamicBorder label={styles.iconLabel} type="top" />
      <div className="px-6 py-4 pr-12">
        <div className="flex gap-3 items-start">
          <div className={`${styles.iconColor} flex w-[16px] items-center justify-center pt-0.5`}>
            <FontAwesomeIcon icon={styles.icon} className="h-[14px]" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-solarized-text leading-relaxed break-words">{props.message}</p>
          </div>
        </div>
      </div>
      <DynamicBorder label={styles.iconLabel} type="bottom" />
    </div>
  );
};
