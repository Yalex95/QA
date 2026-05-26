import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
type Card = {
  title: string;
  icon: string;
  text: string;
};
export default function CoreSpecialistCard({ icon, title, text }: Card) {
  const { t } = useTranslation();
  return (
    <article className="core-specialist__card">
      <Icon icon={icon} className="core-specialist__card_icon" />
      <h3 className="core-specialist__card_title">{t(title)}</h3>
      <p className="core-specialist__card_text">{t(text)}</p>
    </article>
  );
}
