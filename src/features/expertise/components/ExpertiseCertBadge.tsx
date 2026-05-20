import { Icon } from "@iconify/react";

export default function ExpertiseCertBadge({ certification }: string) {
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
