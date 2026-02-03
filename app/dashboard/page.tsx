import Image from "next/image";
import { DestinationCarousel } from "../../components/dashboard/DestinationCarousel";
import { MysteryDestination } from "../../components/dashboard/MysteryDestination";
import { TripCard, type Trip } from "../../components/dashboard/TripCard";
import { ButtonLink } from "../../components/ui/Button";
import { Badge } from "../../components/ui/Badge";
import {
  Destination,
} from "../../components/dashboard/DestinationCard";
import { buildUnsplashUrl } from "../../lib/unsplash";

const destinations: Destination[] = [
  {
    code: "MAR",
    name: "Marrakech",
    country: "Maroc",
    days: 7,
    tags: ["Culture", "Food"],
    imageUrls: [
      buildUnsplashUrl("photo-1489515217757-5fd1be406fef"),
      buildUnsplashUrl("photo-1489515217757-5fd1be406fef", 1200),
      buildUnsplashUrl("photo-1500530855697-b586d89ba3ee"),
      buildUnsplashUrl("photo-1469474968028-56623f02e42e"),
      buildUnsplashUrl("photo-1500530855697-b586d89ba3ee", 1200),
    ],
  },
  {
    code: "TYO",
    name: "Tokyo",
    country: "Japon",
    days: 14,
    tags: ["Tradition", "Nature"],
    imageUrls: [
      buildUnsplashUrl("photo-1505852679233-d9fd70aff56d"),
      buildUnsplashUrl("photo-1505852679233-d9fd70aff56d", 1200),
      buildUnsplashUrl("photo-1480796927426-f609979314bd"),
      buildUnsplashUrl("photo-1549692520-acc6669e2f0c"),
      buildUnsplashUrl("photo-1480796927426-f609979314bd", 1200),
    ],
  },
  {
    code: "BCN",
    name: "Barcelone",
    country: "Espagne",
    days: 3,
    tags: ["Culture", "Plage"],
    imageUrls: [
      buildUnsplashUrl("photo-1505739773434-c965db02bca7"),
      buildUnsplashUrl("photo-1505739773434-c965db02bca7", 1200),
      buildUnsplashUrl("photo-1500530855697-b586d89ba3ee"),
      buildUnsplashUrl("photo-1500530855697-b586d89ba3ee", 1200),
      buildUnsplashUrl("photo-1489515217757-5fd1be406fef"),
    ],
  },
  {
    code: "ROM",
    name: "Rome",
    country: "Italie",
    days: 5,
    tags: ["Histoire", "Gastro"],
    imageUrls: [
      buildUnsplashUrl("photo-1501785888041-af3ef285b470"),
      buildUnsplashUrl("photo-1501785888041-af3ef285b470", 1200),
      buildUnsplashUrl("photo-1469474968028-56623f02e42e"),
      buildUnsplashUrl("photo-1469474968028-56623f02e42e", 1200),
      buildUnsplashUrl("photo-1500530855697-b586d89ba3ee"),
    ],
  },
  {
    code: "LIS",
    name: "Lisbonne",
    country: "Portugal",
    days: 4,
    tags: ["Vue", "Food"],
    imageUrls: [
      buildUnsplashUrl("photo-1500530855697-b586d89ba3ee"),
      buildUnsplashUrl("photo-1500530855697-b586d89ba3ee", 1200),
      buildUnsplashUrl("photo-1523906834658-6e24ef2386f9"),
      buildUnsplashUrl("photo-1523906834658-6e24ef2386f9", 1200),
      buildUnsplashUrl("photo-1469474968028-56623f02e42e"),
    ],
  },
];

const trips: Trip[] = [
  {
    title: "Voyage en cours",
    destination: "Barcelone",
    imageUrl: buildUnsplashUrl("photo-1505739773434-c965db02bca7"),
    budget: "1 250 €",
    progress: 65,
    interests: ["Architecture", "Plage", "Tapas"],
  },
];

const heroImage = buildUnsplashUrl("photo-1500530855697-b586d89ba3ee");

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#111827]">
      <header className="sticky top-0 z-50 border-b border-white/20 bg-gradient-to-r from-[#FF7A00] via-[#FF8B26] to-[#FF7A00]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-lg font-semibold text-[#FF7A00]">
              G
            </div>
            <div className="text-white">
              <p className="text-xs uppercase tracking-[0.25em] text-white/70">
                Govasco
              </p>
              <h1 className="text-lg font-semibold">Dashboard</h1>
            </div>
          </div>
          <ButtonLink href="/create" className="shadow-lg">
            Nouveau voyage
          </ButtonLink>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-8 md:px-6">
        <section className="grid gap-6 rounded-3xl bg-white p-6 shadow-sm md:grid-cols-[1.2fr_1fr]">
          <div className="flex flex-col gap-4">
            <Badge variant="orange" className="w-fit">
              Tableau de bord premium
            </Badge>
            <h2 className="text-3xl font-semibold md:text-4xl">
              Créez votre itinéraire personnalisé
            </h2>
            <p className="text-sm text-[#111827]/70 md:text-base">
              Inspirez-vous des destinations favorites de la communauté, laissez
              Vasco affiner les détails et préparez un voyage qui vous ressemble.
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/create">Créer mon voyage</ButtonLink>
              <ButtonLink href="#destinations" variant="ghost">
                Explorer les suggestions
              </ButtonLink>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src={heroImage}
              alt="Vasco, votre assistant de voyage"
              width={600}
              height={600}
              className="h-full w-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
            <div className="absolute bottom-4 left-4 flex items-center gap-3 text-white">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-lg font-semibold">
                V
              </div>
              <div>
                <p className="text-sm font-semibold">Vasco</p>
                <p className="text-xs text-white/70">
                  Votre copilote intelligent
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-[1.4fr_1fr]">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Mes voyages</h2>
              <ButtonLink href="/create" variant="ghost">
                Ajouter
              </ButtonLink>
            </div>
            {trips.length > 0 ? (
              <div className="grid gap-4">
                {trips.map((trip) => (
                  <TripCard key={trip.destination} trip={trip} />
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-[#111827]/20 bg-white p-6 text-center text-sm text-[#111827]/70">
                Pas encore de voyage planifié. Créez votre première aventure avec
                Vasco ✨
              </div>
            )}
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold">Destination surprise</h2>
            <MysteryDestination />
          </div>
        </section>

        <section id="destinations" className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Destinations populaires</h2>
            <p className="text-sm text-[#111827]/60">
              Sélectionnées pour vous
            </p>
          </div>
          <DestinationCarousel destinations={destinations} />
        </section>
      </main>
    </div>
  );
}
