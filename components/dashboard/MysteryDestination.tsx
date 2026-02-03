import { ButtonLink } from "../ui/Button";

export const MysteryDestination = () => (
  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#5B2CFF] via-[#4C6FFF] to-[#00B3FF] p-6 text-white shadow-sm">
    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
    <div className="relative z-10 flex flex-col gap-3">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
        Destination surprise
      </p>
      <h3 className="text-2xl font-semibold">Laisse Vasco choisir pour toi</h3>
      <p className="text-sm text-white/80">
        Une expérience sur-mesure, pensée autour de tes envies et de ton
        énergie du moment.
      </p>
      <div className="pt-2">
        <ButtonLink
          href="/create?surprise=true"
          variant="ghost"
          className="bg-white/90 text-[#111827] hover:bg-white"
        >
          Découvrir
        </ButtonLink>
      </div>
    </div>
  </div>
);
