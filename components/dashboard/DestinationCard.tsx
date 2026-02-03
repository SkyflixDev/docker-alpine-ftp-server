import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/Badge";

export type Destination = {
  code: string;
  name: string;
  country: string;
  days: number;
  tags: string[];
  imageUrls: string[];
};

type DestinationCardProps = {
  destination: Destination;
};

export const DestinationCard = ({ destination }: DestinationCardProps) => {
  const imageUrl = destination.imageUrls[0];

  return (
    <Link
      href={`/create?destination=${encodeURIComponent(destination.name)}`}
      className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="relative h-56 w-full">
        <Image
          src={imageUrl}
          alt={`${destination.name} photo`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute left-4 top-4 flex items-center gap-2">
          <Badge variant="orange">Populaire</Badge>
        </div>
        <div className="absolute bottom-4 left-4">
          <p className="text-3xl font-semibold tracking-tight text-white">
            {destination.code}
          </p>
          <p className="text-sm text-white/80">
            {destination.name}, {destination.country}
          </p>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-center justify-between text-sm text-[#111827]/70">
          <span>{destination.days} jours</span>
          <span>{destination.tags.join(" • ")}</span>
        </div>
        <div className="mt-auto flex items-center text-sm font-semibold text-[#FF7A00] transition-colors group-hover:text-[#E86A00]">
          Préparer ce voyage →
        </div>
      </div>
    </Link>
  );
};
