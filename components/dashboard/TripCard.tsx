import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/Badge";

export type Trip = {
  title: string;
  destination: string;
  imageUrl: string;
  budget: string;
  progress: number;
  interests: string[];
};

type TripCardProps = {
  trip: Trip;
};

export const TripCard = ({ trip }: TripCardProps) => (
  <div className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm">
    <div className="relative h-44 w-full">
      <Image
        src={trip.imageUrl}
        alt={trip.destination}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      <div className="absolute bottom-4 left-4 text-white">
        <p className="text-sm font-semibold uppercase tracking-wide text-white/80">
          {trip.title}
        </p>
        <h3 className="text-2xl font-semibold">{trip.destination}</h3>
      </div>
    </div>
    <div className="flex flex-col gap-4 p-5">
      <div className="flex items-center justify-between text-sm text-[#111827]/70">
        <span>Budget: {trip.budget}</span>
        <span>{trip.progress}% complété</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-[#111827]/10">
        <div
          className="h-full rounded-full bg-[#FF7A00]"
          style={{ width: `${trip.progress}%` }}
        />
      </div>
      <div className="flex flex-wrap gap-2">
        {trip.interests.map((interest) => (
          <Badge key={interest} variant="soft">
            {interest}
          </Badge>
        ))}
      </div>
      <Link
        href="/create"
        className="text-sm font-semibold text-[#FF7A00] transition-colors hover:text-[#E86A00]"
      >
        Continuer la planification →
      </Link>
    </div>
  </div>
);
