import { useFormContext } from "react-hook-form";
import { IconUploadImage } from "../../assets/icons";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Input } from "../../components/Input";
import { Typography } from "../../components/Typography";
import { buttonWrapper, footerStyle, headingStyle } from "../LinksTab/components/CustomizeLinksCard/CustomizeLinksCard.css";
import { PreviewCard } from "../LinksTab/components/PreviewCard";
import { linksCard, linksTabContainer } from "../LinksTab/LinksTab.css";

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
                    <form onSubmit={handleSubmit(onSubmit)} style={{ padding: 40, display: 'flex', flexDirection: 'column', gap: 32 }}>
                        <div>
                            <Typography.Heading variant="h1" size="large" className={headingStyle}>
                                Profile Details
                            </Typography.Heading>
                            <Typography.Body color="gray">
                                Add your details to create a personal touch to your profile.
                            </Typography.Body>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 32, background: '#FAFAFA', borderRadius: 12, padding: 24, margin: '32px 0 0 0' }}>
                            <label htmlFor="profilePicture" style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: 160, height: 160, background: '#F6F6FF', borderRadius: 16, border: '2px dashed #633CFF', color: '#633CFF', fontWeight: 500, fontSize: 16, gap: 12 }}>
                                <IconUploadImage style={{ fontSize: 40, marginBottom: 8 }} />
                                <span style={{ marginBottom: 4, color: '#633CFF', fontWeight: 500 }}>+ Upload Image</span>
                                <input id="profilePicture" type="file" accept="image/png, image/jpeg" style={{ display: 'none' }} {...register('profilePicture')} />
                            </label>
                            <div style={{ color: '#737373', fontSize: 14, maxWidth: 180 }}>
                                Image must be below 1024x1024px.<br />Use PNG or JPG format.
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginTop: 32 }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Typography.Body color="gray" asChild>
                                    <label htmlFor="firstName">First name*</label>
                                </Typography.Body>
                                <Input id="firstName" placeholder="e.g. John" {...register('firstName', { required: true })} width="432px" />
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Typography.Body color="gray" asChild>
                                    <label htmlFor="lastName">Last name*</label>
                                </Typography.Body>
                                <Input id="lastName" placeholder="e.g. Appleseed" {...register('lastName', { required: true })} width="432px" />
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Typography.Body color="gray" asChild>
                                    <label htmlFor="email">Email</label>
                                </Typography.Body>
                                <Input id="email" placeholder="e.g. email@example.com" type="email" {...register('email', { required: true })} width="432px" />
                            </div>
                        </div>
                        <div className={footerStyle} style={{ marginTop: 32 }}>
                            <div className={buttonWrapper}>
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