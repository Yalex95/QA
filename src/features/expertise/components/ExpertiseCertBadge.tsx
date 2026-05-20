import { Icon } from "@iconify/react";
type ExpertiseCertBadgeProps = {
  certification: string;
};
export default function ExpertiseCertBadge({
  certification,
}: ExpertiseCertBadgeProps) {
  return (
    <span className="expertise__cert_badge">
      <Icon
        icon="material-symbols:check-circle-outline"
        className="text-[var(--color-secondary)]"
      />
      {certification}
    </span>
  );
}
