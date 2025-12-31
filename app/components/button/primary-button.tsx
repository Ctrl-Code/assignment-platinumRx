export type PrimaryButtonProps = {
    label: string;
    ariaLabel: string;
    onClick: () => void
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({ label, ariaLabel, onClick }) => <button
    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm transition-colors cursor-pointer"
    aria-label={ariaLabel}
    onClick={onClick}
>{label}</button>