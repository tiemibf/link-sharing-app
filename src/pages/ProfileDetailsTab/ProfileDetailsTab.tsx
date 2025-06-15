import { useFormContext } from "react-hook-form";
import { IconUploadImage } from "../../assets/icons";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Divider } from "../../components/Divider/Divider";
import { Input } from "../../components/Input";
import { Typography } from "../../components/Typography";
import { headingStyle } from "../LinksTab/components/CustomizeLinksCard/CustomizeLinksCard.css";
import { PreviewCard } from "../LinksTab/components/PreviewCard";
import { linksCard, linksTabContainer } from "../LinksTab/LinksTab.css";
import { footerContainer, formField, inputFieldsCard, profileDetailsContainer, profilePictureContainer, profilePictureHint, profilePictureInput, profilePictureLabel, saveButtonContainer, uploadIcon, uploadText } from "./ProfileDetailsTab.css.ts";

type ProfileForm = {
    profilePicture: FileList | null;
    firstName: string;
    lastName: string;
    email: string;
};

export const ProfileDetailsTab = () => {
    const { register, handleSubmit, formState: { isDirty } } = useFormContext<ProfileForm>();

    const onSubmit = (data: ProfileForm) => {
        console.log(data);
    };

    return (
        <>
            <div className={linksTabContainer}>
                <PreviewCard />
                <Card className={linksCard} height="auto">
                    <form onSubmit={handleSubmit(onSubmit)} className={profileDetailsContainer}>
                        <div>
                            <Typography.Heading variant="h1" size="large" className={headingStyle}>
                                Profile Details
                            </Typography.Heading>
                            <Typography.Body color="gray">
                                Add your details to create a personal touch to your profile.
                            </Typography.Body>
                        </div>
                        <div className={profilePictureContainer}>
                            <label htmlFor="profilePicture" className={profilePictureLabel}>
                                <IconUploadImage className={uploadIcon} />
                                <span className={uploadText}>+ Upload Image</span>
                                <input id="profilePicture" type="file" accept="image/png, image/jpeg" className={profilePictureInput} {...register('profilePicture')} />
                            </label>
                            <div className={profilePictureHint}>
                                Image must be below 1024x1024px.<br />Use PNG or JPG format.
                            </div>
                        </div>
                        <div className={inputFieldsCard}>
                            <div className={formField}>
                                <Typography.Body color="gray" asChild>
                                    <label htmlFor="firstName">First name*</label>
                                </Typography.Body>
                                <Input id="firstName" placeholder="e.g. John" {...register('firstName', { required: true })} width="432px" />
                            </div>
                            <div className={formField}>
                                <Typography.Body color="gray" asChild>
                                    <label htmlFor="lastName">Last name*</label>
                                </Typography.Body>
                                <Input id="lastName" placeholder="e.g. Appleseed" {...register('lastName', { required: true })} width="432px" />
                            </div>
                            <div className={formField}>
                                <Typography.Body color="gray" asChild>
                                    <label htmlFor="email">Email</label>
                                </Typography.Body>
                                <Input id="email" placeholder="e.g. email@example.com" type="email" {...register('email', { required: true })} width="432px" />
                            </div>
                        </div>
                        <div className={footerContainer}>
                            <Divider />
                            <div className={saveButtonContainer}>
                                <Button width="80px" type="submit" disabled={!isDirty}>
                                    Save
                                </Button>
                            </div>
                        </div>
                    </form>
                </Card>
            </div>
        </>
    );
};