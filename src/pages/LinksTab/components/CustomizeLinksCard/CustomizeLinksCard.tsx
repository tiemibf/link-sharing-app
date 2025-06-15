import { useFieldArray, useFormContext } from "react-hook-form";
import { Button } from "../../../../components/Button";
import { Card } from "../../../../components/Card";
import { Divider } from "../../../../components/Divider";
import { Typography } from "../../../../components/Typography";
import { linksCard, linksWrapper } from "../../LinksTab.css";
import { EmptyState } from "../EmptyState";
import { LinkItem } from "../LinkItem";
import {
  addLinkButtonStyle,
  buttonWrapper,
  footerStyle,
  headingStyle,
} from "./CustomizeLinksCard.css";

const MAX_LINKS = 5;

export const CustomizeLinksCard = () => {
  const {
    watch,
    control,
    formState: { isDirty },
  } = useFormContext();
  const { fields, append, remove } = useFieldArray({ control, name: "links" });
  const formValues = watch();
  const hasReachedLimit = fields.length >= MAX_LINKS;

  return (
    <Card className={linksCard} height="auto">
      <div style={{ padding: "40px" }}>
        <Typography.Heading variant="h1" size="large" className={headingStyle}>
          Customize your links
        </Typography.Heading>
        <Typography.Body color="gray">
          Add/edit/remove links below and then share all your profiles with the
          world!
        </Typography.Body>
        <Button
          width="100%"
          variant="secondary"
          onClick={() =>
            append({
              platformUrl: "",
              platformName: "",
              id: 0,
              createdAt: "",
              updatedAt: "",
            })
          }
          className={addLinkButtonStyle}
          disabled={hasReachedLimit}
        >
          + Add new link
        </Button>

        {formValues.links && formValues?.links?.length !== 0 ? (
          <div className={linksWrapper}>
            {fields.map((field, index) => (
              <LinkItem key={field.id} index={index} removeItem={remove} />
            ))}
          </div>
        ) : (
          <EmptyState />
        )}
      </div>
      <div className={footerStyle}>
        <Divider />
        <div className={buttonWrapper}>
          <Button width="80px" disabled={!isDirty}>
            Save
          </Button>
        </div>
      </div>
    </Card>
  );
};
