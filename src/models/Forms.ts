import { Link } from "./Links";

export type LinkForm = {
    links: Link[];
    profilePicture: FileList | null;
    firstName: string;
    lastName: string;
    email: string;
}; 