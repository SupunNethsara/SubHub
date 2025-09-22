export interface SubscribeModalProps {
    isOpen: boolean;
    onClose: () => void;
    website_id?: string;
}
export interface PostModalProps {
    isOpen: boolean;
    onClose: () => void;
    website_id: string;
}
