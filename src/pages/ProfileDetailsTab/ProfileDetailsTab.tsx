import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Divider } from "../../components/Divider";
import { FileUploader } from "../../components/FileUploader";
import { Input } from "../../components/Input";
import { PreviewCard } from "../../components/PreviewCard";
import { Typography } from "../../components/Typography";
import { Link } from "../../models/Links";
import { headingStyle } from "../LinksTab/components/CustomizeLinksCard/CustomizeLinksCard.css";
import { linksCard, linksTabContainer } from "../LinksTab/LinksTab.css";
import { footerContainer, formField, inputFieldsCard, pictureUploadCard, profileDetailsContainer, saveButtonContainer } from "./ProfileDetailsTab.css.ts";

type ProfileForm = {
    profilePicture: FileList | null;
    firstName: string;
    lastName: string;
    email: string;
    links: Link[];
};

interface ProfileDetailsTabProps {
    savedLinks: Link[];
}

export const ProfileDetailsTab = ({ savedLinks }: ProfileDetailsTabProps) => {
    const { register, handleSubmit, formState: { isDirty }, setValue, reset, watch } = useFormContext<ProfileForm>();
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const profilePicture = watch('profilePicture');

    useEffect(() => {
        if (profilePicture?.[0]) {
            const previewUrl = URL.createObjectURL(profilePicture[0]);
            setImagePreview(previewUrl);
        }
    }, [profilePicture]);

    const handleFileSelect = (file: File) => {
        const previewUrl = URL.createObjectURL(file);
        setImagePreview(previewUrl);

        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(file);
        setValue('profilePicture', dataTransfer.files, { shouldDirty: true });
    };

    const onSubmit = (data: ProfileForm) => {
        reset(data, { keepDirty: false });
    };

    return (
        <>
            <div className={linksTabContainer}>
                <PreviewCard savedLinks={savedLinks} />
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
                        <div className={pictureUploadCard}>
                            <Typography.Body color="gray" asChild>
                                <label>Profile picture</label>
                            </Typography.Body>
                            <FileUploader
                                onFileSelect={handleFileSelect}
                                previewUrl={imagePreview}
                            />
                        </div>
                        <div className={inputFieldsCard}>
                            <div className={formField}>
                                <Typography.Body color="gray" asChild>
                                    <label>First name*</label>
                                </Typography.Body>
                                <Input
                                    placeholder="e.g. John"
                                    {...register('firstName')}
                                    width="432px"
                                />
                            </div>
                            <div className={formField}>
                                <Typography.Body color="gray" asChild>
                                    <label>Last name*</label>
                                </Typography.Body>
                                <Input
                                    placeholder="e.g. Appleseed"
                                    {...register('lastName')}
                                    width="432px"
                                />
                            </div>
                            <div className={formField}>
                                <Typography.Body color="gray" asChild>
                                    <label>Email</label>
                                </Typography.Body>
                                <Input
                                    placeholder="e.g. email@example.com"
                                    {...register('email')}
                                    width="432px"
                                />
                            </div>
                        </div>
                    </form>
                </Card>
            </div>
            <div className={footerContainer}>
                <Divider />
                <div className={saveButtonContainer}>
                    <Button width="80px" disabled={!isDirty} onClick={handleSubmit(onSubmit)}>
                        Save
                    </Button>
                </div>
            </div>
        </>
    );
};