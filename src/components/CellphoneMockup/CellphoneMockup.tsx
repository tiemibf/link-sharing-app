import { clsx } from "clsx";
import { ComponentProps } from "react";
import { useFormContext } from "react-hook-form";
import { useTab } from "../../contexts/TabContext";
import * as styles from "./CellphoneMockup.css";

interface CellphoneMockupProps extends ComponentProps<"div"> {
  savedProfileDetails?: {
    firstName: string;
    lastName: string;
    email: string;
    profilePicture: FileList | null;
  };
}

export const CellphoneMockup = ({ children, savedProfileDetails }: CellphoneMockupProps) => {
  const { watch } = useFormContext();
  const { currentTab } = useTab();
  const formValues = watch();

  // Use form values for Profile Details tab, saved values for Links tab
  const profileDetails = currentTab === 'profileDetails' ? {
    firstName: formValues.firstName,
    lastName: formValues.lastName,
    email: formValues.email,
    profilePicture: formValues.profilePicture
  } : savedProfileDetails;

  const fullName = profileDetails?.firstName && profileDetails?.lastName
    ? `${profileDetails.firstName} ${profileDetails.lastName}`
    : profileDetails?.firstName || profileDetails?.lastName || "";

  const profilePictureUrl = profileDetails?.profilePicture?.[0]
    ? URL.createObjectURL(profileDetails.profilePicture[0])
    : null;

  return (
    <div className={styles.container}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={308}
        height={632}
        fill="none"
        viewBox="0 0 308 632"
      >
        <path
          stroke="#737373"
          d="M1 54.5C1 24.953 24.953 1 54.5 1h199C283.047 1 307 24.953 307 54.5v523c0 29.547-23.953 53.5-53.5 53.5h-199C24.953 631 1 607.047 1 577.5v-523Z"
        />
        <path
          fill="#fff"
          stroke="#737373"
          d="M12 55.5C12 30.923 31.923 11 56.5 11h24C86.851 11 92 16.149 92 22.5c0 8.008 6.492 14.5 14.5 14.5h95c8.008 0 14.5-6.492 14.5-14.5 0-6.351 5.149-11.5 11.5-11.5h24c24.577 0 44.5 19.923 44.5 44.5v521c0 24.577-19.923 44.5-44.5 44.5h-195C31.923 621 12 601.077 12 576.5v-521Z"
        />
      </svg>
      <div className={styles.svgContainer}>
        <div className={styles.contentContainer}>
          <div className={styles.profileContainer}>
            <div className={styles.avatar}>
              {profilePictureUrl && (
                <img
                  src={profilePictureUrl}
                  alt="Profile"
                  className={styles.avatarImage}
                />
              )}
            </div>
            <div className={clsx(styles.name, !fullName && styles.namePlaceholder)}>
              {fullName}
            </div>
            <div className={clsx(
              styles.email,
              !profileDetails?.email ? styles.emailPlaceholder : styles.emailWithContent
            )}>
              {profileDetails?.email}
            </div>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};
