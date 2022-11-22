import Image from 'next/image';

export default function ProfileIcon({ imageIcon }: { imageIcon: any }) {
  return (
    <div>
      <Image
        className="rounded-full object-cover"
        alt="ProfileIcon" width={100} src={imageIcon} />
    </div>
  );
}
