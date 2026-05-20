import { Icon } from "@iconify/react";
type Card = {
  title: string;
  icon: string;
  text: string;
};
export default function CoreSpecialistCard({ icon, title, text }: Card) {
  return (
    <article className="core-specialist__card">
      <Icon icon={icon} className="core-specialist__card_icon"/>
      <h3 className="core-specialist__card_title">{title}</h3>
      <p className="core-specialist__card_text">{text}</p>
    </article>
  );
}
