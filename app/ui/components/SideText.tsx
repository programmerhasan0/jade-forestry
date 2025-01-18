interface Props {
    width: string;
}

const SideText: React.FC<Props> = ({ width }) => {
    const maxWidth = `max-w-[${width}]`;
    return (
        <div
            className={`${maxWidth} bg-[#F0ECE3] p-3 border-l-8 border-green-primary`}
        >
            In plaats van alleen meer bomen te planten, werken we aan het
            herstellen van landschappen en het beschermen ervan tegen ontbossing
            op de lange termijn.
        </div>
    );
};

export default SideText;
