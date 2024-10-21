import { faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const TimeStamp = ({
  createdAt,
  updatedAt,
}: {
  createdAt: string;
  updatedAt?: string;
}) => {
  return (
    <div className="flex gap-3">
      <div>
        <CreatedAt createdAt={createdAt} />
      </div>
      <div>
        <UpdatedAt updatedAt={updatedAt} />
      </div>
    </div>
  );
};

const CreatedAt = ({ createdAt }: { createdAt: string }) => {
  return (
    <div className="flex items-center gap-1 text-gray-500">
      <FontAwesomeIcon icon={faClock} className="w-3" />
      <p className="text-sm">{createdAt}</p>
    </div>
  );
};

const UpdatedAt = ({ updatedAt }: { updatedAt: string | undefined }) => {
  return updatedAt ? (
    <div className="flex items-center gap-1 text-gray-500">
      <FontAwesomeIcon icon={faClock} className="w-3" />
      <p className="text-sm">{updatedAt}</p>
    </div>
  ) : (
    <></>
  );
};
