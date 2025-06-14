import { IllustrationEmpty } from "../../../../assets";
import { Typography } from "../../../../components/Typography";
import { emptyStateWrapper, illustrationEmpty, textStyle } from "./EmptyState.css";

export const EmptyState = () => {
  return (
    <div className={emptyStateWrapper}>
      <IllustrationEmpty className={illustrationEmpty} />
      <Typography.Heading variant="h2" size="large" className={textStyle}>
        Let's get you started
      </Typography.Heading>
      <Typography.Body color="gray" className={textStyle}>
        Use the "Add new link" button to get started. Once you have more than
        one link, you can reorder and edit them. We're here to help you share
        your profiles with everyone!
      </Typography.Body>
    </div>
  );
};
